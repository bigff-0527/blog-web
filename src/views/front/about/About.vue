<template>
  <div class="container">
<!--    justify-content-md-center-->
    <div class="row m-shadow-small  about-item animate__animated  animate__backInRight">
      <div class=" col-md-12 ">
        <img class="col-md-7" style="width: 100%;" src="~assets/img/homeBg.jpg" alt="">
        <div class="text col-md-5">
          <p class="display-4">Bigff </p>
          <span class="text-black-50">湖南·邵阳</span><br/>
          <el-divider> <span class="text-black-50">想成为全栈的键盘侠</span></el-divider>
        </div>
      </div>
    </div>
    <div class="row m-shadow-small  about-item">
      <div class=" col-md-12 ">

        <div class="text col-xl-5">
          <p class="display-4">前端 </p>
          <span class="text-black-50">Vue(store+router+axios)</span><br/>
          <span class="text-black-50">element</span><br/>
          <span class="text-black-50">bootstrap</span><br/>
          <a href="https://github.com/bigff-0527/blogWebFront" target="_blank" class="text-black-50">前台https://github.com/bigff-0527/blogWebFront</a><br/>
          <a href="https://github.com/bigff-0527/blogWebAdmin" target="_blank" class="text-black-50">后台https://github.com/bigff-0527/blogWebAdmin</a><br/>
        </div>
        <img class="col-xl-7" style="width: 100%;" src="~assets/img/homeBg.jpg" alt="">
      </div>
    </div>
    <div class="row m-shadow-small about-item">
      <div class=" col-md-12 ">
        <img class="col-sm-7" style="width: 100%;" src="~assets/img/homeBg.jpg" alt="">
        <div class="text col-sm-5">
          <p class="display-4">后端 </p>
          <span class="text-black-50">Springboot</span><br/>
          <span class="text-black-50">Mybatis</span><br/>
          <span class="text-black-50">Jwt</span><br/>
          <span class="text-black-50">Shiro</span><br/>
          <span class="text-black-50">Redis</span><br/>
          <span class="text-black-50">MySql</span><br/>
          <span class="text-black-50">Maven</span><br/>
          <span class="text-black-50">PageHelper</span><br/>
          <a href="https://github.com/bigff-0527/blogApi" target="_blank" class="text-black-50">https://github.com/bigff-0527/blogApi</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import AboutItem from "./aboutItem/AboutItem";
  export default {
    name: "About",
    components: {
      AboutItem
    },


  }
</script>

<style scoped>
  .about-item{
   margin: 10rem 0;
  }
  .about-item img{
    display: inline-block;
  }
  .about-item .text{
    display: inline-block;
  }
  .row{
    /*border: 1px solid red;*/
  }
  .el-divider__text {

    padding: 0px !important;

  }
</style>
