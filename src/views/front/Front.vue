<template>
<!--    <router-link to="/front/home"></router-link>-->
  <div>
    <front-tab-bar ref="boy01"/>
<!--      :typeId="typeId"-->
<!--      :typeIndex="typeIndex"-->

    <router-view
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

    </router-view>
    <main-footer>
      <a v-if="index<5" v-for="(item,index) in footerBlog" slot="blogs" href="#"  target="_blank" class="item">{{item.title}}</a>
      <a slot="tel" href="#" class="item" >Email：2410547286@qq.com</a>
      <a slot="tel" href="#" class="item" >QQ：2410547286</a>
      <p slot="desc" class="m-text-thin m-text-spaced m-opactiy-mini">这是我的个人博客，我会把生活中的点点滴滴记录下来</p>
    </main-footer>

  </div>
</template>

<script>
  import MainFooter from "components/content/mainFooter/MainFooter";
  import FrontTabBar from "components/content/mainTabBar/FrontTabBar";


  import {getIndexData} from 'network/home'

  export default {
    name: "Front",
    components: {
      FrontTabBar,
      MainFooter
    },
    data() {
      return  {
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
      }
    },

    methods: {
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
    },
    created() {
      this.getIndexData(8)
      // this.getClassList(5)
      // this.getFooterBlog()
    },


  }
</script>

<style scoped>

</style>
