<!--文章组件 -->
<template>
	<div id="article" class="app">
		<!-- 返回导航条 -->
		<router-view 
			name="backup_header" 
			:title="title"
			:is_fixed="is_fixed"
			:component_name="article"
		></router-view>

		<div ref="article" class="article"></div>
		{{calcRefresh}}
	</div>
</template>

<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui';

export default {
	name: 'article',
	//加载文章
	created : function(){
		this.createdGetData()
	},
	data () {
		return {
			url : this.$route.query.articleUrl,
			//返回导航条
			title : this.$route.query.articleTitle,
			is_fixed : true
		}
	},
	computed : {
		calcRefresh(newVal,oldVal){
			if(this.$store.state.refreshName == '/article'){
				console.log('执行刷新')
				this.$store.commit({
					type : 'changeRefreshName',
					refreshName :''
				})
				this.createdGetData()
			}
			return ''
		}
	},
	methods : {
		createdGetData(){
			this.$http.get('http://vue-trip.wenye123.com/api/article.php',{
				params : {
					url : this.url
				},
				timeout : 3000,
				before : function(){
					//打开加载数据框
					Indicator.open({
						text : '加载中....',
						spinnerType : 'triple-bounce'
					});
				}
			}).then(function(response){
				//关闭加载数据框
				Indicator.close();
				if(response.ok){
					this.$refs.article.innerHTML = response.body;
				} else {
					alert('获取文章出错');
				}
			},function(response){
				console.log(response);
			}).catch(function(msg){
				alert('请求程序出错：'+msg);
			});
		}
	}
}
</script>

<style>
	#article img {
		max-width: 100%;
	}
</style>
