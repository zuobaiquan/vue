<template>
	<div class="singer-info-view" v-show="!isHideModule">
		<div class="singer-info-banner" ref="singerInfoBanner">
			<img :src="singerInfo.img_url">
			<div class="banner-top-title" :class="{'blue-back' : isBlueBack}">		
					<div class="back" @click="goBack">
						<i class="back-icon"></i>
					</div>
				<p>{{singerInfo.name}}</p>
			</div>
		</div>
		<div class="intro-desc" :class="{'open-desc' : isOpenDesc}">
			<p>{{singerInfo.intro}}</p>
			<i class="desc-icon" @click="toggleDesc" :class="{'down-icon' : isOpenDesc,'up-icon' : !isOpenDesc}"></i>
		</div>
		<div class="singer-info-list" :class="{pdBtm:!isHideBox}">
			<ul class="singer-list-ul">
				<template v-for="(songs,index) in tempList">
					<li @click="listen(index,songs.song_id)" :data-index="index">
						<div class="item-middle-content">
							<span class="songs-info">
								{{songs.author}} - {{songs.title}}
							</span>
						</div>
						<div class="item-right-download">
							<i class="download-icon"></i>
						</div>
					</li>
				</template>
			</ul>
			<div v-show="isload" class="singer-info-loading">加載中<span>{{dot}}</span></div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui'
import BottomMusicBox from '../components/BottomMusicBox'
import { mapState,mapActions } from 'vuex'

export default {
	name: 'singer-info-view',
	components: { BottomMusicBox },
	data () {
		return {
			isBlueBack: false,
			isOpenDesc: false,
			artistId: this.$route.params.artistId,
			tempList: [],
			isload: false,
			dot: '.'
		}
	},
	computed: {
		...mapState({
			singerInfo: state => state.singer.singerInfo,
			songlist: state => state.singer.songlist,
			havemore: state => state.singer.havemore,
			offset: state => state.singer.offset,
			updateIndex: state => state.newlist.updateIndex,
			isHideBox: state => state.musicbox.isHideBox,
			isHideModule: state => state.panel.isHideModule
		})
	},
	methods: {
		...mapActions([
			'getSingerInfo',
			'getSingerSongs'
			]),
		listen (index,songId){
			this.$store.commit({
				type: 'updateIndex',
				updateIndex: index,
				baiduSongId: songId
			})
			this.$store.commit({
				type: 'listenMusic',
				songsData: this.tempList,
				boxType: 'common',
				isOpenBox: true,
				isHideBox: false
			})
		},
		goBack () {
			history.go(-1);
		},
		toggleDesc () {
			this.isOpenDesc = !this.isOpenDesc;
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

			if(scrollTop > this.$refs.singerInfoBanner.clientHeight){
				this.isBlueBack = true;
			}else{
				this.isBlueBack = false;
			}

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
							self.getSingerSongs({
								offset: self.offset + 30,
								artistId: self.artistId
							});
						},2000);

					}
				}
			}
		}
	},
	watch: {
		songlist: function(newVal,oldVal){
			//console.log(newVal);
			this.tempList = this.tempList.concat(newVal);
			this.isload = false;
		}
	},
	created () {
		Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
        this.isload = false;
        this.initLoadingDot();
		this.getSingerInfo({
			artistId: this.artistId
		})
		this.getSingerSongs({
			artistId: this.artistId,
			offset: 0
		})
		$(window).scroll(this.scrollEvt);
	},
	destroyed () {
		$(window).off('scroll',this.scrollEvt);
	}
}	

</script>


<style lang="scss" scoped>
.singer-info-view{
	padding-top: 1rem;

	.singer-info-banner{
		height: 4rem;
		position: relative;
		overflow: hidden;

		img{
			position: absolute;
			width: 100%;
			top: 0;
			left: 0;
		}

		.banner-top-title{
			position: fixed;
			top: 1rem;
			left: 0;
			height: 1rem;
			width: 100%;
			background: -webkit-linear-gradient(top,rgba(0,0,0,.6),transparent);
			z-index: 200;

			div.back{
				width: .7rem;
				height: 1rem;
				display: inline-block;
				position: absolute;

				i.back-icon{
					position: absolute;
					width: .28rem;
					height:.45rem;
					left:.2rem;
					top: .25rem;
					display: inline-block;
					background-image: url(../assets/images/goback_1.png);
					background-size: 100% 100%;
					background-position: 50% 0;
					background-repeat: no-repeat;
				}
			}

			p{
				text-align: center;
				color: #fff;
				font-size: .32rem;
				line-height: 1rem;
			}
		}

		.blue-back{
			background: #2ca2f9;
		}

	}
	.intro-desc{
		width: 100%;
		height: .95rem;
		min-height: .95rem;
		overflow: hidden;
		position: relative;
		font-size: .3rem;

		p{
			padding: .1rem .8rem .1rem .5rem;
		}

		i.desc-icon{
			position: absolute;
			width: .45rem;
			height: .45rem;
			display: inline-block;
			top: .25rem;
			right: .2rem;
			background-position: 50% 0;
			background-size: 100% 100%;
			background-repeat: no-repeat;
		}
		i.up-icon{
			background-image: url(../assets/images/close_icon.png);
		}
		i.down-icon{
			background-image: url(../assets/images/open_icon.png);
		}
	}

	.open-desc {
		height: auto;
	}

	.singer-info-list{
		width: 100%;
		background: #f7f7f7;
		padding-top: .05rem;

		.singer-list-ul{
			padding-left: .2rem;
			background: #fff;

			li{
				height: 1.3rem;
				width: 100%;
				border-bottom: 1px solid #e5e5e5;
				position: relative;
				display: table;

				div.item-left-order{
					position: absolute;
					vertical-align: middle;
					width: .7rem;
					height: 1.3rem;
					top: 0;
					left: .05rem;

					span.num{
						display: inline-block;
						padding-left: .2rem;
						color: #999;
						height: .4rem;
						line-height: .4rem;
						margin-top: .45rem;
					}
					span.top{
						display: inline-block;
						padding: 0 .2rem;
						color: #fff;
						border-radius: .2rem;
					}
					span.top1{
						background: #e80000;
					}
					span.top2{
						background: #ff7200;
					}
					span.top3{
						background: #f8b300;
					}

				}

				div.item-middle-content{
					display: table;
					width: 5rem;
					vertical-align: middle;
					padding-left: .2rem;

					span.songs-info{
						height: 1.3rem;
						display: inline-block;
						width: 100%;
						font-size: .32rem;
						display: table-cell;
						vertical-align: middle;
					}
				}
				div.item-right-download{
					position: absolute;
					width: 1rem;
					height: 1.3rem;
					top: 0;
					right:.2rem;
					vertical-align: middle;

					i.download-icon{
						width: .4rem;
						height: .4rem;
						position: absolute;
						left: .3rem;
						top: .45rem;
						display: inline-block;
						background-image: url(../assets/images/download_icon_2.png);
						background-size: 100%  100%;
						background-position: 50% 0;
						background-repeat: no-repeat;
					}
				}
			}
		}
	}
	.singer-info-list.pdBtm{
		padding-bottom: 1.5rem;
	}

	.singer-info-loading{
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		background: #fff;
	}
} 	

</style>