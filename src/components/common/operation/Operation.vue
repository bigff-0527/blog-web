<template>
  <div id="table-container">
    <table class="ui compact teal table">
      <thead>
      <tr>
        <th></th>
        <slot name="operationText"></slot>
      </tr>
      </thead>
      <tbody>
      <slot name="operationContent"></slot>
      </tbody>
      <tfoot>
      <tr>
        <th colspan="7">
          <div class="ui mini pagination menu">
            <a onclick="page(this)"  class=" item" >上一页</a>
            <a onclick="page(this)"  class=" item" >下一页</a>


          </div>
          <a href="#"  class="ui mini right floated teal basic button">新增</a>
        </th>
      </tr>
      </tfoot>
    </table>
    <div class="ui success message" >
      <i class="close icon"></i>
      <div class="header">提示：</div>
      <p >恭喜操作成功！</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Operation"
  }
</script>

<style scoped>

</style>
