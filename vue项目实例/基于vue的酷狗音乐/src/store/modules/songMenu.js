import Vue from 'vue'
import { Indicator } from 'mint-ui'

const state = {
	page_no : null,
	page_size : null,
	songsMenu : [],
	songsMenuTotal : 0,
	menuTempList : []
}

const mutations = {
	getSongsMenu (state,payload) {
		state.page_no = payload.page_no;
		state.page_size = payload.page_size;
		state.songsMenu = payload.songsMenu;
		state.songsMenuTotal = payload.songsMenuTotal;
	},
	updateMenuTempList (state,payload) {
		state.menuTempList = payload.menuTempList;
	}
}

const getters = {

}

const actions = {
	getSongsMenu ({commit},payload) {
		Vue.http.jsonp('http://musicapi.qianqian.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.diy.gedan&format=jsonp&page_no='+payload.page_no+'&page_size='+payload.page_size+'&query=全部')
				.then(res => {
					if(payload.page_no == 1) {
						Indicator.close();
					}
					if(res.status === 200){
						commit({
							type: 'getSongsMenu',
							page_no: payload.page_no,
							page_size: payload.page_size,
							songsMenu: res.body.content,
							songsMenuTotal: res.body.total
						})
						}
					})
	},
	getSongsMenuInfo ({commit},payload) {
		Vue.http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid='+payload.songId)
				.then(res => {
					console.log(res);
					if(res.status === 200) {
						return res.body.songinfo.title;
					}
				})
	}
}

export default {
	state,
	mutations,
	actions
}