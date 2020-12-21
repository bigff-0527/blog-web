<template>
  <div class="m-container-small m-padded-tb-big">
    <div class="ui container">

      <count>
        <h3 slot="typeName" class="ui teal header">归档</h3>
        <h2 slot="typeCount" class="ui orange header m-inline-blok m-text-thin">1</h2>
      </count>

      <h3 class="ui center aligned header">2017</h3>
      <profile-item>
        <span slot="title">标题</span>
        <div slot="createTime" class="ui teal basic left pointing label m-padded-tb-mini">2020-09-07</div>
        <div slot="type" class="ui orange basic left pointing label m-padded-tb-mini">原创</div>
      </profile-item>

    </div>
  </div>
</template>

<script>
  import Count from "components/common/count/Count";
  import ProfileItem from "./profileItem/ProfileItem";
  export default {
    name: "Profile",
    components: {
      Count,
      ProfileItem
    }
  }
</script>

<style scoped>

</style>
