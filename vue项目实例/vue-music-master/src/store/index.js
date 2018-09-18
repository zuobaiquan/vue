import Vue from 'vue'
import Vuex from 'vuex'
import musicplayer from './modules/musicplayer'
import 'es6-promise/auto'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    musicplayer
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
