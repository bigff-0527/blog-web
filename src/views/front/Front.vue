<template>
  <el-container>
    <el-header>
      <front-tab-bar/>
    </el-header>
    <el-main>
      <transition mode="out-in" enter-active-class="animate__animated animate__bounceInLeft"  leave-active-class="animate__animated animate__backOutRight">
        <router-view/>
      </transition>
    </el-main>
    <el-footer>
      <main-footer></main-footer>
    </el-footer>
  </el-container>
</template>

<script>
  import MainFooter from "components/content/mainFooter/MainFooter";
  import FrontTabBar from "components/content/mainTabBar/FrontTabBar";

  import "assets/js/sakura"

  export default {
    name: "Front",
    components: {
      FrontTabBar,
      MainFooter
    },
    data() {
      return  {
        blogList: {
          pageNum: 0,
          pageSize: 0,
          list: [],
        },
      }
    },

    methods: {

    },
    created() {
    },

  }
</script>

<style scoped>
.el-header{
  padding : 0 !important;
}
</style>
