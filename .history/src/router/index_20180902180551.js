/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSiite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/search',
      component: MSite
    },
    {
      path: '/msite',
      name: 'HelloWorld',
      component: MSite
    },
    {
      path: '/msite',
      name: 'HelloWorld',
      component: MSite
    },
    {
      path: '/msite',
      name: 'HelloWorld',
      component: MSite
    }
  ]
})
