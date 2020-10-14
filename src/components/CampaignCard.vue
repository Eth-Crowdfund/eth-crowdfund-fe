<template>
  <section class="campaigns">
    <div class="campaign"
      v-for="campaign in campaigns.slice(startIndex, startIndex + 4)"
      v-bind:key="campaign.id"
    >
      <div class="content">
        <article class="content__side content__side--front">
        <div v-if="campaign.image" class="campaign-content__front--img">
          <img :src=campaign.image />
          <article v-if="!campaign.image" class="no-img">
            <h4>
              No <br /> Image <br /> available
            </h4>
          </article>
        </div>
        <div class="campaign-card__info">
          <h1> {{campaign.name}}</h1>
          <p>{{campaign.description.split('.')[0]}}...</p>
        </div>
        <div class="goal"><b>${{(campaign.value* exchangeRate).toFixed(2)}}</b> raised</div>
        </article>
        <article class="campaign-card__content--back">
          <h1> {{campaign.name}}</h1>
          <p>{{campaign.description.split('.')[0]}}...</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'CampaignCard',
  props: ["campaigns", "startIndex", "endIndex"],
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

.campaigns {
  max-width: 105rem;
  height: 63vh;
  margin: 1.3rem auto 0 auto;

  @include clearfix;

  .campaign {
    box-shadow: 0 5px 10px rgba(black, .2);
    color: black;
    width: calc((100% - 3 * #{$grid-gap}) / 4);
    float: left;

    &:not(:last-child) {
      margin-right: $grid-gap;
    }
  }
}

.campaign-content {
  position: relative;

  &__front {
    background: orangered;
    height: 60vh;
    position: relative;

    &--img {
        padding: 0;
        position: absolute;
        top: 0; left: 0;
        width: 100%;

        & img {
         background-size: cover;
         height: 30vh;
         width: 100%;
       }
    }

  }

  &__back {
    background: black;
    position: absolute;
    top: 0; left: 0;
  }

  &:hover {
      transform: scale(1.02) translateY(-3px);
      box-shadow: 0 8px 15px rgba(black, .4);
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
