<template>
  <div>
    <admin-tab-bar></admin-tab-bar>
    <router-view></router-view>

  </div>
</template>

<script>
  import AdminTabBar from "components/content/mainTabBar/AdminTabBar";
  import MainFooter from "components/content/mainFooter/MainFooter";
  import {message} from "assets/js/pop"
  import {dropdown} from "assets/js/pop"
  export default {
    name: "Admin",
    components: {
      AdminTabBar,
      MainFooter
    },
    mounted() {
      message()
    }
  }
</script>

<style scoped>

</style>
