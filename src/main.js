// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

// style
import './style/public.scss'
import './config/rem' // 屏幕适配

Vue.config.productionTip = false

/* 使用前写也可以 但是就没一个页面都得写一次 */
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}

/* eslint-disable no-new */
/* webpack.base.conf.js entry */
new Vue({
  el: '#app', // 这样写就可以不用写routerview?
  router,
  store,
  template: '<App />',
  components: { App }
})
