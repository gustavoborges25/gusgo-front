import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import Env from '../.env.js'
import {AuthorizationInterceptor} from './interceptors'
import miniToastr from 'mini-toastr';

Vue.config.productionTip = false

var theme = require('../.theme.json')
theme.install = function () {
  Object.defineProperty(Vue.prototype, '$theme', {
    get () {
      return theme
    }
  })
}

Vue.use(miniToastr.init());

Vue.use(VueResource)
Vue.use(theme)
Vue.use(Env)

Vue.http.interceptors.push(AuthorizationInterceptor(router))
Vue.http.options.root = Vue.env.BASE_API_URL

new Vue({
  router,
  store,
  render: h => h(App),
  components: { App }
}).$mount('#app')
