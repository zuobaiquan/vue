<!-- 天气搜索组件 -->
<template>
	<div id="weather_search" class="app">
		<!-- 返回导航条 -->
		<router-view 
			name="backup_header" 
			:title="title"
			:is_fixed="is_fixed"
		></router-view>

		<!-- 搜索组件 -->
		<mt-search 
			v-model="cityName"
			:autofocus="autofocus"
			:show="show"
			placeholder="请输入城市名"
			@keyup.enter.native="searchFn"
			class="search_bar"
		>
			<div class="search_list">
				<mt-cell
					v-for="item in cityList"
					:title="item.name_cn"
					:value="item.name_en"
					@click.native="openWeather(item.name_cn)"
				>
				</mt-cell>
			</div>
		</mt-search>
		{{calcRefresh}}
	</div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Indicator } from 'mint-ui';

Vue.component('mt-cell', Cell);
Vue.component('mt-search', Search);

export default {
	name: 'weather_search',
	data () {
		return {
			cityName : '',
			cityList : [
				{
					name_cn : '北京',
					name_en : 'beijing'
				},
				{
					name_cn : '上海',
					name_en : 'shanghai'
				},
				{
					name_cn : '广州',
					name_en : 'guangzhou'
				},
			],
			show : true,
			autofocus : false,
			//返回导航条
			title :'请输入城市名',
			is_fixed : true
		}
	},
	computed : {
		calcRefresh(newVal,oldVal){
			if(this.$store.state.refreshName == '/weather_search'){
				console.log('执行刷新')
				this.$store.commit({
					type : 'changeRefreshName',
					refreshName :''
				})
				this.searchFn()
			}
			return ''
		}
	},
	methods : {
		//根据城市搜索区
		searchFn(){
			this.$store.dispatch({
				type : 'getData',
				url : 'http://vue-trip.wenye123.com/api/city_name.php',
				callBack :(data)=>{
					if( data.errNum==0 && data.errMsg=='success'){
						this.cityList = data.retData;
					}
				}
			})
		},
		openWeather(cityName){
			//改变动画
			this.$store.commit({
				type : 'changeAnimate',
				mode : 'normal'
			})
			this.$router.push({
				path : '/weather' , 
				query : {
					cityName : cityName
				}
			});
		}
	},
	
}
</script>

<style>
	/*解决滚动问题*/
	#weather_search .mint-searchbar {
		width: 100vw;
		position: absolute;
		top: 40px;
		left : 0;
	}

	#weather_search .search_bar {
		height: 50vh;
	}
	#weather_search .search_list {
		margin-top: 45px;
	}
</style>
