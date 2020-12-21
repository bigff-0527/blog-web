<template>
  <classify-item>
    <operation>
      <th slot="operationText">名称</th>
      <th slot="operationText">操作</th>
      <tr slot="operationContent">
        <td >1</td>
        <td >生活日记</td>
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
    components: {
      ClassifyItem,
      Operation
    }
  }
</script>

<style scoped>

</style>
