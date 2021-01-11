<template>
  <div>
    <!--  <el-radio-group class="m-mobile-show" v-model="isCollapse" style="margin-bottom: 20px;">-->
    <!--    <el-radio-button :label="false">展开</el-radio-button>-->
    <!--    <el-radio-button :label="true">收起</el-radio-button>-->
    <!--  </el-radio-group>-->
    <el-button @click="meanOpen" type="primary" class="m-mobile-show m-fixed" style="margin-left: 16px;">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </el-button>

    <el-drawer

      :visible.sync="isCollapse"
      :with-header="false"
      size="50%"
      style="text-align:center"
    >
      <div class=" m-padded-tb-big justify-content-center ">
        <div class="">
          <img src="~assets/img/headimg.jpg" style="width: 100px;border-radius: 100%;" alt="">
          <br/>
          <span class="lead m-margin-lr-big">Bigff</span>
          <br/>
          <el-popover
            placement="bottom"
            width="200"
            trigger="hover"
            content="https://github.com/bigff-0527">
            <i slot="reference" class="fa fa-github iconH    " aria-hidden="true"></i>
          </el-popover>

          <el-popover
            placement="bottom"
            width="200"
            trigger="hover"
            content="https://github.com/bigff-0527">
            <i slot="reference" class="fa fa-weixin iconH " aria-hidden="true"></i>
          </el-popover>
          <br>
          <el-divider></el-divider>
          <a class="nav-link active" @click="clickTab(0)">首页</a>
          <el-divider></el-divider>
          <a class="nav-link" @click="clickTab(1)">时间轴</a>
          <el-divider></el-divider>
          <a class="nav-link" @click="clickTab(2)">关于我</a>
        </div>
      </div>
    </el-drawer>
    <!--    <el-button class="m-mobile-show m-fixed" @click="meanOpen" type="primary"></el-button>-->

    <!--  <el-menu default-active="1-4-1" :class="isCollapse ? '   el-menu-vertical-demo m-fixed-menu'-->
    <!--  :'el-menu-vertical-demo m-hide '"  >-->
    <!--    <el-submenu index="1">-->
    <!--      <template slot="title">-->
    <!--        <i class="el-icon-location"></i>-->
    <!--        <span slot="title">导航一</span>-->
    <!--      </template>-->
    <!--      <el-menu-item-group>-->
    <!--        <span slot="title">分组一</span>-->
    <!--        <el-menu-item index="1-1">选项1</el-menu-item>-->
    <!--        <el-menu-item index="1-2">选项2</el-menu-item>-->
    <!--      </el-menu-item-group>-->
    <!--      <el-menu-item-group title="分组2">-->
    <!--        <el-menu-item index="1-3">选项3</el-menu-item>-->
    <!--      </el-menu-item-group>-->
    <!--      <el-submenu index="1-4">-->
    <!--        <span slot="title">选项4</span>-->
    <!--        <el-menu-item index="1-4-1">选项1</el-menu-item>-->
    <!--      </el-submenu>-->
    <!--    </el-submenu>-->
    <!--    <el-menu-item index="2">-->
    <!--      <i class="el-icon-menu"></i>-->
    <!--      <span slot="title">导航二</span>-->
    <!--    </el-menu-item>-->
    <!--    <el-menu-item index="3" disabled>-->
    <!--      <i class="el-icon-document"></i>-->
    <!--      <span slot="title">导航三</span>-->
    <!--    </el-menu-item>-->
    <!--    <el-menu-item index="4">-->
    <!--      <i class="el-icon-setting"></i>-->
    <!--      <span slot="title">导航四</span>-->
    <!--    </el-menu-item>-->
    <!--  </el-menu>-->
    <div :class="scrollAnimate ? 'myHeader headerAnm animate__animated animate__fadeInDown' : 'myHeader'  ">
<!--      <div class="myHeader   ">-->
      <div class="container m-mobile-hide " >
        <div class="row">
          <div class="col-md-7 " >
            <img src="~assets/img/blogLogo.png" style="width: 15%;" alt="">
          </div>
          <div class=" col-md-5"  >
<!--            <ul class="nav  nav-pills justify-content-end"  >-->
<!--              <li class="nav-item " >-->
<!--                <a class="btn active"  @click="clickTab(0)">首页</a>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="btn"  @click="clickTab(1)"  >时间轴</a>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="btn" @click="clickTab(2)">关于我</a>-->
<!--              </li>-->
<!--            </ul>-->

            <el-tabs style="height: 70px ;padding-top: 30px" v-model="activeName" @tab-click="handleClick" stretch>
              <el-tab-pane label="首页" name="home">
              </el-tab-pane>
              <el-tab-pane label="时间轴" name="time"></el-tab-pane>
              <el-tab-pane label="关于我" name="about"></el-tab-pane>
            </el-tabs>
          </div>
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
  </div>
</template>

<script>
  import TabBar from "components/common/tabBar/TabBar";


  export default {
    name: "FrontTabBar",
    components: {
      TabBar,

    },
    props: {
      typeId: {
        type: Number,
        default: 1
      },
      typeIndex: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        tab: [
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
        navIndex: this.typeId,
        isCollapse: false,
        clientHeight: 0,
        activeName: 'home',
        scrollAnimate:false

      }
    },
    methods: {
      handleClick(tab, event) {
        this.clickTab(tab.index)
      },
      windowScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let oldScroll = scrollTop
        if (scrollTop >=150 ) {
          this.scrollAnimate = true
        }
        else this.scrollAnimate = false
      },
      meanOpen() {
        if (this.isCollapse) {
          this.isCollapse = false
        } else {
          this.isCollapse = true
        }
        console.log(this.isCollapse);
      },
      clickTab(index) {
        if (this.$route.path != this.tab[index].path) {
          this.isCollapse = false
          this.$router.push(this.tab[index].path)
        }

      },
    },
    mounted: function () {

      window.addEventListener('scroll', this.windowScroll)

    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.windowScroll)

    }


  }

</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .m-fixed-menu {
    position: fixed;
    top: 10%;
    right: 1%;
    z-index: 10;
  }

  .myHeader{
    width: 100%;
    position: fixed;
    top:0px;
    z-index: 999;
    vertical-align: middle !important;
    /*height: 69px;*/

  }

  .nav-link {
    padding: 0rem 1rem
  }
  .headerAnm{
    background-image: linear-gradient(to right, #ebbba7 0%, #cfc7f8 100%);

  }


</style>
