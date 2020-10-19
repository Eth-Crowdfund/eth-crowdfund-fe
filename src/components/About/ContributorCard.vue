<template>
  <a v-bind:href="contributor.gitHub" target="blank">
    <img src="@/assets/GitHub-Mark-32px.png" />
    <p>{{ contributor.name }}</p>
  </a>
</template>

<script>
export default {
  name: 'ContributorCard',
  props: ["contributor"]
}
</script>

<style>
/* <!-- Add "scoped" attribute to limit CSS to this component only --> */
</style>
