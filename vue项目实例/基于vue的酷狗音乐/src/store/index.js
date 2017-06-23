import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import search from './modules/search'
import ranklist from './modules/ranklist'
import rankInfo from './modules/rankInfo'
import newlist from './modules/newlist'
import panel from './modules/panel'
import musicbox from './modules/musicbox'
import songMenu from './modules/songMenu'
import singer from './modules/singer'


Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		home,
		search,
		ranklist,
		rankInfo,
		newlist,
		panel,
		musicbox,
		songMenu,
		singer
	}
})