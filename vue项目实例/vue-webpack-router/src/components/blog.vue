<template>
    <div>
		<h1>{{header}}</h1>
		<p>{{msg}}</p>
		<ul class="list-group">
			 <div class="list-group-item" v-for="listitem in items">
			<div class="list_item_content row" >
				<div class="WB_screen "></div>
				<div class="WB_face col-sm-2">
		       <img class="img-circle" src="https://c1.staticflickr.com/1/775/31758330086_9a7b1d058d_q.jpg" height="50" width="50">

					<!-- <img class="img-circle" src="../assets/x.jpg" height="50" width="50"> -->
					<!-- <img :src="listitem.imgURL" height="50" width="50"> -->
				</div>
				<div class="WB_detail col-sm-10">
				    <div class="WB_author">
				    <a>{{listitem.author}}</a>
				    </div>
					<div class="WB_from">
					<a >{{listitem.time}}</a>
					</div>
					<div class="WB_text">{{listitem.info}}</div>
				</div>
			</div>
		    </div>
        </ul>
	</div>
</template>
<style>
	.WB_author a{
		color: #333;
		font-weight:700;
		font-size:14px; 
	}
	.WB_from a{
		color: #919191;
		text-decoration: none;
	}
	.WB_text{
		font-size: 14px;
		margin-top: 2px;
		padding-bottom: 0;
	}
</style>
<script>
	export default {
		data: function() {
			return {
				header:'Blog',
				msg: 'Write Some thing',
				items:[{
					"info":"This is first content",
					"time":"20161219",
					"author":"daisyHawen",
					"imgURL":"../assets/x.jpg"
				},{
					"info":"今天模仿微博，写了一个微博小面板",
					"time":"20161208",
					"author":"daisyHawen"
				}]
			}
		}
	}
</script>