import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layout/index'
import EmptyLayout from '../layout/empty'
// import Login from '../views/auth/Login.vue'
// import ListBarang from '../views/barang/ListBarang.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login
  // },

  // {
  //   path: '../views/Barang/ListBarang.vue',
  //   name: 'ListBarang',
  //   component: ListBarang
  // }

  {
    name: 'Auth',
    component: EmptyLayout,
    icon: 'mdi-clipboard-account-outline',
    subtitle: 'Pages',
    path: '',
    open: false,
    // beforeEnter: (to, from, next) => {
    //   if (store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'Helper List',
    //     })
    //   }
    //   next()
    // },
    children: [
      {
        name: 'Login',
        component: () => import('../views/auth/Login'),
        path: '',
      },
      {
        name: 'Logout',
        path: 'logout',
      },
    ],
  },

  {
    name: 'Page Maintance',
    component: MainLayout,
    subtitle: 'Components',
    path: '/page/maintance',
    open: false,
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'Login',
    //     })
    //   }
    //   next()
    // },
    children: [
      {
        name: 'Maintance',
        component: () => import('../views/maintance/PageMaintance'),
        path: '/maintance',
      },
    ],
  },

  {
    name: 'Page Unauthorized',
    component: MainLayout,
    subtitle: 'Components',
    path: '/page/unauthorized',
    open: false,
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'Login',
    //     })
    //   }
    //   next()
    // },
    children: [
      {
        name: 'Unauthorized',
        component: () => import('../views/unauthorized/PageUnauthorized'),
        path: '/unauthorized',
      },
    ],
  },

  {
    name: 'Page Server Error',
    component: MainLayout,
    subtitle: 'Components',
    path: '/page/server-error',
    open: false,
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'Login',
    //     })
    //   }
    //   next()
    // },
    children: [
      {
        name: 'Page Server Error',
        component: () => import('../views/error/PageError404'),
        path: '/server-error/404',
      },
      {
        name: 'Page Server Error',
        component: () => import('../views/error/PageError500'),
        path: '/server-error/500',
      },
    ],
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
