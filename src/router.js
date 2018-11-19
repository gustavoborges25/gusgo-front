import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Layout from '@/containers/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: Layout,
      beforeEnter: function (to, from, next) {
        const serialized = localStorage.getItem('authorization')

        if (!serialized) {
          localStorage.setItem('rollback-uri', to.fullPath)
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
