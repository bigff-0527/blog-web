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
      <tr slot="operationContent">
        <td >1</td>
        <td >wdbnd</td>
        <td >认知升级</td>
        <td >是</td>
        <td >草稿</td>
        <td >2020-09-08</td>
        <td>
          <a href="#"  class="ui mini teal basic button">编辑</a>
          <a href="#"  class="ui mini red basic button">删除</a>
        </td>
      </tr>
    </operation>
  </blog-item>

</template>

<script>
  import Operation from "components/common/operation/Operation";
  import BlogItem from "./blogItem/BlogItem";
  export default {
    name: "blogs",
    components: {
      Operation,
      BlogItem
    }
  }
</script>

<style scoped>

</style>
