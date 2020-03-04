import Vue from 'vue'
import Vuex from 'vuex'
import {Session} from 'src/utils'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        routerDirection: '',
        navigations: Session.get('LINGGOU_NAVIGATIONS') || []
    },
    mutations: {
        UPDATE_ROUTER_DIRECTION (state, payload) {
            state.routerDirection = payload.routerDirection
        },
        UPDATE_NAVIGATIONS (state, payload) {
            state.navigations.push(payload.path)
            Session.set('LINGGOU_NAVIGATIONS', state.navigations)
        },
        DELETE_NAVIGATION (state, payload) {
            let index = payload.index
            state.navigations = state.navigations.slice(0, index+1)
            Session.set('LINGGOU_NAVIGATIONS', state.navigations)
        },
        CLEAR_NAVIGATIONS (state, payload) {
            Session.clear()
            state.navigations = []
        }
    }
})

export default store