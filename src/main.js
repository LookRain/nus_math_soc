// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'

import axios from 'axios'
window.axios = axios
// window.axios.defaults.headers.common = {
//   'X-Requested-With': 'XMLHttpRequest'
// }

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import './styles.sass'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
