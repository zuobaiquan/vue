import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout';

/* login */
const Login = _import('login/index');

/* dashboard */
const dashboard = _import('dashboard/index');

/* error page */
const Err404 = _import('404');

/* demo page */
const MenuCtrl = _import('menu/menu');
const Table = _import('table/index');
const Admin = _import('power/admin/admin');
const Roles = _import('power/roles/roles');

Vue.use(Router);

 /**
  * icon : the icon show in the sidebar
  * hidden : if `hidden:true` will not show in the sidebar
  * redirect : if `redirect:noredirect` will not redirct in the levelbar
  * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
  * meta : `{ role: ['admin'] }`  will control the page role
  **/
export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: Err404, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    hidden: true,
    children: [{ path: 'dashboard', component: dashboard }]
  }
]



export const asyncRouterMap = [
  {
    path: '/power',
    component: Layout,
    name: '权限管理',
    children: [
      { path: 'admin', component: Admin, name: '管理员管理' },
      { path: 'role', component: Roles, name: '角色管理' }
    ]
  },
  {
    path: '/menuCtrl',
    component: Layout,
    name: '菜单管理',
    redirect: '/menuCtrl/menuCtrl',
    children: [
      { path: 'menuCtrl', component: MenuCtrl, name: '菜单管理' }
    ]
  },

  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    name: 'Table',
    children: [
      { path: 'index', component: Table, name: 'Table' }
    ]
  },
  
  { path: '*', redirect: '/404', hidden: true }
];

const routerMenu = constantRouterMap.concat(asyncRouterMap);
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMenu
});