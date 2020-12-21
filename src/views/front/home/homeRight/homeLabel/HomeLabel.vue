<template>
  <div class="ui segments  m-margin-top-large">
    <div class="ui secondary segment">
      <div class="ui two column grid">
        <div class="column">
          <i class="tags icon"></i> 标签
        </div>
        <div class="right aligned column">
          <a href="#" target="_blank">more <i class="angle double right icon"></i></a>
        </div>
      </div>
    </div>
    <div class="ui teal segment" >

      <slot></slot>

    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeLabel"
  }
</script>

<style scoped>

</style>
