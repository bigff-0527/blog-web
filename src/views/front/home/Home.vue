<template>
<<<<<<< HEAD
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

=======
  <div class="m-container m-padded-tb-big">
    <div class="ui container">
      <div class="ui stackable grid">

        <!-- 左边 -->
          <home-left>
<!--博客总数-->
            <count slot="count">
              <h3 slot="typeName" class="ui teal header">博客</h3>
              <h2 slot="typeCount" class="ui orange header m-inline-blok m-text-thin">14</h2>
            </count>

<!--博客列表-->
              <blog-list slot="blogList" v-for="item in blogList">
                <h3 slot="title" class="ui header"><a href="#"  target="_blank" class="m-black" >{{item.title}}</a></h3>
                <p slot="desc" class="m-text" >{{item.description}}</p>
                <blog-author slot="author">
                  <img slot="authorHead" :src="item.user.avatar"  alt="" class="ui avatar image">
                  <div slot="authorName" class="content"><a href="#" class="header" >{{item.user.username}}</a></div>
                </blog-author>
                <span slot="createTime" >{{item.update_time}}</span>
                <span slot="view">{{item.views}}</span>
                <img slot="first_picture" :src="item.first_picture" class="ui rounded image" alt="">
                <a slot="classify" href="#" target="_blank" class="ui teal basic label m-padded-tiny m-text-thin" >{{item.type.typeName}}</a>
              </blog-list>

<!--分页-->
            <blog-page slot="page">
              <slot name="blogPage">
                <a slot="pageUp" class="ui teal mini basic button">上一页</a>
                <a slot="pageDown" class="ui teal mini basic button" >下一页</a>
              </slot>
            </blog-page>

          </home-left>

        <!-- 右边 -->
<!--          <home-right>-->
<!--            <home-classify slot="classifyCount">-->
<!--              <a v-for="(item,index) in classList" @click="classClick(item.typeId,index)"  target="_blank" class="item" >-->
<!--                <span >{{item.typeName}}</span>-->
<!--                <div class="ui teal basic left pointing label" >{{item.blogs.length}}</div>-->
<!--              </a>-->

<!--            </home-classify>-->
<!--            <home-label slot="labelCount">-->
<!--              <a v-for="(item,index) in tagList" @click="tagClick(item.tagId,index)"  target="_blank"  class="ui teal basic left pointing label m-margin-tb-tiny">-->
<!--                <span >{{item.tagName}}</span>-->
<!--                <div class="detail" >{{item.blogs.length}}</div>-->
<!--              </a>-->
<!--            </home-label>-->
<!--            <home-recommend slot="recommend">-->
<!--              <div class="ui segment" >-->
<!--                <a href="#"  target="_blank" class="m-black m-text-thin" >我的故事</a>-->
<!--              </div>-->
<!--            </home-recommend>-->
<!--            <home-q-r slot="QR">-->
<!--              <img src="~assets/img/wechat.jpg"  alt="" class="ui rounded image" >-->
<!--            </home-q-r>-->
<!--          </home-right>-->
>>>>>>> df6098d1efa6b37e924da7d30de67599b5dea8fd
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
