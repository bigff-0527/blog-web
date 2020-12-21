<template>
  <div class="ui segments">
    <div class="ui secondary segment">
      <div class="ui two column grid">
        <div class="column">
          <i class="idea icon"></i> 分类
        </div>
        <div class="right aligned column">
          <a href="#"  target="_blank">more <i class="angle double right icon"></i></a>
        </div>
      </div>
    </div>
    <div class="ui teal segment">
      <div class="ui fluid vertical menu" >

        <slot></slot>

        <!--*/-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>

</style>
