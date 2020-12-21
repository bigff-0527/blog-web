<template>
  <footer-tab>
    <footer-item>
      <div class="ui inverted link list">
        <div class="item">
          <img src="~assets/img/wechat.jpg" class="ui rounded image" style="width: 100px;">
        </div>
      </div>
    </footer-item>
    <footer-item>
      <h4 class="ui inverted header m-text-thin m-text-spaced" >最新博客</h4>
      <div id="newblog-container">
        <div class="ui inverted link list">
<!--          <a href="#"  target="_blank" class="item"></a>-->
          <slot name="blogs"></slot>
        </div>
      </div>
    </footer-item>
    <footer-item>
      <h4 class="ui inverted header m-text-thin m-text-spaced ">联系我</h4>
          <div class="ui inverted link list">

<!--            <a href="#" class="item" >Email：2410547286@qq.com</a>-->
<!--            <a href="#" class="item" >QQ：2410547286</a>-->
            <slot name="tel"></slot>
          </div>
    </footer-item>
    <footer-item>
      <h4 class="ui inverted header m-text-thin m-text-spaced ">Blog</h4>

<!--          <p class="m-text-thin m-text-spaced m-opactiy-mini">这是我的个人博客，我会把生活中的点点滴滴记录下来</p>-->

      <slot name="desc"></slot>
    </footer-item>
  </footer-tab>
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
