<template>
	<div class="songlist-view" v-show="!isHideModule">
		<nav-bar :view="viewName"></nav-bar>
		<div class="songlist-container" :class="{pdBtm:!isHideBox}">
			<ul class="songlist-container-ul">
				<template v-for="(menus,index) in menuTempList">
					<li :menuIndex="index">
						<router-link :to="{ name: 'SongListInfoView',params: {menuIndex: index} }">
							<div class="panel-img-left">
								<img  v-lazy="menus.pic_w300" >
							</div>
							<div class="panel-content-middle">
								<p>{{menus.title}}</p>
								<span class="panel-listen-span"><i class="listen_icon"></i><label>{{menus.listenum}}</label></span>
							</div>
							<div class="panel-img-right">
								<i class="panel-img-arrow"></i>
							</div>
						</router-link>
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>


<script>
import { mapState,mapActions } from 'vuex'
import { Indicator } from 'mint-ui'
import NavBar from '../components/NavBar'
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
	preLoad: 1.3,
	error: require('../assets/images/default.png'),
	loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
	attempt: 1,
	listenEvents: [ 'scroll', 'mousewheel' ]
})


export default {
	name: 'songlist-view',
	components: { NavBar },
	computed: {
		...mapState({
			menuTempList: state => state.songMenu.songsMenu,
			isHideBox: state => state.musicbox.isHideBox,
			isHideModule: state => state.panel.isHideModule
		})
	},
	data () {
		return {
			viewName: 'songlist'
		}
	},
	methods: {
		...mapActions([
			'getSongsMenu'
			]),
	},

	created () {
		this.isload = false;
		Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
		this.getSongsMenu({
			page_no: 1,
			page_size: 10
		});
	},
	destroyed (){
		Indicator.close();
	}

}

</script>


<style lang="scss" scoped>
	.songlist-view{
		padding-top: 1rem;

		.pdBtm{
			padding-bottom: 1.5rem;
		}

		.songlist-container{
			width: 100%;
			background: #f7f7f7;
			padding-top: 1.05rem;

			.songlist-container-ul{
				width: 100%;
				background: #fff;

				li{
					a{
						display: block;
						position: relative;
						width: 100%;
						height: 2rem;
						border-bottom: 1px solid #e5e5e5;
						margin-left: .25rem;
					}
					div.panel-img-left{
						position: absolute;
						width: 1.6rem;
						height: 1.6rem;
						left: 0;
						top: .2rem;

						img{
							width: 100%;
						}
					}
					div.panel-content-middle{
						position: absolute;
						width: 4.2rem;
						height: 1.6rem;
						left: 1.6rem;
						top: .2rem;

						p{
							color: #000;
							font-size: .26rem;
							padding-left: .5rem;
							padding-top: .45rem;
						}
						span.panel-listen-span{
							position: absolute;
							display: inline-block;
							width: 2rem;
							height: .3rem;
							bottom: .05rem;
							left: .5rem;

							i.listen_icon{
								width: .2rem;
								height: .2rem;
								display: inline-block;
								background-image: url(../assets/images/icon_music.png);
								background-size: 100% 100%;
								background-position: 50% 0;
								background-repeat: no-repeat;
								margin-right: .1rem;
							}
							label{
								color: #9b9b9b;
							}
						}
					}
					div.panel-img-right{
						position: absolute;
						width: 1rem;
						height: 1.6rem;
						top: .2rem;
						left: 5.8rem;

						i.panel-img-arrow{
							position: absolute;
							width: .2rem;
							height: .35rem;
							display: block;
							left: .6rem;
							top: .625rem;
							background-image: url(../assets/images/arrow_icon.png);
							background-size: 100% 100%;
							background-position: 50% 0;
							background-repeat: no-repeat;
						}
					}
				}
			}
		}

		.pdBtm{
			padding-bottom: 1.5rem;
		}

		.menu-loading{
			background: #fff;
			height: .8rem;
			line-height: .8rem;
			text-align: center;
		}
	}

</style>