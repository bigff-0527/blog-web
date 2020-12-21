<template>
    <!-- 中间内容 -->
    <div class="m-container-small m-padded-tb-big">
      <div class="ui container">
        <div class="ui success large  message">
          <h2>Hi</h2>
          <p>欢迎登录！</p>
        </div>
        <img src="https://picsum.photos/seed/picsum/1000/600" alt="" class="ui rounded bordered fluid image">
      </div>
    </div>
</template>

<script>
  import AdminTabBar from "components/content/mainTabBar/AdminTabBar";
  export default {
    name: "Index",
    components: {
      AdminTabBar
    }
  }
</script>

<style scoped>

</style>
