<template>
  <div class="m-container-small m-padded-tb-massive" style="max-width: 30em !important;">
    <div class="ui container">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui teal image header">
            <img src="assets/images/logo.png" class="image">
            <div class="content">
              管理后台登录
            </div>
          </h2>
          <form class="ui large form" method="post" action="#" >
            <div class="ui  segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input type="text" name="username" placeholder="用户名 ">
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password" name="password" placeholder="密码">
                </div>
              </div>
              <button class="ui fluid large teal submit button">登  录</button>
            </div>

            <div class="ui error mini message"></div>
<!--            <div class="ui mini negative message" ></div>-->
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {login} from "assets/js/pop";

  export default {
    name: "login",
    mounted() {
      login()
    }
  }
</script>

<style scoped>

</style>
