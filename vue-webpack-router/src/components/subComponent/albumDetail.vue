<template>
    <div>
		<a v-show="show" @click="init">获取数据</a>
		<!-- <a href="https://www.flickr.com/photos/146067095@N06/31758330086/in/dateposted-public/"><img src="http://c7.staticflickr.com/1/775/31758330086_9a7b1d058d_z.jpg"></a> -->
		<div class="row">
			<div class="img-box" v-for="item in img_url">
		        <img :src="item" ></img :src="item" >
		    </div>
		</div>
		
		<!-- <img src="https://farm1.staticflickr.com/375/31648064222_dd6b2cddbb.jpg"> -->
	</div>
</template>
<style type="text/css">
    .img-box{
    	padding: 10px;
    	display: inline-block;
    	width: 33.3%;
    }
	.img-box img{
		width: 100%;
		height: 100%;
	}

	
</style>
<script>

	export default {
		data: function() {
			return {
				header:'Hello',
				msg: 'music',
				url:'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=56a8221a406f0c4f150601ed15512173&user_id=daisyHawen&per_page=12&page=4&format=json',
				img_url:[],
				show:true
			}
		},
		methods:{
			init:function(){
				console.log(this.$route.query);
				this.getImg();
			},
			getImg:function(){
				//获取flickr的照片
				var _self=this;
				_self.show=false;
				_self.img_url=[];
				var url="https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=56a8221a406f0c4f150601ed15512173&user_id=146067095@N06&format=json";
				$.ajax({
				type: "GET",
				url: url,
				datatype: 'json',
				success: function(result) {
					var imgs=JSON.parse(result.slice(14,-1));
					// result.slice(15,-1)
					console.log(result);
					console.log(result.slice(14,-1));
					console.log(imgs);
					// img_url是对象化的照片

					$.each(imgs.photos.photo,function(i,v){
						// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
						console.log("v"+v);
						var temp="https://farm"+v.farm+".staticflickr.com/"+v.server+"/"+v.id+"_"+v.secret+".jpg";
						console.log(temp);
						_self.img_url.push(temp);
					})
					console.log(_self.img_url);
				   }
			    });
			}
		}
	}
	// this.init();
</script>