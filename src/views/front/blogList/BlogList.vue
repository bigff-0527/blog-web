<template>
  <div class="container m-padded-tb-big ">
    <el-button type="primary" class="m-mobile-show " icon="el-icon-search">搜索</el-button>
    <search @onSubmit="onSubmit"
            :typeList="typeList"
            :tagList="tagList"
    ></search>
    <div class="row m-padded-tb-small infinite-list-wrapper ">

      <div class="col-md-7 list"
           infinite-scroll-disabled="disabled"
           v-infinite-scroll="loadData"
           style="overflow:auto;height:600px">
        <div v-for="item in blogList.list" class="col-xl-12 infinite-list-item ">
          <div class="card mb-3  m-shadow-small ">
            <div class="card-body " @click="showBlog(item.id)">
              <img :src="item.first_picture"  style="width: 30%"
                   class="rounded float-right m-mobile-wide m-margin-bottom-small" alt="...">
              <h5 class="card-title">{{item.title}} </h5>
              <p class="card-text">{{item.description}}</p>
              <el-tag type="success">{{item.type.typeName}}</el-tag>

              <div class="tag" v-for="item in item.tags">
                <el-tag size="mini">{{item.tagName}}</el-tag>
              </div>

              <span style="" >
                 <span class="text-black-50 "></span>
                &nbsp;
                <span class="text-black-50"></span>
              </span>
              <p class="card-text"><small class="text-muted">


                <i class="fa fa-eye"
                   aria-hidden="true"></i>&nbsp;{{item.views}}&nbsp;

                <i class="fa fa-commenting-o" aria-hidden="true">
                  </i>&nbsp; {{item.comment_count != null ? item.comment_count : 0}}&nbsp;
                <i class="fa fa-clock-o m-margin-lr-mini"
                   aria-hidden="true"></i>{{item.update_time}}
              </small>
              </p>
            </div>
          </div>
        </div>
        <p class="text-center" v-if="loading">加载中 <i class="el-icon-loading"></i></p>
        <p class="text-center" v-if="noMore">没有更多了</p>
      </div>

      <!--      <div class="col-xl-8">-->
      <!--      <div class="card mb-3">-->
      <!--        <img src="~assets/img/homeBg.jpg" class="card-img" alt="...">-->
      <!--        <div class="card-img-overlay card-body">-->
      <!--          <h5 class="card-title">Card title</h5>-->
      <!--          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>-->
      <!--          <p class="card-text">Last updated 3 mins ago</p>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      </div>-->
      <div class="col-md-5">
        <div class="col-xl-12">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                blandit.</p>
              <small>Donec id elit non mi porta.</small>
            </a>
          </div>
        </div>
      </div>
    </div>
    <el-backtop>
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script>
  import {getBlogList} from "network/blogList";
  import {getTagList} from "network/tag";
  import {getClassList} from "network/classify";

  import Search from "components/common/search/Search";

  export default {
    name: "BlogList",
    data() {
      return {
        blogList: {
          list: [],
        },
        typeList: [],
        tagList: [],
        loading: false,
        dateValue: null,
        total: 0,
        searchDto: {
          title: null,
          typeId: null,
          tagId: null,
          dateStart: null,
          dateEnd: null,
          pageNum: 0,
          pageSize: 4
        },
      }
    },
    components: {
      Search
    },
    computed: {

      noMore() {
        return this.blogList.list.length >= this.total
      },
      disabled() {
        return this.noMore || this.loading
      }
    },
    methods: {
      getBlogList() {
        this.searchDto.pageNum += 1

        getBlogList(this.searchDto).then(res => {
          console.log(res.data.list);
          this.total = res.data.total
          this.blogList.list.push(...res.data.list)
        })
      },
      loadData() {
        this.loading = true
        this.getBlogList()
        this.loading = false
      },
      getClassList() {
        getClassList().then(res => {
          this.typeList = res.data
        })
      },
      getTagList() {
        getTagList().then(res => {
          this.tagList = res.data
        })
      },
      onSubmit(Dto) {
        this.searchDto = Dto
        console.log(this.searchDto.dateStart);
        getBlogList(this.searchDto).then(res => {
          console.log(res.data);
          this.total = res.data.total
          this.blogList.list = res.data.list
        })
      },
      showBlog(id){
        this.$store.commit("SET_BLOGSHOWID",id)
        this.$router.push("/front/blogShow")
      }
    },

    created() {
      this.getBlogList()
      this.getClassList()
      this.getTagList()
    }

  }
</script>

<style scoped>
  .myNav {

  }

</style>
