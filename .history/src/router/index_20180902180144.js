import Vue from 'vue'
import vueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

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
