import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/ref computed.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: () =>
      import(
        /* webpackChunkName: "reactive" */ '../views/reactive toRefs watch.vue'
      )
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: () => import(/* webpackChunkName: "reactive" */ '../views/lifecycle.vue')
  },
  {
    path: '/mouse',
    name: 'mouse',
    component: () => import(/* webpackChunkName: "mouse" */ '../views/mouse.vue')
  },
  {
    path: '/hookmouse',
    name: 'hookmouse',
    component: () => import(/* webpackChunkName: "mouse" */ '../views/hook/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
