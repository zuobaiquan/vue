<template>
	<div class="music-box-wrap" ref="boxWrap">
		<div class="music-box-switch" @click="toggleMusicBox" :class="{'animated switchDown' : isHideBox,'animated switchUp' : !isHideBox}">
			<i class="close-musicbox" :class="{'animated roate' : isHideBox,'animated roate2' : !isHideBox}"></i>
		</div>
		<div class="music-box"  :class="{'animated slideOutDown' : isHideBox,'animated slideInUp' : !isHideBox}">
			<div @click="showMusicPanel" class="music-box-left">
				<img :src="img_url" />
				<span class="song-name">{{tempSongsInfo.songName || ""}}</span>
				<span class="song-author">{{tempSongsInfo.choricSinger || ""}}</span>
			</div>
			<div class="music-box-right">
				<i v-if="audioPlay" @click="pauseAudio" class="pause-btn btn-icon"></i>
				<i v-else @click="playAudio" class="play-btn btn-icon"></i>
				<i @click="nextSong" class="next-btn btn-icon"></i>
				<i class="download-btn btn-icon"></i>
			</div>
			<audio v-on:ended="nextSong" v-on:timeupdate="audioUpdate" id="audioPlay" src=""  ref="audio"></audio>
		</div>
	</div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
import $ from 'expose-loader?!jquery'

