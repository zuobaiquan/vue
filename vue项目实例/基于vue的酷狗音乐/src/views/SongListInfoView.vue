<template>
	<div class="songlist-info-view" v-show="!isHideModule">
		<div class="songlist-info-banner" ref="listBanner">
			<img :src="currentMenuInfo.pic_w300">
			<div class="banner-top-title" :class="{'blue-back' : isBlueBack}">
				<router-link :to="{name: 'SongListView'}">
					<div class="back">
						<i class="back-icon"></i>
					</div>
				</router-link>
				<p>{{currentMenuInfo.title}}</p>
			</div>
		</div>
		<div class="menu-desc" :class="{'open-desc' : isOpenDesc}">
			<p>{{currentMenuInfo.desc}}</p>
			<i class="desc-icon" @click="toggleDesc" :class="{'down-icon' : isOpenDesc,'up-icon' : !isOpenDesc}"></i>
		</div>
		<div class="songlist" :class="{pdBtm:!isHideBox}">
			<ul class="songlist-ul">
				<template v-for="(songs,index) in songsInfoArr">
					<li>
						<span @click="listen(index,songs.song_id)" class="song-name">{{songs.author}} - {{songs.title}}</span>
						<span class="download-wrap"><i class="song-download"></i></span>
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui'
import BottomMusicBox from '../components/BottomMusicBox'
import { mapState,mapActions } from 'vuex'

export default {
	name: 'songlist-info-view',
	components: { BottomMusicBox },
	data () {
		return {
			menuIndex: this.$route.params.menuIndex,
			isBlueBack: false,
			isOpenDesc: false,
			currentMenuInfo: {},
			songIds: [],
			songsInfoArr : []
		}
	},
	computed: {
		...mapState({
			menuInfoList: state => state.songMenu.songsMenu,
			isHideBox: state => state.musicbox.isHideBox,
			isHideModule: state => state.panel.isHideModule
		})
	},
	methods: {
		...mapActions([
			'getSongsMenu'
			]),
		listen (index,songId) {
			this.$store.commit({
				type: 'updateIndex',
				updateIndex: index,
				baiduSongId: songId
			})
			this.$store.commit({
				type: 'listenMusic',
				songsData: this.songsInfoArr,
				boxType: 'common',
				isOpenBox: true,
				isHideBox: false
			})
		},
		toggleDesc () {
			this.isOpenDesc = !this.isOpenDesc;
		},
		getSongsInfoList () {
			var self = this;
			function getMenuList(){
				return	new Promise((resolve,reject) => {
					Vue.http.jsonp('http://musicapi.qianqian.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.diy.gedan&format=jsonp&page_no=1&page_size=10&query=全部')
							.then(res => {
								if(res.status == 200){
									self.currentMenuInfo = res.body.content[self.menuIndex];
									self.songIds = self.currentMenuInfo.songIds;
									resolve();
								}
							})
				})
			}

			function getInfoByIds(arr){
				return new Promise((resolve,reject) => {
						for(var i=0;i<arr.length;i++) {
							Vue.http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid='+arr[i])
								.then(res => {
									if(res.status === 200) {
										self.songsInfoArr.push(res.body.songinfo);
										
									}
								})
						}
					})

				}

				getMenuList().then(() => {
					getInfoByIds(this.songIds);
					Indicator.close();
				})
		},
		scrollEvt (){
			
			var self = this;
			var scrollTop = document.body.scrollTop;
			var scrollHeight = document.body.scrollHeight;
			var clientHeight = document.body.clientHeight;

			if(scrollTop > this.$refs.listBanner.clientHeight){
				this.isBlueBack = true;
			}else{
				this.isBlueBack = false;
			}

		}

	},
	created () {
		Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
		this.getSongsInfoList();
		$(window).scroll(this.scrollEvt);
	},
	destroyed () {
		$(window).off('scroll',this.scrollEvt);
		Indicator.close();
	}
}

</script>

<style lang="scss" scoped="">
.songlist-info-view{
	width: 100%;
	padding-top: 1rem;

	.songlist-info-banner{
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

	.menu-desc{
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

	.pdBtm{
		padding-bottom: 1.5rem;
	}

	.songlist{
		width: 100%;
		background: #f7f7f7;
		padding-top: .05rem;

		ul.songlist-ul{
			background: #fff;

			li{
				width: 90%;
				height: 1.2rem;
				border-bottom: 1px solid #e5e5e5;
				position: relative;
				margin: 0 auto;
				cursor: pointer;
				outline: none;
				-webkit-tap-highlight-color:rgba(0,0,0,0);

				span.song-name{
					font-size: .3rem;
					display: inline-block;
					width: 80%;
					line-height: 1.2rem;
					padding-left: .2rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				span.download-wrap{
					width: 20%;
					height: 1.2rem;
					display: inline-block;
					position: absolute;
					right: -5%;
				}

				i.song-download{
					width: .4rem;
					height: .4rem;
					display: inline-block;
					position: absolute;
					top: .4rem;
					right: .5rem;
					background-image: url(../assets/images/download_icon_2.png);
					background-repeat: no-repeat;
					background-position: 50% 0;
					background-size: 100% 100%;
				}
			}
		}
	}
}	
</style>