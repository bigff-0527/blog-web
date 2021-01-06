<template>
  <div class="m-container m-padded-tb-big ">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <div class="row" >
      <div class="col-md-7">
        <img src="~assets/img/logo.png"  style="width: 200px" alt="">
      </div>
      <div class=" col-md-4" style="line-height: 142.85px">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" @click="clickTab(0)" >首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="clickTab(1)" >时间轴</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="clickTab(2)" >关于我</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
<!--  <tab-bar>-->
<!--      <a slot="text" @click="clickTab(1)"-->
<!--          :class="navIndex=== 1 ? ' m-item item m-mobile-hide active' :' m-item item m-mobile-hide' " >-->
<!--        <i class="mail icon"></i>首页-->
<!--      </a>-->
<!--      <a slot="text" @click="clickTab(2)"-->
<!--         :class="navIndex=== 2 ? ' m-item item m-mobile-hide active' :' m-item item m-mobile-hide' " >-->
<!--        <i class="idea icon"></i>分类-->
<!--      </a>-->
<!--      <a slot="text" @click="clickTab(3)"-->
<!--       :class="navIndex=== 3 ? ' m-item item m-mobile-hide active' :' m-item item m-mobile-hide' " >-->
<!--      <i class="tags icon"></i>标签-->
<!--    </a>-->
<!--    <a slot="text" @click="clickTab(4)"-->
<!--       :class="navIndex=== 4 ? ' m-item item m-mobile-hide active' :' m-item item m-mobile-hide' " >-->
<!--      <i class="tags icon"></i>时间轴-->
<!--    </a>-->
<!--    <a slot="text" @click="clickTab(5)"-->
<!--       :class="navIndex=== 5 ? ' m-item item m-mobile-hide active' :' m-item item m-mobile-hide' " >-->
<!--      <i class="info icon"></i>关于-->
<!--    </a>-->


<!--      <div  slot="state" class="m-item right item m-mobile-hide" >-->
<!--        <form name="search" action="#" method="POST" target="_blank">-->
<!--          <div class="ui icon inverted transparent input">-->
<!--            <input type="text" name="query" placeholder="Search...">-->
<!--            <i class="search link icon"></i>-->
<!--          </div>-->
<!--        </form>-->
<!--      </div>-->
<!--  </tab-bar>-->
</template>

<script>
  import TabBar from "components/common/tabBar/TabBar";


  export default {
    name: "FrontTabBar",
    components: {
      TabBar,

    },
    props: {
      typeId : {
        type: Number,
        default : 1
      },
      typeIndex: {
        type: Number,
        default: 1
      }
    },
    data(){
      return {
        tab:[
          {
            path: '/front/home',

          },
          {
            path: '/front/profile',

          },
          {
            path: '/front/about',

          },
        ],
        navIndex: this.typeId
      }
    },
    methods: {
      clickTab(index){
        if (this.$route.path!=this.tab[index].path){
          this.navIndex = index;
          this.$router.replace(this.tab[index].path)
        }

      },
      clickType(index){
        this.navIndex = index
        this.$router.replace(this.tab[index].path)
      },
      clickTag(index){
        this.navIndex = index
        this.$router.replace(this.tab[index].path)
      }
    },
    mounted: function () {
      for (var i = 0; i<this.tab.length;i++){
        if (this.$route.path==this.tab[i].path){
          this.navIndex=i+1;
          break;
        }
      }
    }




  }

</script>

<style scoped>


</style>
