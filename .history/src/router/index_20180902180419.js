/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import MSite from '../pages/MSite/MSite.vue'
import MSite from '../pages/MSite/MSite.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
