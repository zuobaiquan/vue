import Vue from 'vue'
import store from '../store'
import {Session} from 'src/utils'

let touchEndTime = Date.now(),
    isVuePush = false,
    isChooseDirection = false

const pathKey = 'APP_KEY'

// 监听手指离开屏幕的时间， 用来判断IOS滑动切换
window.addEventListener('touchend', () => {
    touchEndTime = Date.now()
})

//router方法重置
const routerMethodReset = router => {
    const methods = ['push', 'go', 'replace', 'forward', 'back']
    methods.forEach(key => {
        let method = router[key].bind(router)
        router[key] = (...args) => {
            isVuePush = true
            method.apply(null, args)
        }
    })
    // 返回指定路径
    router._goBack = (path, query = {}) => {
        store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'back' })
        isChooseDirection = true
        router.push({path, query})
    }
}

// next设置戳
const nextReset = (next, to) => {
    const query = { ...to.query }
    if (!query[pathKey]) {
        query[pathKey] = Math.random().toString(16).substring(2)
        next({ path: to.path, query})
    }else{
        next()
    }
}

// 记录当前路径
const updateNavigations = (to) => {
    if (to.query[pathKey]) {
        store.commit('UPDATE_NAVIGATIONS', {path: to.fullPath})
    }
}
const routerEach = (router) => {
    routerMethodReset(router)
    router.beforeEach((to, from, next) => {
        // 是否需要loading动画
        if (to.meta.loading !== false) {
            store.commit('UPDATE_LOADING_STATUS', { isLoading: true })
        } 
        
        // 没有提前选择转场动画
        if (!isChooseDirection) { 
            let toIndex = store.state.navigations.findIndex(path => path === to.fullPath)
            if (toIndex >= 0) { // 存在该路径
                if (isVuePush) { // vue内置history跳转
                    if (to.meta.slide) {
                        store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'forward' })
                    }else{
                        store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: '' })
                    }
                    updateNavigations(to)
                }else{ // 系统导航
                    if ((Date.now() - touchEndTime) < 377) { // ios滑动切换
                        store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: '' })
                    }else{
                        let len = store.state.navigations.length-1
                        if (toIndex < 0) { // 前进
                            store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'forward' })
                        } else if (toIndex === len) {
                            console.log('refresh') // 刷新
                        } else { // 返回
                            store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'back' })
                            store.commit('DELETE_NAVIGATION', { index: toIndex })
                        }
                    }
                }  
            }else{ // 不存在该路径, 直接forward跳转
                store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'forward' })
                updateNavigations(to)
            }
        }else{
            updateNavigations(to)
        }

        // 是否需要授权
        nextReset(next, to) 
    })

    router.afterEach((to, from) => {
        isVuePush = false
        isChooseDirection = false
        store.commit('UPDATE_LOADING_STATUS', { isLoading: false })
    })
}
export default routerEach

