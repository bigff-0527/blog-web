<template>
  <blockquote class="blockquote  text-center m-padded-big">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</template>

<script>
  import FooterTab from "components/common/footer/Footer";
  import FooterItem from "components/common/footer/FooterItem";

  export default {
    name: "MainFooter",
    components: {
      FooterTab,
      FooterItem
    }
  }
</script>

<style scoped>

</style>
