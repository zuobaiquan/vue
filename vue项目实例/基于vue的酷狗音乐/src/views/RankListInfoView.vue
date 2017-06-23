<template>
	<div class="ranklist-info-view" v-show="!isHideModule">
		<div class="ranklist-info-banner" ref="rankBanner">
			<img :src="ranklists[typeIndex].imgUrl">
			<div class="banner-top-title" :class="{'blue-back' : isBlueBack}">
				<router-link :to="{name: 'RankListView'}">
					<div class="back">
						<i class="back-icon"></i>
					</div>
				</router-link>
				<p>{{rankInfo.name}}</p>
			</div>
			<div class="banner-bottom-time">
				<p>上次更新時間：{{rankInfo.update_date}}</p>
			</div>
		</div>
		<div class="rank-list" :class="{pdBtm:!isHideBox}">
			<ul class="rank-list-ul">
				<template v-for="(songs,index) in tempList">
					<li @click="listen(index,songs.song_id)" :data-index="index">
						<div class="item-left-order">
							<span class="num" :class="{'top1' : index === 0,'top2' : index === 1, 'top3' : index=== 2, 'top' : index < 3 }">{{index+1}}</span>
						</div>
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
			<div v-show="isload" class="rank-loading">加載中<span>{{dot}}</span></div>
		</div>
		
	</div>
</template>

<script>
import BottomMusicBox from '../components/BottomMusicBox'
import { Indicator } from 'mint-ui'
import { mapState,mapGetters,mapActions } from 'vuex'

export default {
	name:'ranklist-info-view',
	components: { BottomMusicBox },
	data() {
		return {
			open: false,
			typeId: this.$route.params.typeId,
			typeIndex: this.$route.params.index,
			isload: false,
			dot: '.',
			tempList: [],
			boxType: 'common',
			isBlueBack: false
		}
	},
	computed: {
		...mapState({
			offset : state => state.rankInfo.offset,
			rankInfo : state => state.rankInfo.rankInfo,
			songsList : state => state.rankInfo.songsList,
			ranklists: state => state.ranklist.ranklists,
			updateIndex: state => state.newlist.updateIndex,
			isHideBox: state => state.musicbox.isHideBox,
			isHideModule: state => state.panel.isHideModule
		}),
		...mapGetters([
			'songNum'
			])
	},
	methods: {
		...mapActions([
			'getRankInfo'
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
			var currentNum = $('.rank-list-ul').find('li').length;	
			currentNum == this.songNum ? (isComplete = true) : isComplete;
			return isComplete;
		},
		scrollEvt (){
			
			var self = this;
			var scrollTop = document.body.scrollTop;
			var scrollHeight = document.body.scrollHeight;
			var clientHeight = document.body.clientHeight;

			if(scrollTop > this.$refs.rankBanner.clientHeight){
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
							self.getRankInfo({
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
		songsList: function(newVal,oldVal){
			//console.log(newVal);
			this.tempList = this.tempList.concat(newVal);
			this.isload = false;
		}
	},
	created() {
		Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
		this.isload = false;
		this.getRankInfo({
			offset: this.offset,
			typeId: this.typeId
		})
		this.initLoadingDot();
		$(window).scroll(this.scrollEvt);
	},
	destroyed () {
		$(window).off('scroll',this.scrollEvt);
		this.$store.commit({
			type : 'updateOffset',
			offset : 0
		})
	}
}
	
</script>


<style lang="scss" scoped>
.ranklist-info-view{
	width: 100%;
	padding-top: 1rem;

	.ranklist-info-banner{
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

		.banner-bottom-time{
			position: absolute;
			width: 100%;
			height: .8rem;
			bottom: 0;
			left: 0;
			background: -webkit-linear-gradient(bottom,rgba(0,0,0,.6),transparent);

			p{
				color:#fff;
				line-height: .8rem;
				padding-left:.2rem;
			}
		}
	}

	.rank-list{
		width: 100%;

		.rank-list-ul{
			padding-left: .2rem;
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
					margin-left: .7rem;
					vertical-align: middle;
					padding-left: .3rem;

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
	.rank-list.pdBtm{
		padding-bottom: 1.5rem;
	}

	.rank-loading{
		height: .8rem;
		line-height: .8rem;
		text-align: center;
	}
}
</style>