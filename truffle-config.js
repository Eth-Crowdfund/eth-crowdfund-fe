const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  contracts_directory: "./ethereum/contracts",
  contracts_build_directory: "./ethereum/build",
  migrations_directory: "./ethereum/migrations",

  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
     provider: function() {
      return new HDWalletProvider(process.env.INFURA_PHRASE,
        `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`);
     },
     network_id: 4,
     gas: 4500000,
     gasPrice: 10000000000,
 }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    useColors: true
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.25",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      }
    },
};