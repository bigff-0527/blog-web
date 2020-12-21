import Vue from 'vue'
import Router from 'vue-router'

import Front from "views/front/Front";
import FrontHome from "views/front/home/Home";
import FrontAbout from "views/front/about/About";
import FrontClassify from "views/front/classify/Classify";
import FrontLabel from "views/front/label/Label"
import FrontProfile from "views/front/profile/Profile"

import Admin from "views/admin/Admin";
import AdminIndex from "views/admin/index/Index";
import AdminBlogs from "views/admin/blogs/Blogs";
import AdminClassify from "views/admin/classify/Classify";
import AdminLabel from "views/admin/label/Label";
import Login from "views/admin/Login";



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
          path: 'home',
          component: FrontHome
        },
        {
          path: 'classify',
          component: FrontClassify
        },
        {
          path: 'label',
          component: FrontLabel
        },
        {
          path: 'profile',
          component: FrontProfile
        },
        {
          path: 'about',
          component: FrontAbout
        },
      ]
    },
    // {
    //   path: '',
    //   redirect: '/home'
    // },

      {
        path: '/admin',
        component: Admin,
        meta: {
          title: '后台'
        },
        children: [
          {
            path: '',
            component: AdminIndex
          },
          {
            path: 'blogs',
            component: AdminBlogs
          },
          {
            path: 'classify',
            component: AdminClassify
          },
          {
            path: 'label',
            component: AdminLabel
          }
        ]
      },
    {
      path: '/login',
      component: Login
    }

  ],
  mode: 'history'
})

export  default  router
