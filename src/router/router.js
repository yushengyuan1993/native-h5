import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'dir', redirect: home, component: home },
    
    { path: '/home', name: 'home', component: home },
  ]
})
