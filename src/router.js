import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/containers/Layout'
import Home from '@/views/Home'

import Customers from '@/views/Customers/Customers'
import Orders from '@/views/Orders/Orders'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: Layout,
      beforeEnter: (to, from, next) => {
        const serialized = localStorage.getItem('authorization')

        if (!serialized) {
          localStorage.setItem('rollback-uri', to.fullPath)
          next('/login')
        } else {
          next()
        }
      },
      children: [
        {
          path: '/home',
          component: Home,
          props: { route: 'home' },

        },
        {
          path: '/orders',
          component: Orders,
          props: { route: 'orders' },

        },
        {
          path: '/customers',
          component: Customers,
          props: { route: 'customers' },

        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
