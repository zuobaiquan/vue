<template>
	<div class="search-view" v-show="!isHideModule">
		<div class="search-back-button">
			<!-- <router-link :to="{name: 'HomeView'}"> -->
				<span @click="goBack" class="go-back"><i></i></span>
			<!-- </router-link> -->
			<span class="title">搜索</span>
		</div>
		<search-input></search-input>
		<search-list :hotList="hotList"></search-list>

	</div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
import { Indicator } from 'mint-ui'
import SearchInput from '../components/SearchInput'
import SearchList from '../components/SearchList'


export default {
	name: 'search-view',
	components: { SearchInput,SearchList},
	data () {
		return {
			
		}
	},
	computed: {
		...mapState({
			hotList: state => state.search.hotList,
			isShowPanel: state => state.panel.isShowPanel,
			panelInfo: state => state.panel.panelInfo,
			isHideModule: state => state.panel.isHideModule
		})
	},
	methods: {
		...mapActions([
			'getHotList'
		]),
		goBack () {
			this.$store.commit({
				type: 'updateSearchStatus',
				isSearch: false
			})
			this.closePanel();
			history.go(-1);
		},
		closePanel () {
			this.$store.commit({
				type: 'closePanel',
				isShowPanel: false,
				isHideModule: false
			})
		}
	},
	created () {
		Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
        this.closePanel();
		this.getHotList();
	}
}
</script>

<style lang="scss" scoped>
.search-view{
	position: relative;
	padding-top: 1rem;

	.search-back-button{
		width: 100%;
		height:  1rem;
		background: #fff;
		color: #333;
		position: fixed;
		box-shadow: 0 .05rem .05rem 0 #f4f4f4;
		text-align: center;
		z-index: 200;

		.go-back{
			width: 1rem;
			height: 100%;
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;

			i{
				width: .28rem;
				height: .46rem;
				display: inline-block;
				background-image: url(../assets/images/goback.png);
				background-position: 50% 0;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				margin-left: .2rem;
				margin-top: .27rem;
			}
		}
		.title{
			display: inline-block;
			line-height: 1rem;
			font-size: .32rem;
		}
	}
}	
</style>