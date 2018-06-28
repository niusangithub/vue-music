import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazy from 'vue-lazyload'
import 'common/stylus/index.styl'

// Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(VueLazy, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
