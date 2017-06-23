import Vue from 'vue'

const state = {
	ranklists : [
		{
			name: '新歌榜',
			imgUrl: require('../../assets/images/ranklist_01.png'),
			listIndex: 0,
			typeId: 1
		},
		{
			name: '熱歌榜',
			imgUrl: require('../../assets/images/ranklist_02.png'),
			listIndex: 1,
			typeId: 2
		},
		{
			name: 'KTV熱歌榜',
			imgUrl: require('../../assets/images/ranklist_03.png'),
			listIndex: 2,
			typeId: 6
		},
		{
			name: '叱咤歌曲榜',
			imgUrl: require('../../assets/images/ranklist_04.png'),
			listIndex: 3,
			typeId: 7
		},
		{
			name: 'Billboard單曲榜',
			imgUrl: require('../../assets/images/ranklist_05.png'),
			listIndex: 4,
			typeId: 8
		},
		{
			name: '雪碧音碰音榜',
			imgUrl: require('../../assets/images/ranklist_06.png'),
			listIndex: 5,
			typeId: 9
		},
		{
			name: '搖滾榜',
			imgUrl: require('../../assets/images/ranklist_07.png'),
			listIndex: 6,
			typeId: 11
		},
		{
			name: '影視金曲榜',
			imgUrl: require('../../assets/images/ranklist_08.png'),
			listIndex: 7,
			typeId: 14
		},
		{
			name: 'Hito中文榜',
			imgUrl: require('../../assets/images/ranklist_09.png'),
			listIndex: 8,
			typeId: 18
		},
		{
			name: '華語金曲榜',
			imgUrl: require('../../assets/images/ranklist_10.png'),
			listIndex: 9,
			typeId: 20
		},
		{
			name: '歐美金曲榜',
			imgUrl: require('../../assets/images/ranklist_11.png'),
			listIndex: 10,
			typeId: 21
		},
		{
			name: '經典老歌榜',
			imgUrl: require('../../assets/images/ranklist_12.png'),
			listIndex: 11,
			typeId: 22
		},
		{
			name: '情歌對唱榜',
			imgUrl: require('../../assets/images/ranklist_13.png'),
			listIndex: 12,
			typeId: 23
		},
		{
			name: '網絡歌曲榜',
			imgUrl: require('../../assets/images/ranklist_14.png'),
			listIndex: 13,
			typeId: 25
		}
	]
}

const mutations = {

}

const actions = {

}

export default {
	state,
	mutations,
	actions
}