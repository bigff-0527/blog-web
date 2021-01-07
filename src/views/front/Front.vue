<template>
<!--    <router-link to="/front/home"></router-link>-->
  <div>
    <front-tab-bar ref="boy01"/>
    <router-view
<<<<<<< HEAD
=======
      @footerBlog="getFooterBlog"
      @type="typeClick(arguments)"
      :blogList="blogList.list"
      :classList="classList"
      :tagList="tagList"
      :typeIndex="typeIndex"
      :typeId="typeId"
      @tag="tagClick(arguments)"
      :tagIndex="tagIndex"
      :tagIdex="tagId"
    >
>>>>>>> df6098d1efa6b37e924da7d30de67599b5dea8fd

    >
    </router-view>
    <main-footer>

    </main-footer>

  </div>
</template>

<script>
  import MainFooter from "components/content/mainFooter/MainFooter";
  import FrontTabBar from "components/content/mainTabBar/FrontTabBar";


  export default {
    name: "Front",
    components: {
      FrontTabBar,
      MainFooter
    },
    data() {
      return  {
<<<<<<< HEAD

=======
        blogList: {
          pageNum: 0,
          pageSize: 0,
          list: [],
        },
        classList: [],
        tagList: [],
        footerBlog:[],
        typeId: 0,
        typeIndex: 0,
        tagIndex: 0,
        tagId: 0
>>>>>>> df6098d1efa6b37e924da7d30de67599b5dea8fd
      }
    },

    methods: {
<<<<<<< HEAD

=======
      //网络请求
      getIndexData(pageSize) {
        const page = this.blogList.pageNum + 1
        getIndexData(page,pageSize).then(res => {
          this.blogList.list.push(...res.data.blog.list)
          this.classList = res.data.class
          this.tagList = res.data.tag
          // this.blogList.pageNum += 1
          // this.footerBlog = this.blogList.list
          console.log(res)
        })
      },
      getFooterBlog(data)
      {
        this.footerBlog = data
      },
      typeClick(type){
          this.typeId = type[0],
          this.typeIndex = type[1]
          this.$refs.boy01.clickType(1)
      },
      tagClick(tag){
        this.$refs.boy01.clickTag(2)
        this.tagIndex = tag[1]
        this.typeId = tag[0]
      }
>>>>>>> df6098d1efa6b37e924da7d30de67599b5dea8fd
    },
    created() {

    },


  }
</script>

<style scoped>

</style>
