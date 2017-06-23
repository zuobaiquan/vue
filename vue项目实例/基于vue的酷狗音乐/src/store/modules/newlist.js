import Vue from 'vue'

const state = {
	updateIndex : null,
	keyword : null,
	songsHash : null,
	audioPlay : true,
	isContinue : false,
	songsInfo : {},
	fileUrl : null,
	baiduSongId : null
}

const mutations = {
	updateIndex (state,payload) {
		state.updateIndex = payload.updateIndex;
		state.baiduSongId = payload.baiduSongId;
	},
	updateSongsByKeyword (state,payload) {
		state.updateIndex = payload.updateIndex;
		state.keyword = payload.keyword;
		state.songsHash = payload.songsHash;

	},
	playSongs (state,payload) {
		state.audioPlay = payload.audioPlay;
		// state.isContinue = payload.isContinue;
		state.songsInfo = payload.songsInfo;
		state.fileUrl = payload.fileUrl;
	},
	updateAudioStatus (state,payload) {
		state.audioPlay = payload.audioPlay;
		state.isContinue = payload.isContinue;
	}
}

const actions = {
	updateSongsByKeyword ({commit},payload) {

		Vue.http.jsonp('http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&keyword='+payload.keyword+'&page=1&pagesize=1&showtype=1')
			.then(res => {

				if(res.status == 200) {
					///console.log(res.body.data.info[0].hash);
					commit({
						type: 'updateSongsByKeyword',
						keyword: payload.keyword,
						updateIndex: payload.updateIndex,
						songsHash: res.body.data.info[0].hash
					})

				}				
			})
	},
	playSongs ({commit},payload) {

		Vue.http.jsonp('http://m.kugou.com/app/i/getSongInfo.php?hash='+payload.songsHash+'&cmd=playInfo&format=jsonp')
			.then(res => {
				if(res.status == 200) {
					commit({
						type: 'playSongs',
						audioPlay: payload.audioPlay,
						songsInfo: res.body,
						fileUrl: res.body.url
					})
				}
			})
	}
}


export default {
	state,
	mutations,
	actions
}