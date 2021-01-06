<template>
  <div>
    <div class="container">
      <h1 class="display-4">你还不跑起来吗</h1>
      <p class="lead">You're not trying?</p>
      <a class="my-4 btn btn-primary btn-lg" @click="toBlogList" role="button">查看更多</a>
    <div class="m-h">
    </div>
    </div>
    <div class="container m-padded-tb-big" >
      <div class="row m-padded-tb-small">
        <div class="col-md-12">
          <h3 class="m-text">推荐博客</h3>
        </div>
      </div>
      <div class="row" >
        <div class="col-xl-4  m-padded-tb-big " >
          <div class="card " style="width: 100%;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">详细</a>
            </div>
          </div>
        </div>
        <div class="col-xl-4  m-padded-tb-big ">
          <div class="card " style="width: 100%;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">详细</a>
            </div>
          </div>
        </div>
        <div class="col-xl-4  m-padded-tb-big ">
          <div class="card " style="width: 100%;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">详细</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  // import HomeLeft from "./homeLeft/HomeLeft";
  // import Count from "components/common/count/Count";
  // import BlogList from "components/common/BlogList/BlogList";
  // import BlogAuthor from "components/common/BlogList/BlogAuthor/BlogAuthor";
  // import BlogPage from "components/common/BlogPage/BlogPage";
  // import HomeQR from "./homeRight/homeQR/HomeQR";
  //
  //
  // import HomeRight from "./homeRight/HomeRight";
  // import HomeClassify from "./homeRight/homeClassify/HomeClassify";
  // import HomeLabel from "./homeRight/homeLabel/HomeLabel";
  // import HomeRecommend from "./homeRight/homeRecommend/HomeRecommend";

  import {getHomeData} from 'network/home'


  export default {
    name: "Home",
    components: {

    },

    data() {
      return {
      }
    },
    methods: {
      toBlogList(){
        this.$router.push("/front/blogList")
      }
    },
    created() {
    },
    mounted(){

    },

  }

</script>

<style scoped>


</style>
