<template>
  <tab-bar>
    <a slot="text" @click="clickTab(1)"
       :class="navIndex=== 1 ? ' m-item item m-mobile-hide active' :' m-item item m-mobile-hide' " >
      <i class="mail icon"></i>首页
    </a>
    <a slot="text" @click="clickTab(2)"
       :class="navIndex=== 2 ? ' m-item item m-mobile-hide active' :' m-item item m-mobile-hide' " >
      <i class="idea icon"></i>分类
    </a>
    <a slot="text" @click="clickTab(3)"
       :class="navIndex=== 3 ? ' m-item item m-mobile-hide active' :' m-item item m-mobile-hide' " >
      <i class="tags icon"></i>标签
    </a>
    <div slot="state" class="right m-item m-mobile-hide menu">
      <div class="ui dropdown item">
        <div class="text">
          <img src="https://picsum.photos/seed/picsum/100/100" alt="" class="ui avatar image">
          Bigff
        </div>
        <i class="dropdown icon"></i>
        <div class="menu">
          <a href="#"  class="item">
            注销
          </a>
        </div>
      </div>
    </div>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabBar/TabBar";

  import {dropdown} from "assets/js/pop"

  export default {
    name: "AdminTabBar",
    components: {
      TabBar,

    },
    data() {
      return {
        tab: [
          {
            path: '/admin/blogs',

          },
          {
            path: '/admin/classify',

          },
          {
            path: '/admin/label',

          },

        ],
        navIndex: 1
      }
    },
    methods: {
      clickTab(index) {
        if (this.$route.path != this.tab[index - 1].path)
          this.navIndex = index;
        this.$router.replace(this.tab[index - 1].path)
      },

    },
    mounted: function () {
      dropdown()
      for (var i = 0; i < this.tab.length; i++) {
        if (this.$route.path == this.tab[i].path) {
          this.navIndex = i + 1;
          break;
        }
      }
    }
  }

</script>

<style scoped>


</style>
