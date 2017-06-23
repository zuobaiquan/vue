<template>
	<div class="pages-view">
		<header-bar></header-bar>
		<router-view></router-view>
		<bottom-music-box v-if="isOpenBox"  :boxType="boxType"></bottom-music-box>
		<music-panel v-if="isShowPanel"></music-panel>
	</div>
</template>


<script>
import { mapState } from 'vuex'

import HeaderBar from '../components/HeaderBar'
import BottomMusicBox from '../components/BottomMusicBox'
import MusicPanel from '../components/MusicPanel'

export default {
	name: 'pages-view',
	components: { HeaderBar,BottomMusicBox,MusicPanel },
	data () {
		return {}
	},
	computed: {
		...mapState({
			boxType: state => state.musicbox.boxType,
			isOpenBox: state => state.musicbox.isOpenBox,
			isShowPanel: state => state.panel.isShowPanel
		})
	}
}
</script>



<style lang="scss" scoped>
.pages-view{
	width: 100%;
}
</style>