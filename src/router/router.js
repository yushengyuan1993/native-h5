import Vue from 'vue'
import Router from 'vue-router'

// 用户相关
import unlogin from '../pages/user/unlogin'

// 选课

// 我的学习

// 我的
import home from '../pages/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 首页重定向
    { path: '/', name: 'dir', redirect: home, component: home },

    // 用户相关
    { path: '/unlogin', name: 'unlogin', component: unlogin },
    
    // 我的
    { path: '/home', name: 'home', component: home },
  ]
})
