import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var theme = require('../.theme.json')
theme.install = function () {
  Object.defineProperty(Vue.prototype, '$theme', {
    get () {
      return theme
    }
  })
}

Vue.use(theme)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
