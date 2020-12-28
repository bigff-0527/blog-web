<template>

    <!-- 中间内容 -->
  <blog-item>
    <operation>
      <th slot="operationText">标题</th>
      <th slot="operationText">类型</th>
      <th slot="operationText">推荐</th>
      <th slot="operationText">状态</th>
      <th slot="operationText">更新时间</th>
      <th slot="operationText">操作</th>
      <tr slot="operationContent" v-for="(item,index) in blogList">
        <td >{{item.id}}</td>
        <td >{{item.title}}</td>
        <td >{{item.type.typeName}}</td>
        <td >{{item.flag ? '是' :'否'}}</td>
        <td >{{item.published ? '发布' : '草稿'}}</td>
        <td >{{item.update_time}}</td>
        <td>
          <a  @click="editBlog(item.id)" class="ui mini teal basic button">编辑</a>
          <a  @click="deleteBlog(item.id)"  class="ui mini red basic button">删除</a>
        </td>
      </tr>
      <a slot="operationInsert" @click="insertClick()" class="ui mini right floated teal basic button">新增</a>
    </operation>
  </blog-item>

</template>

<script>
  import Operation from "components/common/operation/Operation";
  import BlogItem from "./blogItem/BlogItem";
  import {deleteBlog} from "network/admin";


  export default {
    name: "blogs",
    props: {
      blogList:Array,
      classList: Array,
      tagList: Array,
    },
    methods: {
      deleteBlog(id){
        deleteBlog(id).then( res =>{
          alert("删除成功")
        })
      },
      editBlog(id){
        this.$parent.editBlog(id)
      },
      insertClick(){
        this.$parent.insertClick(0)
      },
    },
    components: {
      Operation,
      BlogItem
    }
  }
</script>

<style scoped>

</style>
