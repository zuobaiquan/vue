<template>
  <div>
    <div class="singer" v-if="singerlist.length">
      <listview  v-bind:data=" _singerCountryMap()" @select="selectSinger"></listview>
    </div>
    <div class="singer" v-show="!singerlist.length">
      <loading></loading>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import getSingerList from '../../api/singer'
import Singer from './singer.js'
import Listview from '../../baseComponents/listview/listview.vue'
import Loading from '../../baseComponents/loading/loading.vue'
export default {
  data () {
    return {
      singerlist: []
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
    _getSingerList () {
      getSingerList().then((result) => {
        this.singerlist = result.singerList.data.singerlist
        console.log(this._singerCountryMap())
      }, (err) => { console.log(err) }
      )
    },
    _singerCountryMap () {
    // 将数据按照地点区分
      let map = {}
      for (let value of this.singerlist) {
        let key = value.country
        if (!map[key]) {
          let item = []
          map[key] = item
        }
        map[key].push(new Singer(value))
      }
      return map
    },
    selectSinger (singer) {
      this.$router.push({
        path: `/singer/${singer.singer_id}`
      })
    }
  },
  components: {
    'listview': Listview,
    'loading': Loading
  }
}

</script>

<style>
 .singer{
   background-color: orange;
 }
</style>
