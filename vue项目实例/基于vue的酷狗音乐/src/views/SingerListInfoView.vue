<template>
	<div class="singerlist-info-view" v-show="!isHideModule">
		<div class="type-title">
				<span class="go-back" @click="goBack"><i></i></span>
			<span v-if="typeId == 0">热门歌手</span><span v-else>{{singerList.title}}</span>
		</div>
		<div class="singer-list-container" :class="{pdBtm:!isHideBox}">
			<ul v-if="typeId == 0" class="singer-list-ul">
				<template v-for="singer in tempList">
					<li>
						<router-link :to="{name: 'SingerInfoView',params: {artistId: singer.ting_uid}}">
							<img v-lazy="singer.avatar_middle">
							<span class="singer-name">{{singer.name}}</span>
						</router-link>
					</li>
				</template>
			</ul>
			<ul v-else class="singer-list-ul">
				<template v-for="singer in singerList.singer_list">
					<li>
						<router-link :to="{name: 'SingerInfoView',params: {artistId: singer.singer_id}}">
							<img v-lazy="singer.img_url">
							<span class="singer-name">{{singer.singer_name}}</span>
						</router-link>
					</li>
				</template>
			</ul>
			<div v-show="isload" class="singer-loading">加載中<span>{{dot}}</span></div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui'
import BottomMusicBox from '../components/BottomMusicBox'
import { mapState,mapActions } from 'vuex'

import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
	preLoad: 1.3,
	error: require('../assets/images/default.png'),
	loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
	attempt: 1,
	listenEvents: [ 'scroll', 'mousewheel' ]
})

export default {
	name: 'singerlist-info-view',
	components: { BottomMusicBox },
	data () {
		return {
			typeId: this.$route.params.typeId,
			dot: '.',
			isload: false,
			tempList: []
		}
	},
	computed: {
		...mapState({
			singerList: state => state.singer.singer_list,
			hotList: state => state.singer.hot_list,
			isHideBox: state => state.musicbox.isHideBox,
			havemore: state => state.singer.havemore,
			offset: state => state.singer.offset,
			isHideModule: state => state.panel.isHideModule
		})
	},
	methods: {
		...mapActions([
			'getSingerList'
			]),
		goBack () {
			history.go(-1);
		},
		initLoadingDot (){
			var self = this;
			if(window.dotTimer){
				clearInterval(window.dotTimer);
			}
			window.dotTimer = setInterval(function(){
				if(self.dot.length < 3){
					self.dot = self.dot + '.';
				}else{
					self.dot = '.';
				}
			},800);
		},
		isLoadComplete (){
			var isComplete = false;
			if(!this.havemore){
				isComplete = true;
			}
			return isComplete;
		},
		scrollEvt (){
			
			var self = this;
			var scrollTop = document.body.scrollTop;
			var scrollHeight = document.body.scrollHeight;
			var clientHeight = document.body.clientHeight;

			var timer = null;
			if(!this.isload){
				if(scrollTop + clientHeight == scrollHeight){
					//console.log(this.isLoadComplete());
					if(!this.isLoadComplete()){
						this.isload = true;
						if(timer){
							clearTimeout(timer);
						}
						timer = setTimeout(function(){
							self.getSingerList({
								offset: self.offset + 20,
								typeId: self.typeId
							});
						},2000);

					}
				}
			}
		}
	},
	watch: {
		hotList: function(newVal,oldVal){
			//console.log(newVal);
			this.tempList = this.tempList.concat(newVal);
			this.isload = false;
		}
	},
	created () {
		if(this.typeId == 0) {
			Indicator.open({
	          text: '加载中...',
	          spinnerType: 'snake'
	        });
			$(window).scroll(this.scrollEvt);
		}
		this.isload = false;
		this.initLoadingDot();
		this.getSingerList({
			offset: 0,
			typeId: this.typeId
		});

	},
	destroyed () {
		$(window).off('scroll',this.scrollEvt);
		Indicator.close();
	}

}	
</script>

<style lang="scss" scoped>
.singerlist-info-view {
	padding-top: 1rem;

	.type-title {
		height: 1rem;
		width: 100%;
		background: #fff;
		text-align: center;
		line-height: 1rem;
		font-size: .32rem;
		position: fixed;
		z-index: 200;

		.go-back{
			width: 1rem;
			height: 100%;
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;

			i{
				width: .28rem;
				height: .46rem;
				display: inline-block;
				background-image: url(../assets/images/goback.png);
				background-position: 50% 0;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				margin-left: .2rem;
				margin-top: .27rem;
			}
		}
	}
	.pdBtm{
		padding-bottom: 1.5rem;
	}
	.singer-list-container{
		width: 100%;
		background: #f7f7f7;
		padding-top: 1.05rem;

		ul{
			width: 100%;
			height: auto;
			padding-left: .2rem;
			background: #fff;

			li{
				width: 100%;
				height: 1.5rem;
				border-bottom: 1px solid #e5e5e5;
				position: relative;

				a{
					position: absolute;
					display: inline-block;
					width: 100%;
					height: 100%;
					top:0;
					left: 0;
				}

				img{
					position: absolute;
					display: inline-block;
					width: 1.2rem;
					height: 1.2rem;
					top: .15rem;
					left: 0;
				}

				span.singer-name{
					display: inline-block;
					width: 100%;
					line-height: 1.5rem;
					font-size: .32rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					padding-left: 1.4rem;
				}
			}
		}
		.singer-loading{
			height: .8rem;
			line-height: .8rem;
			text-align: center;
			background: #fff;
		}
	}
}
</style>