import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import $ from 'jquery'
import 'bootstrap'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'animate.css/animate.min.css'
import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'
import 'font-awesome/css/font-awesome.css'


import 'assets/css/me.css'


Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
