<template>
	<div class="ranklist-view" v-show="!isHideModule">
		<nav-bar :view="viewName"></nav-bar>
		<div class="ranklist-container" :class="{pdBtm:!isHideBox}">
			<ul class="ranklist-ul">
				<template v-for="item in ranklists">
					<li>
						<router-link :to="{ name: 'RankListInfoView',params: {typeId: item.typeId, index: item.listIndex} }">
							<div class="panel-img-left">
								<img v-lazy="item.imgUrl" >
							</div>
							<div class="panel-content-middle">
								<p>{{item.name}}</p>
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
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
	preLoad: 1.3,
	error: require('../assets/images/default.png'),
	loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
	attempt: 1,
	listenEvents: [ 'scroll', 'mousewheel' ]
})

import { mapState } from 'vuex'

import NavBar from '../components/NavBar'

export default {
	name: 'ranklist-view',
	components: { NavBar },
	computed: {
		...mapState({
			ranklists: state => state.ranklist.ranklists,
			isHideBox: state => state.musicbox.isHideBox,
			isHideModule: state => state.panel.isHideModule
		})
	},
	data () {
		return {
			viewName: 'ranklist'
		}
	}
}	

</script>



<style lang="scss" scoped>
.ranklist-view{
	padding-top: 1rem;
}
	.ranklist-container{
		width: 100%;
		background: #f7f7f7;
		padding-top: 1.05rem;

		.ranklist-ul{
			width: 100%;
			background:#fff;

			li{
				width: 100%;


				a{
					display: block;
					position: relative;
					width: 100%;
					height: 2rem;
					border-bottom: 1px solid #e5e5e5;
					margin-left: .25rem;

					.panel-img-left{
						position: absolute;
						width: 1.6rem;
						height: 1.6rem;
						left: 0;
						top: .2rem;

						img{
							width: 100%;
						}
					}

					.panel-content-middle{
						position: absolute;
						width: 4.2rem;
						height: 1.6rem;
						left: 1.6rem;
						top: .2rem;

						p{
							color: #000;
							font-size: .34rem;
							line-height: 1.6rem;
							padding-left: .5rem;
						}
					}

					.panel-img-right{
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
	}

.pdBtm{
	padding-bottom: 1.5rem;
}


</style>