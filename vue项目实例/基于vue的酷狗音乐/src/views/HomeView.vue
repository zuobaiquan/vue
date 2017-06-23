<template>
	<div class="home-view" v-show="!isHideModule">
		<nav-bar :view="viewName"></nav-bar>
		<photo-slider></photo-slider>
		<new-list :songsData="songsData"></new-list>
	</div>
</template>


<script>
import { mapState,mapActions } from 'vuex'
import { Indicator } from 'mint-ui'
import PhotoSlider from '../components/PhotoSlider'
import NavBar from '../components/NavBar'
import NewList from '../components/NewList'

export default {
	name: 'home-view',
	components: { PhotoSlider, NavBar , NewList },
	data () {
		return {
			viewName: 'home'
		}
	},
	computed: {
		...mapState({
			songsData: state => state.home.songsData,
			isHideModule: state => state.panel.isHideModule
		})
	},
	methods: {
		...mapActions([
			'getNewList'
		])
	},
	created () {
		Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
		this.getNewList();
	}
}
</script>


<style lang="scss" scoped>
.home-view{
	padding-top: 1rem;
}
</style>