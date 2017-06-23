import Vue from 'vue'
import { Indicator } from 'mint-ui'

const state = {
	hotList : {},
	keyword: '',
	searchResult : {},
	pageIndex: 1,
	isSearch: false,
	searchList: [],
	isSearchByInput: false,
	currentHash: null,
	updateIndex: null,
	audioPlay: true,
	songsInfo: {},
	isContinue: false
}

const mutations = {
	getHotList (state,payload) {
		state.hotList = payload.hotList
	},
	searchSongs (state,payload) {
		state.searchResult = payload.searchResult;
		state.isSearch = payload.isSearch;
		state.pageIndex = payload.pageIndex;
		state.keyword = payload.keyword;
		state.searchList = payload.searchList;
		state.isSearchByInput = payload.isSearchByInput;
	},
	updateSongs (state,payload) {
		state.currentHash = payload.currentHash;
		state.currentAudio = payload.currentAudio;
		state.audioPlay = payload.audioPlay;
		state.songsInfo = payload.songsInfo;
		state.isContinue = payload.isContinue;
	},
	updateSongsHash (state,payload) {
		state.currentHash = payload.currentHash;
		state.updateIndex = payload.updateIndex;
	},
	updateAudioStatus (state,payload) {
		state.audioPlay = payload.audioPlay;
		state.isContinue = payload.isContinue;
	},
	updateSearchStatus (state,payload) {
		state.isSearch = payload.isSearch;
	}
}

const actions = {
	getHotList ({commit}) {
		Vue.http.jsonp('http://mobilecdn.kugou.com/api/v3/search/hot?format=jsonp&plat=0&count=20')
			.then(res => {
				Indicator.close();
				if(res.status == 200){
					commit({
						type: 'getHotList',
						hotList: res.body.data.info
					})
				}
			})
	},
	searchSongs ({commit,state},payload) {
		Vue.http.jsonp('http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&keyword='+payload.keyword+'&page='+payload.pageIndex+'&pagesize=30&showtype=1')
			.then(res => {
				if(res.status == 200){
					var resObj = {};
					resObj.keyword = payload.keyword;
					resObj.pageIndex = payload.pageIndex;
					resObj.data = res.body.data;
					commit({
						type: 'searchSongs',
						searchResult: resObj,
						isSearch: true,
						searchList: resObj.data.info,
						pageIndex: payload.pageIndex,
						keyword: payload.keyword,
						isSearchByInput: payload.isSearchByInput
					})
				}
			})
	},
	updateSongs ({commit,state},payload) {

		Vue.http.jsonp('http://m.kugou.com/app/i/getSongInfo.php?hash='+payload.currentHash+'&cmd=playInfo&format=jsonp').then(res => {
			if(res.status === 200){
				commit({
					type: 'updateSongs',
					currentHash: payload.currentHash,
					audioPlay: payload.audioPlay,
					isContinue: payload.isContinue,
					songsInfo: res.body
				})
				
			}
		});
	}
}

export default {
	state,
	mutations,
	actions
}