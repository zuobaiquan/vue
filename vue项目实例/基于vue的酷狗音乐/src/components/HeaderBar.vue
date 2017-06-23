<template>
	<div id="headerBar">
		<div class="logo-div">
			<span class="logo"></span>
			<span class="title">酷喵音樂</span>
		</div>
		<router-link :to="{ name: 'SearchView' }">
		<span @click="closeMusicPanel" class="search-icon"></span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'header-bar',
	data () {
		return {}
	},
	methods: {
		closeMusicPanel () {
			this.$store.commit({
				type: 'closePanel',
				isShowPanel: false,
				isHideModule: false

			})
		}
	}
}
</script>

<style lang="scss" scoped>
#headerBar {
		width: 100%;
		height: 1rem;
		background: #2ca2f9;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;

		.logo-div {
			display: inline-block;
			width: 50%;
			height: 100%;

			.logo {
				width: .7rem;
				height: .7rem;
				display: inline-block;
				margin-left: .2rem;
				background-image: url(../assets/images/logo.png);
				background-repeat: no-repeat;
				background-position: 50% 0;
				background-size: 100% 100%;
				vertical-align: middle;
			}

			.title {
				width: 2rem;
				height: 100%;
				display: inline-block;
				font-size: .36rem;
				color: #fff;
				vertical-align: middle;
				line-height: 1rem;
				margin-left: .1rem;
			}
		}

		.search-icon {
			width: .5rem;
			height: .5rem;
			display: inline-block;
			position: absolute;
			right: .5rem;
			top: .25rem;
			background-image: url(../assets/images/search.png);
			background-repeat: no-repeat;
			background-position: 50% 0;
			background-size: 100% 100%;
			cursor: pointer;
		}

	}
</style>