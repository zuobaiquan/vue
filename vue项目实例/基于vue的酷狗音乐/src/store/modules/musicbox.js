import Vue from 'vue'

const state = {
	songsData: {},
	boxType: '',
	isOpenBox: false,
	isHideBox: true,
	audioInfo: {
		mediaCurrentTime: null,
		mediaDuration: null,
		media: null
	},
	isChangeMedia: false
}

const mutations = {

	listenMusic (state,payload) {
		state.songsData = payload.songsData;
		state.boxType = payload.boxType;
		state.isOpenBox = payload.isOpenBox;
		state.isHideBox = payload.isHideBox;
	},

	isHideBox (state,payload) {
		state.isHideBox = payload.isHideBox;
	},

	updateMedia (state,payload) {
		state.audioInfo = payload.audioInfo;
	},

	updateMediaTime (state,payload) {
		state.audioInfo.mediaCurrentTime = payload.mediaCurrentTime;
	},
	updateMediaStatus (state,payload) {
		state.isChangeMedia = payload.isChangeMedia;
	}

}

const actions = {

}


export default {
	state,
	mutations,
	actions
}