<template>
  <section class="campaigns">
    <div class="campaign"
      v-for="campaign in campaigns.slice(startIndex, startIndex + 4)"
      v-bind:key="campaign.id"
      >
      <article class="content" :id=campaign.id>
        <div class="content__side content__side--front">
        <div v-if="campaign.image" class="content__img">
          <img :src=campaign.image />
          <article v-if="!campaign.image" class="no-img">
            <h4>
              No <br /> Image <br /> available
            </h4>
          </article>
        </div>
        <div class="content__info">
          <h1> {{campaign.name}}</h1>
          <p>{{campaign.description.split('.')[0]}}...</p>
        </div>
        </div>
        <div class="content__side content__side--back">
          <h1> {{campaign.name}}</h1>
          <p>{{campaign.description}}</p>
          <div class="goal"><b>${{(campaign.value* exchangeRate).toFixed(2)}}</b>
          raised</div>
        </div>
      </article>
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
/* ROW LAYOUT */

.campaigns {
  max-width: 105rem;
  margin: 1.3rem auto 0 auto;

  @include clearfix;

  .campaign {
    width: calc((100% - 3 * #{$grid-gap}) / 4);
    background: transparent;
    float: left;

    &:not(:last-child) {
      margin-right: $grid-gap;
    }
  }
}

/* TRANSFORM FUNC */

.content {
  font-size: 1.6rem;
  text-align: center;
  position: relative;
  height: 40rem;
  perspective: 150rem;
  -moz-perspective: 150rem;
    box-shadow: 0 1.5rem 4rem rgba(black, .25);

  &__side {
    height: 40rem;
    width: 100%;
    transition: all .8s ease;
    position: absolute;
    top: 0; left: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;

    &--front {
      background-color: whitesmoke;
    }

    &--back {
      transform: rotateY(180deg);
      background-image: linear-gradient(to right bottom, $light-green, $green);
    }
  }

  &:hover &__side--front {
    transform: rotateY(-180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }

/* FRONT */

  &__img {
    @include aspect-ratio(2.3, 3);
    /* background-size: cover; */

    img {
      height: 40vh;
      width: 100%;
    }
  }

  &__info {
    position: absolute;
    bottom: 1.6rem;

    h1 {
      margin: 1rem;
    }

    .goal {
      width: 80%;
      margin: 0 auto;
    }
  }

}
</style>
