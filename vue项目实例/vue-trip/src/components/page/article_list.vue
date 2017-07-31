<!-- 文章列表组件 -->
<template>
	<div id="article_list" class="app">
		<!-- 返回导航条 -->
		<router-view 
			name="backup_header" 
			:title="title"
			:is_fixed="is_fixed"
		></router-view>

		<!-- 搜索组件 -->
		<mt-search 
			v-model="keyWord"
			:autofocus="autofocus"
			:show="show"
			placeholder="请输入文章关键字"
			@keyup.enter.native="searchFn"
			class="search_bar"
		></mt-search>

		<!-- 文章列表 -->
		<router-view name="article_main"></router-view>
	</div>
</template>

<script>
import Vue from 'vue'

export default {
	name: 'article_list',
	data () {
		return {
			
			//返回导航条
			title :'请输入文章关键字',
			is_fixed : true,
			keyWord : '',
			show : false,
			autofocus : false,
		}
	},
	methods : {
		//根据关键字搜索文章
		searchFn(){
			this.$store.commit({
				type : 'changeRefreshName',
				refreshName : this.$route.path,
				params : {
					keyWord : this.keyWord
				}
			})
		},
	}
}
</script>

<style>
	/*解决滚动问题*/
	#article_list .mint-searchbar {
		width: 100vw;
		position: absolute;
		top: 40px;
		left : 0;
	}

	#article_list .search_bar {
		height: 52px;
	}
</style>
