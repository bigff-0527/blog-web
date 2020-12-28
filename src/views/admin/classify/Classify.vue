<template>
  <classify-item>
    <operation>
      <th slot="operationText">名称</th>
      <th slot="operationText">操作</th>
      <tr slot="operationContent" v-for="(item,index) in classList">
        <td >{{item.typeId}}</td>
        <td >{{item.typeName}}</td>
        <td>
          <a href="#"  class="ui mini teal basic button">编辑</a>
          <a href="#"  class="ui mini red basic button">删除</a>
        </td>
      </tr>
    </operation>
  </classify-item>
</template>

<script>
  import ClassifyItem from "./classifyItem/ClassifyItem";
  import Operation from "components/common/operation/Operation";
  export default {
    name: "classify",
    props: {
      classList: Array
    },
    components: {
      ClassifyItem,
      Operation
    }
  }
</script>

<style scoped>

</style>
