import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  options: {
    customProperties: true,
  },
  theme: {
    primary: '#3e84ed',
    secondary: '#ffba38',
    accent: '#f2433c',
    error: '#be3132',
    info: '#0df5e3',
    success: '#00a75a',
    warning: '#FFC107',
  },
  iconfont: 'md',
});
