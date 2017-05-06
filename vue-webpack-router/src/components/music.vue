<template>
    <div>
		<h1>{{header}}</h1>
		<p>{{msg}}</p>
		<div>
		<!-- <a @click="getMusic">获取音乐</a> -->
		<!-- <a @click="player">播放</a> -->
		<!-- <img class="img-circle" src="./music/pic/1.jpg" height="50" width="50"> -->
		<img src="https://farm1.staticflickr.com/697/31819583465_c4620c1bd0.jpg" style="width: 100px;height: 100px">
		    <audio controls="controls" autoplay="autoplay">
            <source src="./music/1.mp3" />
            Your browser does not support the audio element.
            </audio>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				header:'Hello',
				msg: 'music',
				list:[],
				size: 30,
				notFounded: false,
				page:1,
				query:'蔡依林',
				currentIndex2: -1,
				total: 0,
				favorite:{}
			}
		},
		methods: {
			player: function(e){
				var self = this;
				// var id = e.target.getAttribute("data-id");
				// this.currentIndex2 = e.target.getAttribute("data-index");
				// this.currentIndex = -1;
				// if(id == undefined){
				// 	id = e.target.parentNode.getAttribute("data-id")
				// 	this.currentIndex2 = e.target.parentNode.getAttribute("data-index");
				// }
				fetch('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.song.playAAC&songid='+'242078437',{
					method: 'GET'
				}).then(function(resp){
					return resp.json();
				}).then(function(json){
					var resp = json;
					self.currentLink = 'http://localhost:8081/api/?tourl='+resp.bitrate.file_link;
					self.currentSong = resp.songinfo.title;
					self.singer = resp.songinfo.author;
					self.singerPic = 'http://localhost:8081/api/?tourl='+resp.songinfo.pic_small;
					self.loop = true;
				})
			},
			getMusic:function (argument) {
				fetch('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.search.common&format=json&query='+this.query+'&page_size='+this.size+'&page_no='+this.page,{
					method: 'GET'
				}).then(function(resp){
					return resp.json();
				}).then(function(json){
					var resp = json;
					self.total = parseInt(json.pages.total);
					if(json.song_list){
						self.notFounded = false;
						json.song_list.map(function(val,index){
							self.list.push({
								singer: val.author,
								name: val.title,
								ep: val.album_title == ''? '未知':val.album_title,
								songId : val.song_id
							})
						})
					}else{
						self.notFounded = true;
					}
				})

				// $.ajax({
				// type: "GET",
				// url: url,
				// datatype: 'json',
				// success: function(result) {
				// 	var imgs=JSON.parse(result.slice(14,-1));
				// 	// result.slice(15,-1)
				// 	console.log(result);
				// 	console.log(result.slice(14,-1));
				// 	console.log(imgs);
				// 	// img_url是对象化的照片

				// 	$.each(imgs.photos.photo,function(i,v){
				// 		// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
				// 		console.log("v"+v);
				// 		var temp="https://farm"+v.farm+".staticflickr.com/"+v.server+"/"+v.id+"_"+v.secret+".jpg";
				// 		console.log(temp);
				// 		_self.img_url.push(temp);
				// 	})
				// 	console.log(_self.img_url);
				//    }
			 //    });
			}
        },
	}
</script>