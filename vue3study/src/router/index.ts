import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/ref computed.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/reactive",
    name: "Reactive",
    component: () => import(/* webpackChunkName: "reactive" */ "../views/reactive toRefs watch.vue")
  },
  {
    path: "/lifecycle",
    name: "Lifecycle",
    component: () => import(/* webpackChunkName: "reactive" */ "../views/lifecycle.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
