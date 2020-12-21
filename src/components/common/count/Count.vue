<template>
  <div class="ui top attached segment">
    <div class="ui middle aligned two column grid">
      <div class="column">
        <slot name="typeName"></slot>
      </div>
      <div class="right aligned column" >
      <slot name="typeCount"></slot>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeBlogCount"
  }
</script>

<style scoped>

</style>
