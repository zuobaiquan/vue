import Vue from 'vue'
import { Indicator } from 'mint-ui'

const state = {
	songsData: {}
}

const mutations = {
	getNewList (state,payload) {
		state.songsData = payload.songsData
	}
}

const actions = {
	getNewList ({commit}) {
		Vue.http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=20&offset=0')
			.then(res => {
				Indicator.close();
				commit({
					type: 'getNewList',
					songsData: res.body.song_list
				})
				
			})
	}
}

export default {
	state,
	mutations,
	actions
}