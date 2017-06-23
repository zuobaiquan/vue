<template>
	<div class="photo-slider">
		<swiper :options="swiperOption" ref="mySwiper">
			<!--輪播內容-->
			<swiper-slide v-for="slide in swiperOption.swiperSlides">
				 <img :src="slide" />
			</swiper-slide>
			<!--輪播小圓點-->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	components: { swiper, swiperSlide},
	data () {
		return {
			swiperOption: {
				autoplay: 3500,
				setWrapperSize :true,
				pagination : '.swiper-pagination',
				paginationClickable :true,
				mousewheelControl : true,
				observeParents:true,
				onSlideChangeEnd: swiper => {
					this.page = swiper.realIndex+1;
					this.index = swiper.realIndex;
				},
				swiperSlides: [
					require("../assets/images/banner1.jpg"),
					require("../assets/images/banner2.jpg"),
					require("../assets/images/banner3.jpg"),
					require("../assets/images/banner4.jpg"),
					require("../assets/images/banner5.jpg")
				]
			}
		}
	},
	//定義這個swiper對象
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper;
		}
	}

}



</script>

<style lang="scss" scoped>
.photo-slider{
	padding-top: 1rem;
}
.swiper-container {
	height: 2.8rem;
}
</style>