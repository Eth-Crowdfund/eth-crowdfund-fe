<template>
  <section class="contributor-card">
    <h3>{{ contributor.name }}</h3>
    <div class="links">
      <a v-bind:href="contributor.gitHub" target="blank">
        <img src="@/assets/GitHub-Mark-32px.png" />
        <p>GitHub</p>
      </a>
      <a v-bind:href="contributor.gitHub" target="blank">
        <img src="@/assets/GitHub-Mark-32px.png" />
        <p>Portfolio</p>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContributorCard',
  props: ["contributor"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../_variables.scss";

  .contributor-card {
    background: whitesmoke;
    display: flex;
    flex-flow: column wrap;
    // justify-content: space-between;
    align-items: center;
    text-decoration: none;
    box-shadow: 1px 1px 3px grey;
    height: 30vh;
    width: 30vw;
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

  .links {
    display: flex;
    flex-flow: row;
  }

  img {
    height: 2rem;
    width: 2rem;
  }

</style>
