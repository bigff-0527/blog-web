<template>
  <div class="m-container-small m-padded-tb-big">
    <div class="ui container">

      <count>
        <h3 slot="typeName" class="ui teal header">标签</h3>
        <h2 slot="typeCount" class="ui orange header m-inline-blok m-text-thin">14</h2>
      </count>

      <label-item>
        <a v-for="(item, index) in tagList" href="#"
           @click="isActive(item.tagId,index)"
           :class="tagActiveIndex === index ? 'ui  basic left pointing large label m-margin-tb-tiny m-margin-lr-big teal'
            : 'ui  basic left pointing large label m-margin-tb-tiny m-margin-lr-big'">
          <span >{{item.tagName}}</span>
          <div class="detail" >{{item.blogs.length}}</div>
        </a>
      </label-item>

      <blogs :blogList="blogList.list"></blogs>



    </div>
  </div>
</template>

<script>
  import Count from "components/common/count/Count";
  import LabelItem from "./labelItem/LabelItem";
  import BlogList from "components/common/BlogList/BlogList";
  import BlogPage from "components/common/BlogPage/BlogPage";
  import BlogAuthor from "components/common/BlogList/BlogAuthor/BlogAuthor";
  import Blogs from "components/content/blogs/Blogs";

  import {getTagList,getBlogByTagId} from "network/tag";

  export default {
    name: "Classify",
    components: {
      Count,
      LabelItem,
      BlogList,
      BlogPage,
      BlogAuthor,
      Blogs
    },
    props: {
      tagIndex :{
        type: Number,
        default(){
          return 1
        }
      },
      tagId: {
        type: Number,
        default(){
          return 1
        }
      },
    },
    data(){
      return {
        tagActiveIndex: this.tagIndex,
        blogList: {
          pageNum: 1,
          pageSize: 30,
          list: [],

        },
        id: 1,
        tagList:{}
      }
    },
    methods: {
      isActive(tagId,index){
        this.tagActiveIndex=index
        this.id = tagId
        this.getBlogByTagId(tagId)
      },
      getTagList(){
        getTagList().then( res => {
          this.tagList = res.data
        })
      },
      getBlogByTagId(id){
        const page = this.blogList.pageNum;
        const size = this.blogList.pageSize;
        console.log(page,size,id)
        getBlogByTagId(page,size,id).then( res => {
          this.blogList.list=res.data.content
          console.log(res)
        })
      }
    },
    mounted() {
      this.getTagList()
      this.getBlogByTagId(this.id)
    }
  }
</script>

<style scoped>

</style>
