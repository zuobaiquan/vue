<template>
	<div class="search-input">
		<span class="search-icon"><i></i></span>
		<input :value="keyword"  ref="keywordInput" v-on:focus="focus" v-on:blur="blur" type="text" placeholder="歌手/歌名/拼音" id="keyword" class="keyword-search" />
		<button @click="searchSongs({keyword:keyword,pageIndex:1,isSearchByInput:true})" id="searchBtn" class="btn-search" :class="{disabled:isShow}">搜索</button>
	</div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
	name: 'search-input',
	data () {
		return {
			isShow: true
		}
	},
	computed: {
		...mapState({
			pageIndex: state => state.search.pageIndex,
			keyword: state => state.search.keyword
		})
	},
	methods: {
		...mapActions([
			'searchSongs'
			]),
		focus: function(){
			this.isShow = false;
		},
		blur: function(){
			this.isShow = true;
			this.$store.state.search.keyword = this.$refs.keywordInput.value;
		}
	},
	created () {

	}

}	
</script>


<style lang="scss" scoped>
.search-input{
	width: 100%;
	height: 1rem;
	background: #fbfbfb;
	padding: .15rem;
	position: relative;
	margin-top: 1rem;

	.search-icon{
		width: .7rem;
		height: .7rem;
		position: absolute;
		top: .15rem;
		left: .15rem;

		i{	
			width: .6rem;
			height: .6rem;
			display: inline-block;
			background-image: url(../assets/images/search_icon.png);
			background-position: 50% 0;
			background-size: contain;
			background-repeat: no-repeat;
			margin-top: .05rem;
		}
	}
	.keyword-search{
		width: 80%;
		height: .7rem;
		border: 1px solid #e5e5e5;
		border-radius: 5px;
		font-family: Microsoft Yahei;
		font-size: .28rem;
		padding-left: .7rem;
		outline: none;
	}
	.btn-search{
		width: 1.2rem;
	    height: .65rem;
	    border: none;
	    border-radius: .1rem;
	    margin-left: .1rem;
	    background: #2ba2fa;
	    color: #fff;
	    font-family: Microsoft Yahei;
	    font-size: .28rem;
	    outline: none;
	}
	.btn-search.disabled{
		color: #959595;
		background: #e5e5e5;
	}
}	
</style>