import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import RefComputed from '../views/ref computed.vue'
import Home from '../views/Home.vue'
import Dropdown from '../views/dropdown.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dropdown',
    name: 'Dropdown',
    component: Dropdown
  },
  {
    path: '/ref',
    name: 'RefComputed',
    component: RefComputed
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
  },
  {
    path: '/defineComponent',
    name: 'defineComponent',
    component: () => import(/* webpackChunkName: "mouse" */ '../views/defineComponent.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
