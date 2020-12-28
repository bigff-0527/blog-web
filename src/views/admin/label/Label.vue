<template>
  <label-item>
    <operation>
      <th slot="operationText">名称</th>
      <th slot="operationText">操作</th>
      <tr slot="operationContent" v-for="(item, index) in tagList">
        <td >{{item.tagId}}</td>
        <td >{{item.tagName}}</td>
        <td>
          <a href="#"  class="ui mini teal basic button">编辑</a>
          <a href="#"  class="ui mini red basic button">删除</a>
        </td>
      </tr>
    </operation>
  </label-item>
</template>

<script>
  import LabelItem from "./labelItem/LabelItem";
  import Operation from "components/common/operation/Operation";
  export default {
    name: "Label",
    props: {
      tagList: Array
    },
    components: {
      LabelItem,
      Operation
    }
  }
</script>

<style scoped>

</style>
