<template>
	<div id="app" class="app">
		
			<transition
				 appear
				:enter-active-class="animateIn"
		 		:leave-active-class="animateOut"
		 		:mode="animateMode"
			>
				<!-- <keep-alive> -->
					<router-view></router-view>
				<!-- </keep-alive> -->
			</transition>
		
	</div>
</template>

<script>

export default {
	name: 'app',
	data () {
		return {
			
		}
	},
	methods : {
		
	},
	computed : {
		animateIn(){
			return 'animated ' + this.$store.state.animateIn
		},
		animateOut(){
			return 'animated ' + this.$store.state.animateOut
		},
		animateMode(){
			return this.$store.state.animateMode
		}
	}
	
}
</script>

<style>
	
	* {
		margin: 0;
		padding : 0;
	}
	html {
		height: 100%;
	}
	body {
		height: 100%;
	}
	img {
		max-width: 100%;
	}
	a {
		text-decoration: none;
		color: #666;
	}
	ul {
		list-style-type: none
	}
	div.app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		width: 100%;
		height: 100%;
		/*动画*/
		position: absolute;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		background: #fff;
	}	
</style>
