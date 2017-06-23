import Vue from 'vue'
import { Indicator } from 'mint-ui'

const state = {
	offset : 0,
	rankInfo : {},
	songsList : {},
	typeId : null
}

const mutations = {
	getRankInfo (state,payload) {
		state.offset = payload.offset;
		state.rankInfo = payload.rankInfo;
		state.typeId = payload.typeId
		state.songsList = payload.songsList;
	},
	updateOffset (state,payload) {
		state.offset = payload.offset;
	}
}

const getters = {
	songNum: state => {
		return state.rankInfo.billboard_songnum
	}
}

const actions = {

	getRankInfo ({commit},payload) {
		Vue.http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?format=jsonp&method=baidu.ting.billboard.billList&type='+payload.typeId+'&size=20&offset='+payload.offset)
			.then(res => {
				//console.log(res);
				Indicator.close();
				commit({
					type: 'getRankInfo',
					offset: payload.offset,
					rankInfo: res.body.billboard,
					songsList: res.body.song_list,
					typeId: payload.typeId
				})
			})
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}