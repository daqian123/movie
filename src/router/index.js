import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import test1 from '@/components/test/test1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
        path: '/',
        name: 'test1',
        component: test1
      },
  ]
})
