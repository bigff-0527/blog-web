<template>
  <div class="ui fluid vertical menu">
    <a href="#" target="_blank" class="item">
           <span>
             <i class="mini teal circle icon"></i> <slot name="title"></slot>
             <slot name="createTime"></slot>
           </span>
      <slot name="type"></slot>
    </a>
  </div>
</template>

<script>
  export default {
    name: "ProfileItem"
  }
</script>

<style scoped>

</style>
