import Vue from 'vue'
import Router from 'vue-router'
import routerEach from './setting'
Vue.use(Router)
const _import_ = file => () => import('components/' + file + '.vue')

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path: '/page1',
            component: _import_('page1')
        },
        {
            path: '/page2',
            component: _import_('page2')
        },
        {
            path: '/page3',
            component: _import_('page3')
        },
        {
            path: '/page4',
            component: _import_('page4')
        }
    ]
})

routerEach(router)
export default router