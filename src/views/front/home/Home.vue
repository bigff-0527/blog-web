<template>
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
          <home-right>
            <home-classify slot="classifyCount">
              <a v-for="(item,index) in classList" @click="classClick(item.typeId,index)"  target="_blank" class="item" >
                <span >{{item.typeName}}</span>
                <div class="ui teal basic left pointing label" >{{item.blogs.length}}</div>
              </a>

            </home-classify>
            <home-label slot="labelCount">
              <a v-for="(item,index) in tagList" @click="tagClick(index)"  target="_blank"  class="ui teal basic left pointing label m-margin-tb-tiny">
                <span >{{item.tagName}}</span>
                <div class="detail" >{{item.blogs.length}}</div>
              </a>
            </home-label>
            <home-recommend slot="recommend">
              <div class="ui segment" >
                <a href="#"  target="_blank" class="m-black m-text-thin" >我的故事</a>
              </div>
            </home-recommend>
<!--            <home-q-r slot="QR">-->
<!--              <img src="~assets/img/wechat.jpg"  alt="" class="ui rounded image" >-->
<!--            </home-q-r>-->
          </home-right>
      </div>
    </div>

  </div>
</template>
<script>
  import HomeLeft from "./homeLeft/HomeLeft";
  import Count from "components/common/count/Count";
  import BlogList from "components/common/BlogList/BlogList";
  import BlogAuthor from "components/common/BlogList/BlogAuthor/BlogAuthor";
  import BlogPage from "components/common/BlogPage/BlogPage";
  import HomeQR from "./homeRight/homeQR/HomeQR";


  import HomeRight from "./homeRight/HomeRight";
  import HomeClassify from "./homeRight/homeClassify/HomeClassify";
  import HomeLabel from "./homeRight/homeLabel/HomeLabel";
  import HomeRecommend from "./homeRight/homeRecommend/HomeRecommend";

  import {getHomeData} from 'network/home'


  export default {
    name: "Home",
    components: {
      HomeLeft,
      Count,
      BlogList,
      BlogAuthor,
      BlogPage,
      HomeRight,
      HomeClassify,
      HomeLabel,
      HomeRecommend,
      HomeQR
    },
    props: {
      blogList: {
        type: Array,
        default: {
          return : []
        }
      },
      classList :{
        type: Array,
        default: {
          return : []
        }
      },
      tagList: {
        type: Array,
        default: {
          return : []
        }
      }
    },
    data() {
      return {

      }

    },
    methods: {
      classClick(typeId,index){
        this.$emit("type",typeId,index)

      },
      tagClick(index){
        this.$emit("tag",index)
      }
    },
    created() {
      // this.getHomeBlog(8)
      // this.getClassList(5)
      // this.getFooterBlog()
    }
  }

</script>

<style scoped>

</style>
