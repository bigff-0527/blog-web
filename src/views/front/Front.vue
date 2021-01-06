<template>
<!--    <router-link to="/front/home"></router-link>-->
  <div>
    <front-tab-bar ref="boy01"/>
    <router-view

    >
    </router-view>
    <main-footer>

    </main-footer>

  </div>
</template>

<script>
  import MainFooter from "components/content/mainFooter/MainFooter";
  import FrontTabBar from "components/content/mainTabBar/FrontTabBar";


  export default {
    name: "Front",
    components: {
      FrontTabBar,
      MainFooter
    },
    data() {
      return  {

      }
    },

    methods: {

    },
    created() {

    },


  }
</script>

<style scoped>

</style>
