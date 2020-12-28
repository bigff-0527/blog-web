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
          <form class="ui large form" >
            <div class="ui  segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input @keyup.enter="loginSuB()" type="text" v-model="username" placeholder="用户名 ">
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input @keyup.enter="loginSuB()" type="password" v-model="password" placeholder="密码">
                </div>
              </div>
              <div  @click="loginSuB()" class="ui fluid large teal submit button">登  录</div>
            </div>

            <div v-if="message" class="ui error mini message"></div>
            <div v-if="message" class="ui mini negative message" >{{message}}</div>

          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import {login} from "assets/js/pop";
  import {login} from "network/login";


  export default {
    name: "login",
    data(){
      return {
        username: '',
        password: '',
        message: null,
      }
    },
    mounted() {
      // login()
    },
    methods: {
      loginSuB(){
        login(this.username,this.password).then( res => {
          console.log(res)
          if (res.code==10000){
            this.$router.push('/admin')
          }else{
            this.message = res.msg
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
