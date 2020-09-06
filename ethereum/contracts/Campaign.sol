pragma solidity >=0.6.0 <0.8.0;

contract Campaign {
    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping (address => bool) approvals;
    }

    address public manager;
    uint public minimumContribution;
    uint public approversCount;
    mapping(address => bool) public approvers;
    uint public requestsCount;
    mapping (uint => Request) public requests;

     modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        if (approvers[msg.sender] != true) {
          approvers[msg.sender] = true;
          approversCount++;
        }
    }

    function createRequest(string memory description, uint value, address payable recipient)
        public restricted returns (uint requestID){
          requestID = requestsCount++;
          Request storage newRequest = requests[requestID];
          newRequest.description = description;
          newRequest.value = value;
          newRequest.recipient = recipient;
          newRequest.complete = false;
          newRequest.approvalCount = 0;
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount ++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (uint, uint, uint, uint, address) {
        return (
            minimumContribution,
            address(this).balance,
            requestsCount,
            approversCount,
            manager
        );
  }
}
