<!-- 侧栏组件 -->
<template>
	<div id="home" class="app">
		<!-- 顶部 -->
		<router-view name="index_header"></router-view>

		<!-- 轮播图 -->
		<router-view name="index_swipe"></router-view>

		<!-- 文章主体 -->
		<router-view name="index_main"></router-view>

		<!-- 侧栏框 -->
		<router-view name="slide"></router-view>
	</div>
</template>

<script>
import Vue from 'vue'


export default {
	name: 'home',
	data () {
		return {
			
		}
	},
	methods : {
		
	}
}
</script>

<style>
	
</style>
