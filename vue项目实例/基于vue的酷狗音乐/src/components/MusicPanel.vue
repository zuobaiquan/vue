<template>
	<div class="music-panel" ref="musicPanel">
		<div class="bg-img" :style="{'background-image' : 'url('+initImg(panelInfo.imgUrl)+')'}"></div>
		<div class="bg-img blur" :style="{'background-image' : 'url('+initImg(panelInfo.imgUrl)+')'}"></div>
<!-- 		<img class="bg-img" :src="initImg(panelInfo.imgUrl)">
		<img class="bg-img blur" :src="initImg(panelInfo.imgUrl)"  ref="bgImg"> -->
		<div class="mask"></div>
		<div class="type-title">
			<div class="back" @click="closePanel" ><i class="back-icon"></i></div>
			<p>{{panelInfo.singerName}} - {{panelInfo.songName}}</p>
		</div>
		<div class="author-pic">
			<img :src="initImg(panelInfo.imgUrl)">
		</div>
		<div class="music-info">
			<div class="music-lyric" :style="{'margin-top': (returnCurrentIndex(mediaCurrentTime) * -0.6)+0.6 +'rem' }">
				<template v-for="(value,key,index) in lyricData">
					<p :class="{'isCurrent': key == returnCurrentKey(mediaCurrentTime)}">{{value}}</p>
				</template>
			</div>
		</div>
		<div class="progress-container">
			<span class="current-time">{{mediaCurrentTime | time}}</span>
			<span class="progress-bar" ref="progressBar">
				<mt-range
				  v-model="mediaCurrentTime"
				  :min="0"
				  :max="mediaDuration"
				  :bar-height="2"
				  @click.native = "changeRange($event)"
				  >
				</mt-range>
			</span>
			<span class="total-time">{{mediaDuration | time}}</span>
		</div>
		<div class="palyerbtn-group">
			<span @click="prevSong" class="prev"></span>
			<span @click="togglePlayStatus" :class="{'play': isPlay, 'pause' : !isPlay}"></span>
			<span @click="nextSong" class="next"></span>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { mapState,mapActions } from 'vuex'
import lyricHelper from '../assets/js/lyricHelper'
import { Range } from 'mint-ui'

export default {
	name: 'music-panel',
	components: ['Range'],
	data () {
		return {
			offsetTop: 0,
			isPlay: true
		}
	},
	computed: {
		...mapState({
			panelInfo: state => state.panel.panelInfo,
			lyricData: state => state.panel.lyricData,
			audioInfo: state => state.musicbox.audioInfo,
			boxType: state=> state.musicbox.boxType,
			songsData: state => state.musicbox.songsData,

			updateIndex : state => state.newlist.updateIndex,
			baiduSongId : state => state.newlist.baiduSongId,
			songsHash : state => state.newlist.songsHash,
			songsInfo : state => state.newlist.songsInfo,

			searchCurrentHash: state => state.search.currentHash,
			searchUpdateIndex: state => state.search.updateIndex,
			searchSongsInfo: state => state.search.songsInfo,
		}),
		mediaCurrentTime: function(){
			return this.audioInfo.mediaCurrentTime;
		},
		mediaDuration: function(){
			return this.audioInfo.mediaDuration;
		},
		currentMedia: function(){
			return this.audioInfo.media;
		},
		songsHash: function(){
			return this.panelInfo.hash;
		},
		searchTotalNum () {
			return this.songsData.length
		},
		totalNum () {
			return this.songsData.length
		}
	},
	filters: {
	  time(value){
	    var length = Math.floor(parseInt(value));
	    var minute = Math.floor(value / 60);
	    if (minute < 10) {
	      minute = '0' + minute;
	    }
	    var second = length % 60;
	    if (second < 10) {
	      second = '0' + second;
	    }
	    return minute + ':' + second;
	  }
	},
	methods: {
		...mapActions([
			'getLyricData'
			]),
		initImg (url) {
			var extStr = '{size}';
			var imgUrl = '';
			if(url.indexOf(extStr) != -1){
				imgUrl = url.replace(extStr,400);
			}else{
				imgUrl = url;
			}
			return imgUrl;
		},
		closePanel () {
			this.$store.commit({
				type: 'closePanel',
				isShowPanel: false,
				isHideModule: false
			})
		},
		pauseAudio: function(){
			this.$store.commit({
				type: 'updateAudioStatus',
				audioPlay: false,
				isContinue : true
			})
		},
		playAudio: function(){
			this.$store.commit({
				type:'updateAudioStatus',
				audioPlay: true,
				isContinue: true
			})
		},
		returnCurrentKey (time) {
			if(this.lyricData){
				var keyArr = Object.keys(this.lyricData);
				var lastKey = keyArr[keyArr.length -1];
				if(Math.round(time) > lastKey) {
					return lastKey;
				}else{
					var currentIndex;
					for(var key in this.lyricData) {
						if(key > Math.round(time)) {
							currentIndex = keyArr.indexOf(key);
							if(currentIndex == 0) {
								return key;
							}else{
								return keyArr[currentIndex - 1];
							}
						}
					}
				}
			}


		},
		returnCurrentIndex (time) {
			if(this.lyricData){
					var keyArr = Object.keys(this.lyricData);
					var lastKey = keyArr[keyArr.length -1];
					if(Math.round(time) > lastKey) {
						return keyArr.length-1;
					}else{
						var currentIndex;
						for(var key in this.lyricData) {
							if(key > Math.round(time)) {
								currentIndex = keyArr.indexOf(key);
								if(currentIndex == 0 || currentIndex == 1) {
									return 1;  //前一行不上移
								}else{
									return currentIndex - 1;
								}
							}
						}
					}
				}
			},
		togglePlayStatus () {
			if(this.isPlay) {
				this.pauseAudio();
			}else{
				this.playAudio();
			}
			this.isPlay = !this.isPlay;
		},
		changeRange (event) {
			var offset = event.offsetX;
			//console.log(offset);
			var rangeWidth = document.documentElement.clientWidth * 0.7;
			var clickLength = Math.floor(offset * this.mediaDuration / rangeWidth);
			//console.log(clickLength);
			this.$store.commit({
				type: 'updateMediaTime',
				mediaCurrentTime: clickLength
			})
			this.$store.commit({
				type: 'updateMediaStatus',
				isChangeMedia: true
			})
		},
		nextSong () {
			
			if(this.boxType == 'search'){
				var currentTotal = this.searchTotalNum;
				var currentIndex = this.searchUpdateIndex;
				currentIndex == currentTotal-1 ? (currentIndex = 0):(currentIndex++);
				var currentHash = this.songsData[currentIndex].hash;

				this.$store.commit({
					type: 'updateSongsHash',
					currentHash: currentHash,
					updateIndex: currentIndex
				})
			}else if(this.boxType == 'common'){
				var song_index = this.updateIndex;
				song_index == this.totalNum-1 ? (song_index = 0) : (song_index++);
				var song_id = this.songsData[song_index].song_id;
				this.$store.commit({
					type: 'updateIndex',
					updateIndex: song_index,
					baiduSongId: song_id
				})
			}

		},
		prevSong () {
			if(this.boxType == 'search'){
				var currentTotal = this.searchTotalNum;
				var currentIndex = this.searchUpdateIndex;
				currentIndex == 0 ? (currentIndex = currentTotal-1):(currentIndex--);
				var currentHash = this.songsData[currentIndex].hash;

				this.$store.commit({
					type: 'updateSongsHash',
					currentHash: currentHash,
					updateIndex: currentIndex
				})
			}else if(this.boxType == 'common'){
				var song_index = this.updateIndex;
				song_index == 0 ? (this.totalNum-1) : (song_index--);
				var song_id = this.songsData[song_index].song_id;
				this.$store.commit({
					type: 'updateIndex',
					updateIndex: song_index,
					baiduSongId: song_id
				})
			}
		}
	},
	watch: {
		songsHash: function(newVal,oldVal){
			this.getLyricData({
				hash: newVal
			});
		}
	},
	created () {
		this.$store.commit({
			type: 'updateModuleStatus',
			isHideModule: true
		})
		this.getLyricData({
			hash: this.panelInfo.hash
		});
	}

}	
</script>

