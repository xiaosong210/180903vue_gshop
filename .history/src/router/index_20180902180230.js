/**
 * 路由器对象模块
 */
import Vue from 'vue'
import vueRouter from 'vue-router'

//声明使用
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
