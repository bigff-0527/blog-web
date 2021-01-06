<template>
  <div class="container m-padded-tb-big ">
    <el-button type="primary" class="m-mobile-show " icon="el-icon-search">搜索</el-button>
    <nav class="navbar  navbar-light bg-light row justify-content-md-center m-padded-tb-big m-mobile-hide ">
      <div class="col-9">
        <div class="col-sm-12" id="so">
          <div class="input-group">
            <el-form :inline="true" :model="search" class="demo-form-inline">
              <el-form-item>
                <el-input v-model="search.title" placeholder="标题"></el-input>
              </el-form-item>
              <el-form-item>
                <el-select v-model="search.typeId" placeholder="分类">
                  <el-option
                    v-for="item in typeList"
                    :key="item.typeId"
                    :label="item.typeName"
                    :value="item.typeId"

                  ></el-option>

                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="search.tagId"  placeholder="标签">
                  <el-option
                    v-for="item in tagList"
                    :key="item.tagId"
                    :label="item.tagName"
                    :value="item.tagId">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </nav>
    <div class="row m-padded-tb-small justify-content-md-center">
      <div v-for="item in blogList.list" class="col-12">
        <div class="card mb-3">
          <div class="card-body">
            <img :src="item.first_picture" style="width: 30%"
                 class="rounded float-right m-mobile-wide m-margin-bottom-small" alt="...">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.description}}</p>
            <p class="card-text"><small class="text-muted">{{item.update_time}}</small></p>
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
  import {getIndexData} from "network/home";
  import {getTagList} from "network/tag";
  import {getClassList} from "network/classify";

  export default {
    name: "BlogList",
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        blogList: {
          pageNum: 1,
          pageSize: 8,
          list: [],
        },
        typeList: [],
        tagList: [],
        search: {
          title: null,
          tagId: null,
          typeId: null
        }

      }
    },
    methods: {
      getIndexData(pageNum) {
        console.log(this.blogList.pageSize);
        getIndexData(pageNum, this.blogList.pageSize).then(res => {
          this.blogList.list.push(...res.data.list)
          console.log(this.blogList.list);
        })
      },
      getClassList() {
        getClassList().then(res => {
          console.log(res);
          this.typeList = res.data
        })
      },
      getTagList() {
        getTagList().then(res => {
          console.log(res);
          this.tagList = res.data
        })
      },
      onSubmit(){
        console.log(this.search);
      }
    },
    created() {
      this.getIndexData(1)
      this.getClassList()
      this.getTagList()
    }
  }
</script>

<style scoped>

</style>