export default {
	name: 'bottom-music-box',
	data () {
		return {
			img_url: null,
			tempSongsInfo: {}
		}
	},
	computed: {
		...mapState({
			songsData: state => state.musicbox.songsData,
			boxType: state=> state.musicbox.boxType,
			isChangeMedia: state => state.musicbox.isChangeMedia,
			audioInfo: state => state.musicbox.audioInfo,

			updateIndex : state => state.newlist.updateIndex,
			baiduSongId : state => state.newlist.baiduSongId,
			songsHash : state => state.newlist.songsHash,
			songsInfo : state => state.newlist.songsInfo,

			searchCurrentHash: state => state.search.currentHash,
			searchUpdateIndex: state => state.search.updateIndex,
			searchSongsInfo: state => state.search.songsInfo,

			audioPlay: state => state.search.audioPlay,
			isContinue: state => state.search.isContinue,
			isShowPanel: state => state.panel.isShowPanel,

			isOpenBox: state => state.musicbox.isOpenBox,
			isHideBox: state => state.musicbox.isHideBox
		}),
		searchTotalNum () {
			return this.songsData.length
		},
		totalNum () {
			return this.songsData.length
		}
	},
	methods: {
		...mapActions([
			'updateSongs',
			'showPanelInfo',
			'updateSongsByKeyword',
			'playSongs'
			]),
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
		nextSong: function(){
			
			if(this.boxType == 'search'){
				//console.log('search next...');
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
				//console.log('common next...');
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
		updateSong: function(currentIndex){
			
			var author = this.songsData[currentIndex].author;
			var songsName = this.songsData[currentIndex].title;
			
			this.updateSongsByKeyword({
				updateIndex: currentIndex,
				keyword: author+" "+songsName
			});

		},
		updateSearchSong: function(currentHash){
			var defaultImg = require('../assets/images/logo_kugou.png');
			//console.log('update...');
			this.$http.jsonp('http://tools.mobile.kugou.com/api/v1/singer_header/get_by_hash?hash='+currentHash+'&size=200&format=jsonp').then(res=>{
				this.img_url = res.body.url || defaultImg;
				//console.log(this.img_url);
			});

			this.updateSongs({
				currentHash: currentHash,
				audioPlay: true,
				isContinue: false
			});

		},
		showMusicPanel: function(){
			if(this.boxType == 'search'){
				this.showPanelInfo({
					isShowPanel: true,
					panelInfo: this.searchSongsInfo
				});
			}else if(this.boxType == 'common') {
				this.showPanelInfo({
					isShowPanel: true,
					panelInfo: this.songsInfo
				});
			}

		},
		toggleMusicBox: function(){

			this.$store.commit({
				type: 'isHideBox',
				isHideBox: !this.isHideBox
			})
			
		},
		audioUpdate: function(){
			if(this.isChangeMedia){
				this.$refs.audio.currentTime = this.audioInfo.mediaCurrentTime;
				this.$store.commit({
					type: 'updateMediaStatus',
					isChangeMedia: false
				})
			}else{
				var audioInfo = {
					media: this.$refs.audio,
					mediaCurrentTime: this.$refs.audio.currentTime,
					mediaDuration: this.$refs.audio.duration
				}
				this.$store.commit({
					type: 'updateMedia',
					audioInfo: audioInfo
				})
			}

		}
	},
	watch: {
		baiduSongId: function(newVal,oldVal){
			this.updateSong(this.updateIndex);
		},
		songsHash: function(newVal,oldVal){
			var defaultImg = require('../assets/images/logo_kugou.png');
			this.$http.jsonp('http://tools.mobile.kugou.com/api/v1/singer_header/get_by_hash?hash='+newVal+'&size=200&format=jsonp').then(res=>{
				this.img_url = res.body.url || defaultImg;
			});
			this.playSongs({
				songsHash: newVal,
				audioPlay: true
			});
		},
		songsInfo: function(newVal,oldVal){
			if(newVal){
				this.$store.commit({
					type: 'updatePanelInfo',
					panelInfo: newVal
				})
				this.tempSongsInfo = newVal;
				this.$refs.audio.currentTime = 0;
				this.$refs.audio.src = this.songsInfo.url;
				this.$refs.audio.play();
			}
		},
		searchCurrentHash: function(newVal,oldVal){
			this.updateSearchSong(newVal);
		},
		searchSongsInfo: function(newVal,oldVal){
			this.$store.commit({
				type: 'updatePanelInfo',
				panelInfo: newVal
			})
			this.tempSongsInfo = newVal;
			this.$refs.audio.currentTime = 0;
			this.$refs.audio.src = this.searchSongsInfo.url;
			this.$refs.audio.play();
		},
		audioPlay: function(newVal,oldVal){
			if(newVal){
				if(this.$refs.audio.paused){

					this.$refs.audio.play();
				}
			}else{
				if(!this.$refs.audio.paused){
					this.$refs.audio.pause();
				}
			}
		}
	},
	created () {
		
		if(this.boxType == 'search'){
			this.updateSearchSong(this.searchCurrentHash);
		}else if(this.boxType == 'common'){
			this.updateSong(this.updateIndex);
		}
		
	}
}


</script>


<style lang="scss" scoped>
	.music-box-wrap{
		position: fixed;
		width: 100%;
		height: 1.5rem;
		bottom: 0;
		left: 0;
		z-index: 99;
	}
	.music-box-switch{
		width: .8rem;
		height: .8rem;
		position: absolute;
		top: -1.2rem;
		right: .2rem;
		border-radius: 50%;
		background: rgba(0,0,0,.8);
		z-index: 99;

		i{
			width: .64rem;
			height: .64rem;
			display: inline-block;
			position: absolute;
			left: .08rem;
			top: .08rem;
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
		i.close-musicbox{
			background-image: url(../assets/images/close_icon.png);
		}
		i.open-musicbox{
			background-image: url(../assets/images/open_icon.png);
		}
	}
	.music-box{
		width: 100%;
		height: 1.5rem;
		position: fixed;
		left: 0;
		bottom: 0;
		background: rgba(0,0,0,.8);
		color: #fff;
		display: flex;
		z-index: 99;

		.music-box-left{
			flex: 3;
			position: relative;

			img{
				width: 1.3rem;
				height: 1.3rem;
				display: inline-block;
				margin-left: .2rem;
				margin-top: .1rem;
				border-radius: .05rem;
			}
			span.song-name{
				position: absolute;
				width: 2.5rem;
				display: inline-block;
				top: .3rem;
				left: 1.7rem;
				font-size: .3rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			span.song-author{
				position: absolute;
				width: 2.5rem;
				display: inline-block;
				left: 1.7rem;
				top: .8rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		.music-box-right{
			flex: 2;
			position: relative;

			.btn-icon{
				width: .7rem;
				height: .7rem;
				display: inline-block;
				position: absolute;
				top: .4rem;
				background-repeat: no-repeat;
				background-position: 50% 0;
				background-size: 100% 100%;
			}
			i.play-btn{
				left: 0;
				background-image: url(../assets/images/play_icon.png);
			}
			i.pause-btn{
				left: 0;
				background-image: url(../assets/images/pause_icon.png);
			}
			i.next-btn{
				left: .9rem;
				background-image: url(../assets/images/next_icon.png);
			}
			i.download-btn{
				left: 1.8rem;
				background-image: url(../assets/images/download_icon.png);
			}
		}
	}
	.switchDown {
		animation-name: switchDown
	}
	.switchUp {
		animation-name: switchUp
	}
	.roate {
		animation-name: roate
	}
	.roate2 {
		animation-name: roate2
	}

	@keyframes switchDown{
		0% {
			margin-top: 0;
		}
		to {
			margin-top: 1.5rem;
		}
	}

	@keyframes switchUp{
		0% {
			margin-top: 1.5rem;
		}
		to {
			margin-top: 0;
		}
	}

	@keyframes roate{
		0% {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(180deg);
		}
	}
	@keyframes roate2{
		0% {
			transform: rotate(180deg);
		}
		to {
			transform: rotate(0deg);
		}
	}


</style>