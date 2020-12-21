<template>
  <div class="m-container-small m-padded-tb-big">
    <div class="ui container">

      <count>
        <h3 slot="typeName" class="ui teal header">标签</h3>
        <h2 slot="typeCount" class="ui orange header m-inline-blok m-text-thin">14</h2>
      </count>

      <label-item>
        <a v-for="(item, index) in tagList" href="#"  @click="clickTag(index)"
           :class="tagIndex === index ? 'ui  basic left pointing large label m-margin-tb-tiny m-margin-lr-big teal'
            : 'ui  basic left pointing large label m-margin-tb-tiny m-margin-lr-big'">
          <span >{{item.tagName}}</span>
          <div class="detail" >{{item.blogs.length}}</div>
        </a>
      </label-item>

      <div class="ui top attached teal segment" v-for="(item,index) in blogList">
        <blog-list slot="blogList"  v-for="tagItem in item.tags" v-if="tagActiveIndex+1 === tagItem.tagId"  >
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
      </div>


      <blog-page slot="page">
        <slot name="blogPage">
          <a slot="pageUp" class="ui teal mini basic button">上一页</a>
          <a slot="pageDown" class="ui teal mini basic button" >下一页</a>
        </slot>
      </blog-page>


    </div>
  </div>
</template>

<script>
  import Count from "components/common/count/Count";
  import LabelItem from "./labelItem/LabelItem";
  import BlogList from "components/common/BlogList/BlogList";
  import BlogPage from "components/common/BlogPage/BlogPage";
  import BlogAuthor from "components/common/BlogList/BlogAuthor/BlogAuthor";
  export default {
    name: "Classify",
    components: {
      Count,
      LabelItem,
      BlogList,
      BlogPage,
      BlogAuthor
    },
    props: {
      blogList: Array,
      tagList: Array,
      tagIndex :{
        type: Number,
        default: 0
      }
    },
    data(){
      return {
        tagActiveIndex: this.tagIndex
      }
    },
    methods: {
      clickTag(index){
        this.tagActiveIndex=index
      }
    }
  }
</script>

<style scoped>

</style>
