<template>
  <div class="five wide column">
    <!-- 分类 -->
    <slot name="classifyCount"></slot>

    <!-- 标签 -->
    <slot name="labelCount"></slot>

    <!-- 最新推荐 -->

    <slot name="recommend"></slot>

    <!-- 二维码 -->
    <slot name="QR"></slot>
  </div>
</template>

<script>
  import HomeClassify from "./homeClassify/HomeClassify";
  import HomeLabel from "./homeLabel/HomeLabel";
  import HomeQR from "./homeQR/HomeQR";
  import HomeRecommend from "./homeRecommend/HomeRecommend";

  export default {
    name: "HomeRight",
    components: {
      HomeClassify,
      HomeLabel,
      HomeQR,
      HomeRecommend
    }
  }
</script>

<style scoped>

</style>
