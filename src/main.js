// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false

/* eslint-disable no-new */
/* webpack.base.conf.js entry */
new Vue({
  el: '#app', // 这样写就可以不用写routerview?
  router,
  store,
  template: '<App />',
  components: { App }
})
