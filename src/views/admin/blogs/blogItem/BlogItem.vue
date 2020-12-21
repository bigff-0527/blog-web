<template>
  <div>
  <banner>
    <a href="#" class=" item">发布</a>
    <a href="#"  class=" teal active item">列表</a>
  </banner>
  <div class="m-container-small m-padded-tb-big">
    <div class="ui container">
      <div  class="ui secondary segment form">
        <input type="hidden" name="page">
        <div class="inline fields">
          <div class="field">
            <input type="text" name="title" placeholder="标题">
          </div>
          <div class="field">
            <div class="ui labeled action input">
              <div class="ui type selection dropdown">
                <input type="hidden" name="typeId">
                <i class="dropdown icon"></i>
                <div class="default text">分类</div>
                <div class="menu">
                  <div class="item" data-value="1"  >学习日志</div>
                </div>
              </div>
              <button  class="ui compact clear button">clear</button>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" id="recommend" name="recommend">
              <label for="recommend">推荐</label>
            </div>
          </div>
          <div class="ui field">
            <button type="button" id="search-btn" class="ui mini teal basic button"><i class="search icon"></i>搜索</button>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
  </div>
</template>

<script>
  import Operation from "components/common/operation/Operation";
  import Banner from "components/common/banner/Banner";
  export default {
    name: "BlogItem",
    components: {
      Operation,
      Banner
    }
  }
</script>

<style scoped>

</style>
