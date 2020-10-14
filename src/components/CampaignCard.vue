<template>
  <section class="campaign-card__content">
    <div v-if="campaign.image" class="img-div">
      <img :src=campaign.image />
    </div>
    <article v-if="!campaign.image" class="no-img">
      <h4>
        No <br /> Image <br /> available
      </h4>
    </article>
    <div class="campaign-card__info">
      <h1> {{campaign.name}}</h1>
      <p>{{campaign.description.split('.')[0]}}...</p>
    </div>
    <div class="goal"><b>${{(campaign.value* exchangeRate).toFixed(2)}}</b> raised</div>
  </section>
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
<style lang="scss">
@import "../_variables.scss";

/* [class^="campaign-card"] { */
/*   float: left; */

/*   &:not(:last-child) { */
/*     margin-right: 11rem; */
/*   } */
/* } */

.campaign-card {
  background: whitesmoke;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  align-items: center;
  text-decoration: none;
  box-shadow: 0 5px 10px rgba(black, .2);
  height: 60vh;
  width: calc(100% - 3 * $grid-gap);
  color: black;
  float: left;

  &:not(:last-child) {
    margin-right: $grid-gap;
  }

  &:hover {
    transform: scale(1.02) translateY(-3px);
    box-shadow: 0 8px 15px rgba(black, .4);
    transition: all 0.25s;
    text-decoration: underline;
    outline: 1px solid black;
  }

  &__content {
    height: 52rem;
    transition: all 1s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
