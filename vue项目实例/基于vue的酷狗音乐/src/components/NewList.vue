<template>
	<div class="new-list" :class="{pdBtm:!isHideBox}">
		<ul class="new-list-ul">
			<template  v-for="(song,index) in songsData">
				<li  :data-id="song.song_id" :data-index="index">
					<span @click="listen(index,song.song_id)"  class="song-name">{{song.author}} - {{song.title}}</span>
					<span class="download-wrap"><i class="song-download"></i></span>
				</li>
			</template>
		</ul>
		<!-- <music-box v-if="open"  :songsData="songsData" :songsIndex="songsIndex"></music-box> -->
		<!-- <music-box v-if="open"  :songsData="songsData" :songsIndex="updateIndex"></music-box> -->
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'new-list',
	computed: {
		...mapState({
			updateIndex: state => state.newlist.updateIndex,
			isHideBox: state => state.musicbox.isHideBox
		})
	},
	props: ['songsData'],
	data() {
		return {
			open: false,
			songsInfo: {},
			songsIndex: null
		}
	},
	methods: {
		listen (index,songId) {
			this.$store.commit({
				type: 'updateIndex',
				updateIndex: index,
				baiduSongId: songId
			})
			this.$store.commit({
				type: 'listenMusic',
				songsData: this.songsData,
				boxType: 'common',
				isOpenBox: true,
				isHideBox: false
			})
		}
	},
	created() {

		this.$store.commit({
			type: 'searchSongs',
			isSearch: false
		});

	}
}	

</script>

<style lang="scss" scoped>
.new-list{
	width: 100%;

	.new-list-ul{
		width: 100%;

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
.new-list.pdBtm{
	padding-bottom: 1.5rem;
}
</style>
