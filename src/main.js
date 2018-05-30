// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios' 
import VueAxios from 'vue-axios'
//import {store} from './store/store' //引入vuex store中央管理
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.config.silent = true
Vue.use(ElementUI)
Vue.use(VueAxios,axios)
Vue.use(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