<style lang="scss" scoped>
.music-panel{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 888;
	color: #fff;
	padding-top: 1rem;

	.bg-img{
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 888;
		background-size: cover;
		background-position: 50%;
		background-repeat: no-repeat;
	}
	.bg-img.blur{
		filter: blur(.1rem);
	}
	.mask{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0,0,0,.6);
		z-index: 900;
	}
	.type-title {
		position: fixed;
		top: 1rem;
		left: 0;
		height: 1rem;
		width: 100%;
		z-index: 999;

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
	.author-pic{
		position: relative;
		z-index: 999;
		width: 3.4rem;
		height: 3.4rem;
		background: #fff;
		left: 50%;
		margin-left: -1.7rem;
		margin-top: 1.5rem;
		img{
			width: 100%;
		}
	}
	.music-info{
		text-align: center;
		height: 1.2rem;
		width: 100%;
		overflow: hidden;
		position: relative;
		z-index: 999;
		padding-top: .1rem;
		margin-top: .2rem;

		.music-lyric{
			transition: all .5s;
			transform: translateZ(0);
		}

		p{
			line-height: .6rem;
			height: .6rem;
			overflow-x: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		p.isCurrent{
			color: #d1c90e;
		}
		p.disCurrent{
			color: #afabac;
		}
	}
	.progress-container{
		width: 100%;
		position: relative;
		z-index: 999;
		text-align: center;

		span.current-time,span.total-time{
			display: inline-block;
			width: 13%;
			height: 1rem;
			vertical-align: middle;
			line-height: 1rem;
		}
		span.progress-bar{
			display: inline-block;
			width: 70%;
			height: 1rem;
			vertical-align: middle;
		}
	}
	.palyerbtn-group{
		width: 100%;
		position: relative;
		padding-top: .2rem;
		z-index: 999;
		text-align: center;

		span.prev,span.next{
			width: .85rem;
			height: .85rem;
			display: inline-block;
			background-size: 100% 100%;
			background-position: 0 50%;
			background-repeat: no-repeat;
			vertical-align: middle;
		}
		span.prev{
			background-image: url(../assets/images/play_prev.png);
		}
		span.next{
			background-image: url(../assets/images/play_next.png);
		}
		span.play,span.pause{
			width: 1.2rem;
			height: 1.2rem;
			display: inline-block;
			background-size: 100% 100%;
			background-position: 0 50%;
			background-repeat: no-repeat;
			margin: 0 .5rem;
			vertical-align: middle;
		}
		span.play{
			background-image: url(../assets/images/play_pause.png);
		}
		span.pause{
			background-image: url(../assets/images/play_play.png);
		}
	}
}	
</style>