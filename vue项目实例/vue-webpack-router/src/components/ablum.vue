<template>
    <div>
	      <div>
		       <h1>Album</h1>
		       <img class="img-circle" src="https://c1.staticflickr.com/1/775/31758330086_9a7b1d058d_q.jpg">
		       <sapn>{{msg}}</sapn>
	      </div>
	      <div>
		      <ul class="nav nav-tabs">
			      <li v-for="album in albums">
                      <router-link  :to="{ name: 'albums', params: { id: album.id}, query: { info: album.query } }">{{album.title}}</router-link>
			      </li>

			      <!-- <li>
			          <router-link  to="/Album/albums">去一下西北吧</router-link>	
			      </li> -->
		      </ul>
		      <router-view></router-view>
	      </div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				msg: '谢谢你的到来',
				albums: [
					{ id: '01', title: '从你的全世界路过',time:'20161214',query:'nanjing'},
					// { id: '02', title:'坑爹的上海',time: '20161218',query:'shanghai'},
					// { id: '03', title:'',time: '20161220'}
				]
			}
		}
	}
</script>