<template>
  <div>
    <h1 class="list-title">{{title}}</h1>
    <ul>
      <li v-for="item in hotSonglist" v-bind:key="item.content_id" class="recommend_item">
        <div class="card">
          <div class="icon">
            <i class="icon-earphone"> {{getAccessNum(item.listen_num)}}万</i>
            <img v-bind:src="getimgsrc(item.cover)" width="100%">
            <i class="icon-player"></i>
          </div>
          <div class="describe">
            <p class="songListDesc">{{item.title}}</p>
            <p class="songListAuthor">{{item.username}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    hotSonglist: {
      type: Array,
      default: null
    }
  },
  methods: {
    getAccessNum (num) {
      num = num / 10000
      return num.toFixed(2)
    },
    getimgsrc (src) {
      return src.replace(/600/, '300')
    }
  }
}
</script>

<style>
  @import "../../../static/style.css";
  .recommend_item{
    width: 50%;
    display: inline-block;
    margin-bottom: 1rem;
    vertical-align: top;
  }
  .card{
    width: 95%;
    margin-left: 2.5%;
    background-color: white;
  }
  .card .describe{
    padding: 0.5rem 0.25em;
  }
  .card .songListDesc{
    font-size: 14px;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .card .songListAuthor{
    font-size: 12px;
    color: orange;
    margin-top: 0.5rem;
  }
  .list-title{
    padding: 0.5rem 0.5rem;
    font-weight: bold;
  }
  .card .icon{
    position: relative;
  }
  .card .icon .icon-earphone{
    position:absolute;
    font-size: 0.5rem;
    left:0.5rem;
    bottom: 0.8rem;
    color: white;
  }
  .card .icon .icon-player{
    position:absolute;
    right:0.5rem;
    bottom: 0.5rem;
    font-size: 1.5rem;
  }
</style>
