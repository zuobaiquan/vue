import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import actions from './actions'
import  mutations from './mutations'
import * as mutations_types from './mutations_types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  // getters,
  // actions,
  mutations
})
export default store
