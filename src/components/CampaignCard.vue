<template>
  <router-link
    style="text-decoration: none;"
    :to="{ name: 'Single Campaign',
    params: {address: campaign.address}}">
    <div>
      <section class="campaign-card">
        <section>
        <div v-if="campaign.image" class="img-div"><img :src=campaign.image /></div>
        <article v-if="!campaign.image" class="no-img">
          <h4>
            No <br /> Image <br /> available
          </h4>
        </article>
        <div class="campaign-info">
          <h1> {{campaign.name}}</h1>
          <p>{{campaign.description.split('.')[0]}}...</p>
        </div>
        </section>
        <div class="goal"><b>${{(campaign.value* exchangeRate).toFixed(2)}}</b> raised</div>
      </section>
    </div>
  </router-link>
</template>

<script>

export default {
  name: 'CampaignCard',
  props: ["campaign"],
  created() {
    this.$store.dispatch('fetchExchangeRate')
  },
  computed: {
    exchangeRate() {
      return this.$store.state.exchangeRate
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../_variables.scss";

h1 {
  margin: 1rem 0 0 0;
}

img {
  width: 100%;
  height: 100%;
}

.campaign-card {
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  box-shadow: 1px 1px 3px grey;
  height: 60vh;
  width: 20vw;
  box-sizing: border-box;
  transform: scale(1);
  color: black;
  &:hover {
    transform: scale(1.02);
    box-shadow: 2px 2px 10px black;
    transition: all 0.25s;
    text-decoration: underline;
    outline: 1px solid black;
  }
}

.img-div,
.no-img {
  height: 30vh;
  width: 20vw;
}

.no-img {
  @include pixelate(.1rem, $dark_gray, $gray);
}

</style>
