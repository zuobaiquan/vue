import Vue from 'vue'
import lyricHelper from '../../assets/js/lyricHelper'

const state = {
	isShowPanel : false,
	panelInfo : {},
	songsHash : null,
	lyricData : null,
	isHideModule : false
}

const mutations = {
	showPanelInfo (state,payload) {
		state.isShowPanel = payload.isShowPanel;
		state.panelInfo = payload.panelInfo;
	},
	getLyricData (state,payload) {
		state.songsHash = payload.songsHash;
		state.lyricData = payload.lyricData;
	},
	updatePanelStatus (state,payload) {
		state.isShowPanel = payload.isShowPanel;
	},
	updateModuleStatus (state,payload) {
		state.isHideModule = payload.isHideModule;
	},
	closePanel (state,payload) {
		state.isHideModule = payload.isHideModule;
		state.isShowPanel = payload.isShowPanel;
	},
	updatePanelInfo (state,payload) {
		state.panelInfo = payload.panelInfo;
	}
}

const actions = {
	showPanelInfo ({commit},payload) {
		commit({
			type: 'showPanelInfo',
			isShowPanel : payload.isShowPanel,
			panelInfo: payload.panelInfo
		})
	},
	getLyricData ({commit},payload) {
		Vue.http.get('/i/krc.php?cmd=100&hash='+payload.hash+'&timelength=230000&d=0.05233345203879991')
			.then(res => {
				// console.log(res);
				var lyricData = lyricHelper._init(res.body);
				// console.log(lyricData);
				commit({
					type: 'getLyricData',
					songsHash: payload.hash,
					lyricData: lyricData
				})
			})
	}
}

export default {
	state,
	mutations,
	actions
}