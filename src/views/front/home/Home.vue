<template>
  <div class="container ">
    <div class=" row m-padded-tb-top  ">
      <div class="col-md-12">
        <h1 class="display-4 ">你还不跑起来吗</h1>
        <p class="lead">You're not trying?</p>
      </div>
    </div>
    <div class="row justify-content-md-center m-padded-tb-small m-mobile-hide " style="text-align:center">
      <div class="col-md-4">
        <img src="~assets/img/headimg.jpg" style="width: 20%;border-radius: 100%;" alt="">
      </div>
    </div>
    <div class="row justify-content-md-center m-padded-tb-top-icon m-mobile-hide " style="text-align:center">
      <div class="col-md-4">
        <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content="https://github.com/bigff-0527">
          <i slot="reference" class="fa fa-weixin iconH " aria-hidden="true"></i>
        </el-popover>
        <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content="https://github.com/bigff-0527">
          <i slot="reference" class="fa fa-github iconH " aria-hidden="true"></i>
        </el-popover>
        <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content="https://github.com/bigff-0527">
          <i slot="reference" class="fa fa-envelope-o iconH " aria-hidden="true"></i>
        </el-popover>
      </div>

    </div>
    <div class="row justify-content-md-center m-padded-tb-more " style="text-align:center">
      <div class="col-md-4  ">
        <!--          <img src="~assets/img/headimg.jpg" style="width: 20%;border-radius: 100%;" alt="">-->
        <el-button style="background: none;color: white" @click="toBlogList">查看更多</el-button>
      </div>
    </div>
    <div class="m-h">
    </div>
    <div class="row m-padded-tb-big">
      <div class=" m-padded-tb-small">
        <div class="col-md-12">
          <h3 class="m-text">推荐博客</h3>
        </div>
      </div>
      <div class="row">
        <div v-for="item in blogList" :class=" scrollAnimate ?
        'col-xl-4 animate__animated animate__zoomIn m-padded-tb-big' :
          'col-xl-4  m-padded-tb-big'  ">
          <div class="card m-shadow-small " @click="blogShow(item.id)" style="width: 100%;">
            <img :src="item.first_picture" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{item.title}} </h5>
              <p class="card-text"></p>
              <el-tag type="success" effect="plain">{{item.type.typeName}}</el-tag>
              <div class="tag" v-for="item in item.tags">
                <span class=" badge  badge-success">{{item.tagName}}</span>
              </div>
              <span class="text-black-50" style="position: absolute; right: 20%"><i class="fa fa-eye"
                                                                                    aria-hidden="true">&nbsp;{{item.views}}</i></span>
              <span class="text-black-50" style="position: absolute; right: 10%"><i class="fa fa-commenting-o"
                                                                                    aria-hidden="true">&nbsp; {{item.comment_count != null ? item.comment_count : 0}}</i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getIndexData} from "network/home";

  export default {
    name: "Home",
    components: {},
    data() {
      return {
        blogList: [],
        scrollAnimate: false
      }
    },
    methods: {
      toBlogList() {
        this.$router.push("/front/blogList")

      },
      windowScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
        if (scrollTop >= 250) {
          this.scrollAnimate = true
        } else this.scrollAnimate = false
      },
      getIndexData() {
        getIndexData().then(res => {
          console.log(res.data);
          this.blogList = res.data

        })
      },
      blogShow(id) {
        this.$store.commit("SET_BLOGSHOWID", id)
        this.$router.push("blogShow")
      }
    },
    created() {

    },

    mounted() {
      this.getIndexData()
      window.addEventListener('scroll', this.windowScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.windowScroll)
    }

  }

</script>

<style scoped>

  .col-xl-4:hover {
    transform: scale(1.1);
  }

  .more {
    margin-bottom: 10rem !important;
    border: 1px solid white;
    border-radius: 20px;
    height: 50px;
    line-height: 50px;
    width: 10%;

  }

  .more:hover {
    transform: scale(1.3);
  }

  .btn {
    color: white;
    font-size: 20px;
  }

  .m-padded-tb-more {
    padding-top: 0rem !important;
    margin-bottom: 12rem !important;
  }


</style>
