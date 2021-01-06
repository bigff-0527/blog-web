import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import $ from 'jquery'
// import SemanticUI from 'semantic-ui-css/semantic.js';
import 'bootstrap'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import "bootstrap-select/dist/css/bootstrap-select.css"
import "bootstrap-select/js/bootstrap-select"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'assets/css/me.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
