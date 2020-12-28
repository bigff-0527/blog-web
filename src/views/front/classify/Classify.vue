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
               @click="isActive(item.typeId,index)"
          >
            <a slot="className" :class="activeIndex === index ? 'ui basic  button teal' : 'ui basic  button '"  >{{item.typeName}}</a>
            <div slot="classCount" :class="activeIndex === index ? 'ui basic  left pointing label teal ' : ' ui basic  left pointing label' ">{{item.blogs.length}}</div>
          </div>

      </classify-item>
        <blogs :blogList="blogList.list"></blogs>
      </div>
    </div>

</template>

<script>
  import Count from "components/common/count/Count";
  import ClassifyItem from "./classifyItem/ClassifyItem";
  import BlogList from "components/common/BlogList/BlogList";
  import BlogPage from "components/common/BlogPage/BlogPage";
  import BlogAuthor from "components/common/BlogList/BlogAuthor/BlogAuthor";
  import Blogs from "components/content/blogs/Blogs";

  import {getClassList,getBlogByTypeId} from "network/classify";


  export default {
    name: "Classify",
    components: {
      Count,
      ClassifyItem,
      BlogList,
      BlogPage,
      BlogAuthor,
      Blogs
    },
    data(){
      return {
        classList: [],
        blogList: {
          pageNum: 1,
          pageSize: 2,
          list: []
        },
        activeIndex: this.typeIndex,
        id : 1,
        up: true,
        next: true,
        maxPage : 0
      }
    },
    props: {
      typeIndex: {
        type: Number,
        default(){
          return 1
        }
      },
      typeId: {
        type: Number,
        default(){
          return 1
        }
      },

    },
    methods: {
      isActive(typeId,index){
        this.activeIndex = index;
        this.id=typeId
        this.getBlogByTypeId(typeId)
      },

      getClassList(){
        getClassList().then( res => {
          this.classList = res.data
          console.log(res.data)
        })
      },
      getBlogByTypeId(id){
        const page = this.blogList.pageNum
        const size = this.blogList.pageSize;
        getBlogByTypeId(page,size,id).then( res => {
          this.maxPage = res.data.totalPages
          console.log(this.maxPage)
          console.log(res.data)
          this.blogList.list=res.data.content
        })
      }
    },
    created() {
      this.getClassList()
      this.getBlogByTypeId(this.id)
    }


  }

</script>

<style scoped>

</style>
