/**
 * 路由器对象模块
 */
import Vue from 'vue'
import vueRouter from 'vue-router'

//
Vue.use(vueRouter)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
