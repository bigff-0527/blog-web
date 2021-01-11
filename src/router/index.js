import Vue from 'vue'
import Router from 'vue-router'

import Front from "views/front/Front";
import FrontHome from "views/front/home/Home";
import FrontAbout from "views/front/about/About";
import FrontProfile from "views/front/profile/Profile"
import BlogList from "views/front/blogList/BlogList";
import BlogShow from "components/common/blogShow/BlogShow";

Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/front'
    },
    ,
    {
      path: '/front',
      component: Front,
      meta: {
        title: '前台'
      },
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'blogList',
          component: BlogList
        },
        {
          path: 'home',
          component: FrontHome
        },
        {
          path: 'profile',
          component: FrontProfile
        },
        {
          path: 'about',
          component: FrontAbout
        },
        {
          path:'blogShow',
          component :BlogShow
        }
      ]
    },
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export  default  router
