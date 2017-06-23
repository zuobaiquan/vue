<template>
	<div class="singerlist-view" v-show="!isHideModule">
		<nav-bar :view="viewName"></nav-bar>
		<div class="space"></div>
		<div class="singerlist-container" :class="{pdBtm:!isHideBox}">
			<ul class="singer-list-panel">				
				<li class="singer-type">
					<router-link :to="{name: 'SingerListInfoView', params: {typeId: 0}}">
						<span>热门歌手</span>
						<i class="arrow-icon"></i>
					</router-link>
				</li>
			</ul>
			<ul class="singer-list-panel">
				<li class="singer-type">
					<router-link :to="{name: 'SingerListInfoView', params: {typeId: 1}}">
						<span>华语男歌手</span>
						<i class="arrow-icon"></i>
					</router-link>
				</li>
				<li class="singer-type">
					<router-link :to="{name: 'SingerListInfoView', params: {typeId: 2}}">
						<span>华语女歌手</span>
						<i class="arrow-icon"></i>
					</router-link>
				</li>
				<li class="singer-type">
					<router-link :to="{name: 'SingerListInfoView', params: {typeId: 3}}">
						<span>华语组合</span>
						<i class="arrow-icon"></i>
					</router-link>
				</li>
			</ul>
			<ul class="singer-list-panel">
				<li class="singer-type">
					<router-link :to="{name: 'SingerListInfoView', params: {typeId: 4}}">
						<span>日韩男歌手</span>
						<i class="arrow-icon"></i>
					</router-link>
				</li>
				<li class="singer-type">
					<router-link :to="{name: 'SingerListInfoView', params: {typeId: 5}}">
						<span>日韩女歌手</span>
						<i class="arrow-icon"></i>
					</router-link>
				</li>
				<li class="singer-type">
					<router-link :to="{name: 'SingerListInfoView', params: {typeId: 6}}">
						<span>日韩组合</span>
						<i class="arrow-icon"></i>
					</router-link>
				</li>
			</ul>
			<ul class="singer-list-panel">
				<li class="singer-type">
					<router-link :to="{name: 'SingerListInfoView', params: {typeId: 7}}">
						<span>欧美男歌手</span>
						<i class="arrow-icon"></i>
					</router-link>
				</li>
				<li class="singer-type">
					<router-link :to="{name: 'SingerListInfoView', params: {typeId: 8}}">
						<span>欧美女歌手</span>
						<i class="arrow-icon"></i>
					</router-link>
				</li>
				<li class="singer-type">
					<router-link :to="{name: 'SingerListInfoView', params: {typeId: 9}}">
						<span>欧美组合</span>
						<i class="arrow-icon"></i>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>


<script>
import NavBar from '../components/NavBar'
import { mapState,mapActions } from 'vuex'

export default {
	name: 'singerlist-view',
	components: { NavBar },
	computed: {
		...mapState({
			isHideModule: state => state.panel.isHideModule,
			isHideBox: state => state.musicbox.isHideBox
		})
	},
	data() {
		return {
			viewName: 'singerlist'
		}
	}

}

</script>


<style lang="scss" scoped>
.singerlist-view{
	padding-top: 1rem;

	.space{
		width: 100%;
		height: .06rem;
		background: #f7f7f7;
		margin-top: 1rem;
	}

	.singerlist-container{
		padding: .3rem .3rem 0 .3rem;

		ul.singer-list-panel{
			width: 100%;
			margin-bottom: .2rem;
			background: #fbfbfb;
			border: 1px solid #e4e4e4;
			border-radius: .1rem;


			li.singer-type{
				width: 100%;
				height: .9rem;
				border-top: 1px solid #e4e4e4;
				position: relative;

				a{
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					display: block;
				}

				span{
					display: inline-block;
					height: .9rem;
					line-height: .9rem;
					font-size: .34rem;
					padding-left: .3rem;
				}

				i.arrow-icon{
					position: absolute;
					    width: .2rem;
					    height: .35rem;
					    display: block;
					    right: .3rem;
					    top: .275rem;
					    background-image: url(../assets/images/arrow_icon.png);
					    background-size: 100% 100%;
					    background-position: 50% 0;
					    background-repeat: no-repeat;
				}

			}
			li:first-child{
				border-top: none;
			}
		}
	}
	.pdBtm{
		padding-bottom: 1.5rem!important;
	}

}	

</style>