<template>
	<div v-if="isSearch" class="search-list"   :class="{pdBtm:!isHideBox}">
		<div class="search-total">
			<span>總共<span class="num">{{totalNum}}</span>條結果</span>
		</div>
		<div class="search-list-ul">
			<ul :data-size="totalNum"  ref="songListUl">
				<template v-for="(song,index) in tempList">
					<li :data-hash="song.hash">
						<span @click="listen(index,song.hash)" class="song-name">{{song.filename}}</span>
					</li>
				</template>
			</ul>
		</div>
		<div v-show="isload" class="search-loading">加載中<span>{{dot}}</span></div>
		<!-- <k-music-box v-if="open" :songsData="tempList"></k-music-box> -->
		<!-- <bottom-music-box v-if="open" :songsData="tempList" :boxType="boxType"></bottom-music-box> -->
	</div>
	<div v-else class="search-list" :class="{pdBtm:!isHideBox}">
		<div class="search-title">
			<span>最近热门</span>
		</div>
		<div class="search-list-ul">
			<ul >
				<template  v-for="key in hotList">
					<li>
						<span @click="searchByHot" class="song-name">{{key.keyword}}</span>
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

import BottomMusicBox from '../components/BottomMusicBox'
import $ from 'expose-loader?!jquery'

export default {
	name: 'search-list',
	components: { BottomMusicBox },
	data () {
		return {
			songsHash: null,
			dot: '.',
			isload: false,
			tempList: [],
			boxType: 'search'
		}
	},
	props: ['hotList'],
	computed: {
		...mapState({
			isSearch: state => state.search.isSearch,
			searchResult: state => state.search.searchResult,
			pageIndex: state => state.search.searchResult.pageIndex,
			totalNum: state => state.search.searchResult.data.total,
		    songsList: state => state.search.searchList,
		    isSearchByInput: state => state.search.isSearchByInput,
		    currentHash: state => state.search.currentHash,
		    songsInfo: state => state.search.songsInfo,
		    isHideBox: state => state.musicbox.isHideBox
		})
	},
	methods: {
		...mapActions([
				'searchSongs'
			]),
		listen: function(index,hash){
			this.isload = false;
			this.$store.commit({
				type: 'updateSongsHash',
				currentHash: hash,
				updateIndex: index
			})
			this.$store.commit({
				type: 'listenMusic',
				songsData: this.tempList,
				boxType: 'search',
				isOpenBox: true,
				isHideBox: false
			})
		},
		searchByHot: function(evt){
			var keyword = evt.target.innerHTML;
			this.searchSongs({
				keyword: keyword,
				pageIndex: 1,
				isSearchByInput: true
			});
		},
		isLoadComplete: function(){
			var isComplete = false;
			var current_length = $('.search-list-ul').find('li').length;
			var total_length = this.$refs.songListUl.getAttribute('data-size');
			current_length == total_length ? (isComplete = true) : isComplete;
			return isComplete;
		},
		initLoadingDot: function(){
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
		scrollEvt: function(){
			var self = this;
			var scrollTop = document.body.scrollTop;
			var scrollHeight = document.body.scrollHeight;
			var clientHeight = document.body.clientHeight;
			var val = $('#keyword').val();
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
							var tempPageIndex = 0;
							tempPageIndex = self.pageIndex + 1;
							self.searchSongs({
								keyword: val,
								pageIndex: tempPageIndex,
								isSearchByInput: false
							});
						},2000);

					}
				}
			}
		}
	},
	watch : {
		isSearch: function(newVal,oldVal){
			if(newVal){
				var self = this;
				$(window).off('scroll',this.scrollEvt);
				$(window).scroll(this.scrollEvt);
			}
		},
		songsList: function(newVal,oldVal){
			if(this.isSearchByInput){
				this.tempList = newVal;
			}else{
				this.tempList = this.tempList.concat(newVal);
			}
			
			this.isload = false;
		},
		currentHash: function(newVal,oldVal){
			this.songsHash = newVal;
		}
	},
	created () {

		this.initLoadingDot();

	},
	destroyed () {
		$(window).off('scroll',this.scrollEvt);
	}
}	
</script>


<style lang="scss" scoped>
.search-list{
	.search-total{
		width: 100%;
		height: .6rem;
		line-height: .6rem;
		padding-left: .2rem;
		background: #e6e6e6;
		color: #5d5d5d;
		font-size: .26rem;
	}
	.search-title{
		width: 100%;
		height: 1rem;
		border-bottom: 1px solid #ccc;
		font-size: .28rem;
		color: #2ca3f5;
		padding-left: .2rem;

		span{
			display: inline-block;
			line-height: 1rem;
		}
	}
	.search-list-ul{
		width: 100%;

		ul{
			width: 100%;
			height: auto;
			/**overflow: auto;**/
			padding-left: .2rem;

			li{
				width: 100%;
				height: 1rem;
				border-bottom: 1px solid #e5e5e5;
				position: relative;

				span.song-name{
					display: inline-block;
					width: 100%;
					line-height: 1rem;
					font-size: .28rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					padding-right: .2rem;
				}
			}
		}
	}
	.search-loading{
		width: 100%;
		height: .8rem;
		text-align: center;
		line-height: .8rem;
	}
}
.pdBtm{
	padding-bottom: 1.5rem;
}	
</style>