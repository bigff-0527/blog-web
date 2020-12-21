<template>
    <footer class="ui inverted vertical segment m-padded-tb-massive">
      <div class="ui center aligned container">
        <div class="ui inverted divided stackable grid">
          <slot></slot>
        </div>
        <div class="ui inverted section divider"></div>
        <p class="m-text-thin m-text-spaced m-opactiy-tiny">Copyright © 2020-2021 Lirenmi Designed by Lirenmi</p>
      </div>
    </footer>

</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>

</style>
