<template>
  <div class="detail_top" ref="detailtop">
    <div class="detail_header clearfix">
      <div class="detail_left">
        <img v-bind:src=image />
      </div>
      <div class="detail_right">
        <h2>{{name}}</h2>
        <P class="fans">{{fans}}</P>
        <p class="intruduce" v-on:click="_dispachAlert()">{{intruduce}}</p>
      </div>
    </div>
    <div class="bottom_detail">
      <div class="button" v-on:click="_dispachPlay()">
        <i class="icon-player"></i>
        <span>播放全部</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    fans: {
      type: String,
      default: ''
    },
    intruduce: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this._setBackgroundPic()
  },
  methods: {
    _setBackgroundPic () {
      let target = this.$refs.detailtop
      target.style.backgroundImage = `url(${this.image})`
      target.style.backgroundSize = '100% auto'
    },
    _dispachAlert () {
      this.$emit('alert')
    },
    _dispachPlay () {
      this.$emit('musicplay')
    }
  }
}

</script>

<style>
  .detail_header {
    background-color:rgba(0, 0, 0, 0.6);
    padding: 1rem;
  }

  .detail_left {
    float: left;
    width: 150px;
    margin-right: 0.5rem;
  }

  .clearfix:after {
    clear: both;
    content: '';
    display: table;
  }

  .detail_right h2 {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: white;
  }

  .detail_right .fans {
    font-size: 1rem;
    margin: 1rem 0;
    color: whitesmoke;
  }

  .detail_right .intruduce {
    font-size: 0.8rem;
    line-height: 1.2rem;
    color: whitesmoke;
    height:3.6rem;
    overflow: hidden;
    position: relative;
  }
  .detail_right .intruduce:after{
    content:'..';
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .bottom_detail {
    background-color:rgba(0, 0, 0, 0.6);
    padding-bottom: 1rem;
    text-align: center;
  }
  .button{
    display: inline-block;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 3rem;
    padding: 0.4rem 1.2rem;
    color: white;
    border: 1px orange solid;
  }
  .button *{
    display:inline-block;
    vertical-align:middle
  }
  .button i{
    font-size: 1.5rem;
    color: orange;
  }

</style>
