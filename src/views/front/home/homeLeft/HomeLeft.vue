<template>
  <div class="eleven wide column">
    <!-- 头部 -->
    <slot name="count"></slot>
    <!-- 中部博客列表 -->
    <div class="ui attached  segment">
      <slot name="blogList"></slot>
    </div>
    <!-- 底部 分页 -->
    <slot name="page"></slot>
  </div>
</template>

<script>


  export default {
    name: "HomeLeft",

  }
</script>

<style scoped>

</style>
