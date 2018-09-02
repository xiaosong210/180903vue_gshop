/**
 * 路由器对象模块
 */
import Vue from 'vue'
import vueRouter from 'vue-router'

//声明使用插件
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