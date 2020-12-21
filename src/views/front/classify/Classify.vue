<template>

    <div class="m-container-small m-padded-tb-big">
      <div class="ui container">

        <count>
          <h3 slot="typeName" class="ui teal header">分类</h3>
          <h2 slot="typeCount" class="ui orange header m-inline-blok m-text-thin">14</h2>
        </count>

        <classify-item >
          <div v-for="(item,index) in classList"
               class="ui labeled button m-margin-tb-tiny"
               @click="isActive(index)"
          >
            <a slot="className" href="#" :class="activeIndex === index ? 'ui basic  button teal' : 'ui basic  button '"  >{{item.typeName}}</a>
            <div slot="classCount" :class="activeIndex === index ? 'ui basic  left pointing label teal ' : ' ui basic  left pointing label' ">{{item.blogs.length}}</div>
          </div>

      </classify-item>



        <div class="ui top attached teal segment">
          <blog-list slot="blogList" v-for="item in blogList" v-if="item.type.typeId === activeIndex+1 ">
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
  import ClassifyItem from "./classifyItem/ClassifyItem";
  import BlogList from "components/common/BlogList/BlogList";
  import BlogPage from "components/common/BlogPage/BlogPage";
  import BlogAuthor from "components/common/BlogList/BlogAuthor/BlogAuthor";
  export default {
    name: "Classify",
    components: {
      Count,
      ClassifyItem,
      BlogList,
      BlogPage,
      BlogAuthor
    },
    props: {
      classList: {
        type: Array,
        default: []
      },
      blogList: {
        type: Array,
        default: []
      },
      typeIndex: {
        type: Number,
        default: 0
      }
    },
    data(){
      return {
        activeIndex: this.typeIndex
      }
    },
    methods: {

      isActive(index){

        this.activeIndex = index;
      }

    }

  }

</script>

<style scoped>

</style>
