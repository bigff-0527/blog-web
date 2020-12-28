<template>
  <div>
    <admin-tab-bar ref="boy02"></admin-tab-bar>
    <router-view
      :blogList="blogList.list"
      :classList="classList.list"
      :tagList="tagList.list"
      :id="blogId"
    ></router-view>

  </div>
</template>

<script>
  import AdminTabBar from "components/content/mainTabBar/AdminTabBar";

  import {getFrontData} from "network/home";
  // import {message} from "assets/js/pop"
  import {dropdown} from "assets/js/pop"
  import {
    deleteBlog,
    findBlogById
  } from "network/admin";

  export default {
    name: "Admin",
    components: {
      AdminTabBar,

    },
    data() {
      return  {
        blogList: {
          pageNum: 0,
          pageSize: 0,
          list: [],
        },
        classList: {
          list: []
        },
        tagList: {
          list:[]
        },
        blogInput:null,
        blogId:0
      }
    },
    methods: {
      getFrontData(pageSize){
        const page = this.blogList.pageNum + 1
        getFrontData(page, pageSize).then(res => {
          this.blogList.list.push(...res.data.blog.content)
          this.classList.list = res.data.class
          this.tagList.list = res.data.tag
          this.blogList.pageNum += 1
          console.log(res)
        })
      },
      // findBlogById(id){
      //   findBlogById(id).then(res => {
      //     console.log(res.data)
      //     this.blogInput = res.data
      //   })
      // },
      editBlog(id){
        this.blogId=id
        this.$router.push("/admin/blogInput")
      },
      insertClick(id){
        this.blogId=id
        this.$router.push("/admin/blogInput")
      },

    },
    mounted() {
      // message()
    },
    created() {
      this.getFrontData(8)
    }
  }
</script>

<style scoped>

</style>
