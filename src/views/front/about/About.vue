<template>
  <about-item>
    <p slot="desc" class="m-text">来自湖南邵阳的键盘侠</p>
    <div slot="hobby" class="ui basic orange left pointing label m-margin-tb-tiny">编程 </div>
    <div slot="knowledge" class="ui basic teal left pointing label m-margin-tb-tiny">Java </div>
    <img slot="wechat" src="~assets/img/wechat.jpg"  alt="" class="ui rounded image" style="width: 120px;">
    <img slot="qq" src="~assets/img/wechat.jpg"  alt="" class="ui rounded image" style="width: 120px;">
  </about-item>
</template>

<script>
  import {pop} from "assets/js/pop";
  import AboutItem from "./aboutItem/AboutItem";
  export default {
    name: "About",
    components: {
      AboutItem
    },
    mounted() {
      pop()
    }

  }
</script>

<style scoped>

</style>
