<template>
  <div v-if="!this.$store.state.loading">
    <div class="about">
    </div>
    <div class="container-header">
      <h2>Active Boosters</h2>
      <div class= "button-section">
        <button :disabled="startIndex === 0" @click="previousPage">⇦</button>
        <button :disabled="startIndex + 4 >= campaigns.length" @click="nextPage">⇨</button>
      </div>
    </div>
    <CampaignCard
      v-bind:campaigns="campaigns"
      v-bind:startIndex="startIndex"
      v-bind:endIndex="endIndex"
      />
  </div>
</template>

<script>

import CampaignCard from '@/components/CampaignCard.vue';
/* import Loading from '@/components/Loading.vue'; */

export default {
  name: 'Container',
  props: ["campaigns"],
  data() {
    return {
      visibleCampaigns: [],
      startIndex: 0,
      endIndex: 4
    }
  },
  methods: {
    nextPage() {
      if (this.startIndex < this.campaigns.length - 4) {
        this.startIndex += 4
      }
    },
    previousPage() {
      if (this.startIndex > 0) {
        this.startIndex -= 4
      }
    }
  },
  components: {
    CampaignCard
    /* Loading */
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../_variables.scss";

  .container-header {
    display: flex;
    width: 93vw;
    justify-content: space-between;
    margin: auto;
    margin-top: 2vh;
    margin-bottom: 0;
    border-bottom: 1px solid #2c3e50;
  }

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 20px;
    border: 1px solid black;
    margin: .1rem;
  }

  h2 {
    margin-left: 1.5vw;
    margin-bottom: 0;
  }

  .button-section {
    margin-top: auto;
    margin-bottom: .5rem;
  }

</style>
      <!--
      <router-link
        class="campaign-row"
        :to="{ name: 'Single Campaign',
        params: {address: campaign.address}}"
        v-for="campaign in campaigns.slice(startIndex, startIndex + 4)"
        v-bind:key="campaign.id"
      >

      </router-link>

.campaign-container {
  max-width: 105rem;
  height: 63vh;
  margin: 1.3rem auto 0 auto;

  .campaign-row {
    align-items: center;
    text-decoration: none;
    box-shadow: 0 5px 10px rgba(black, .2);
    color: black;
    width: calc((100% - 3 * #{$grid-gap}) / 4);
    float: left;

    &:not(:last-child) {
      margin-right: $grid-gap;
    }
  }
}

      -->
