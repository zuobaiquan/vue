<!-- 顶部导航组件 -->
<template>
	<div id="weather_form" class="">
		<div class="form">
			<mt-field label="热点" placeholder="请输入关键字" class="input" v-model="value"></mt-field>
			<mt-button type="primary" class="search" @click.native="openHotPage(value)">搜索</mt-button>
		</div>
		<div class="hot_search">

			<div class="btn" v-for="(value,index) in hotSearchList" :key="index">
				<mt-button type="primary" class="btn" @click.native="openHotPage(value.msg)" size="small">
					<img :src="value.src" height="14" width="14" slot="icon">
					{{value.msg}}
				</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'


//引入资源
import png_view from '../../assets/img/hot/view.png'
import png_stay from '../../assets/img/hot/stay.png'
import png_metro from '../../assets/img/hot/metro.png'
import png_food from '../../assets/img/hot/food.png'
import png_shop from '../../assets/img/hot/shop.png'
import png_play from '../../assets/img/hot/play.png'
export default {
	name: 'weather_form',
	props : ['cityname'],
	data () {
		return {
			hotSearchList : [
				{
					src : png_view,
					msg : '风景'
				},
				{
					src : png_stay,
					msg : '住宿'
				},
				{
					src : png_metro,
					msg : '地铁'
				},
				{
					src : png_food,
					msg : '美食'
				},
				{
					src : png_shop,
					msg : '购物'
				},
				{
					src : png_play,
					msg : '娱乐'
				}
			],
			value : ''
		}
	},
	
	methods : {
		openHotPage(keyWord){
			//改变动画
			this.$store.commit({
				type : 'changeAnimate',
				mode : 'normal'
			})
			this.$router.push({
				path : '/hot_point' , 
				query : {
					keyWord : keyWord,
					cityName : this.cityname
				}
			});
		}
	}
}
</script>

<style>
	/*表单部分*/
	#weather_form .form {
		width: 95%;
		display: flex;
		margin: 0 auto;
	}
	/*修改整个输入框*/
	#weather_form .form .mint-cell.mint-cell{
		font-size: 14px;
		min-height: 30px !important;
		flex-basis : 80%;
	}
	/*修改输入框左边文字的长度*/
	#weather_form .form .mint-cell-title {
		font-size: 14px;
		width: 20% !important;
	}
	#weather_form .form .search{
		flex : 1;
		font-size: 14px;
		height : 30px;
	}

	#weather_form .hot_search {
		width: 100%;
		display: flex;
		flex-wrap : wrap;
		margin-top: 5px;
		justify-content : space-around;
	}
	#weather_form .hot_search .btn {
		margin-top: 3px;
	}
	#weather_form .hot_search .btn .btn {
		font-size: 14px;
		background: #000;
	}
</style>
