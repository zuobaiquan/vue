<template>
	<div id="navBar">
		<ul>
			<li :class="{'active' : view === 'home' }">
				<router-link :to="{name: 'HomeView'}">新歌</router-link>
			</li>
						
			<li :class="{'active' : view === 'ranklist' }">
				<router-link :to="{name: 'RankListView'}">排行</router-link>
			</li>
			
			<li :class="{'active' : view === 'songlist' }">
				<router-link :to="{name: 'SongListView'}">歌單</router-link>
			</li>
			<li :class="{'active' : view === 'singerlist' }">
				<router-link :to="{name: 'SingerListView'}">歌手</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'nav-bar',
	props: ['view'],
	data () {
		return {}
	}
}
</script>


<style lang="scss" scoped>
#navBar {
	width: 100%;
	height: 1rem;
	position: fixed;
	z-index: 999;
	background: #fff;

	ul {
		width: 100%;
		height: 100%;
		display: flex;

		li {
			flex: 1;
			line-height: 1rem;
			font-size: .3rem;
			text-align: center;
			position: relative;
		}
		li.active {
			border-bottom: 3px solid #2ca2f9;
		}
		a{
			color:#000;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
	}

}
</style>