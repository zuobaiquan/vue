<!--轮播图组件 -->
<template>
	<div id="index_swipe" class="">
		<mt-swipe 
			:auto="3000" 
			:speed="400"
			:continuous="continuous"
			:showIndicators="showIndicators"
			:prevent="prevent"
			class="index_swipe"
		>
			<mt-swipe-item class="slide1">
				<img src="../../assets/img/slide/1.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item class="slide2">
				<img src="../../assets/img/slide/2.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item class="slide3">
				<img src="../../assets/img/slide/3.jpg" alt="">
			</mt-swipe-item>
		</mt-swipe>
		
	</div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);

export default {
	name: 'index_swipe',
	data () {
		return {
			continuous : true,
			showIndicators : true,
			prevent : true
		}
	},
	methods : {
		
	},
	computed : {
		
	}
}
</script>

<style>
	/*首页轮播图*/
	.index_swipe {
		width: 100%;
		height: 200px;
	}
	.index_swipe .slide1 {
		
	}
	.index_swipe .slide2 {
	
	}
	.index_swipe .slide3 {
		
	}
</style>
