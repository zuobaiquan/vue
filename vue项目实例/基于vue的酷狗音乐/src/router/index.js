import Vue from 'vue'
import Router from 'vue-router'

import PageView from '../views/PageView'
import HomeView from '../views/HomeView'
import RankListView from '../views/RankListView'
import SongListView from '../views/SongListView'
import SingerListView from '../views/SingerListView'
import SearchView from '../views/SearchView'
import RankListInfoView from '../views/RankListInfoView'
import SongListInfoView from '../views/SongListInfoView'
import SingerListInfoView from '../views/SingerListInfoView'
import SingerInfoView from '../views/SingerInfoView'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/pages/'
		},
		{
			path: '/pages',
			component: PageView,
			children: [
				{
					path: '',
					redirect: '/pages/home'
				},
				{
					path: 'home',
					name: 'HomeView',
					component: HomeView
				},
				{
					path: 'ranklist',
					name: 'RankListView',
					component: RankListView
				},
				{
					path: 'songlist',
					name: 'SongListView',
					component: SongListView
				},
				{
					path: 'singerlist',
					name: 'SingerListView',
					component: SingerListView
				}

			]
		},
		{
			path: '/search',
			name: 'SearchView',
			components: {
				default: PageView,
				search: SearchView
			}
		},
		{
			path: '/rankList/info/:typeId/:index',
			name: 'RankListInfoView',
			components: {
				default: PageView,
				rankListInfo: RankListInfoView
			}
		},
		{
			path: '/songList/info/:menuIndex',
			name: 'SongListInfoView',
			components: {
				default: PageView,
				songListInfo: SongListInfoView
			}
		},
		{
			path: '/singerList/info/:typeId',
			name: 'SingerListInfoView',
			components: {
				default: PageView,
				singerListInfo: SingerListInfoView
			}
		},
		{
			path: '/singerInfo/:artistId',
			name: 'SingerInfoView',
			components: {
				default: PageView,
				singerInfo: SingerInfoView
			}
		} 
	]
})


