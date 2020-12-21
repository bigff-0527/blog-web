<template>
  <div>
    <banner>
      <a href="#" class=" item">新增</a>
      <a href="#"  class=" teal active item">列表</a>
    </banner>
    <div class="m-container-small m-padded-tb-big">
      <div class="ui container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from "components/common/banner/Banner";
  export default {
    name: "LabelItem",
    components: {
      Banner
    }
  }
</script>

<style scoped>

</style>
