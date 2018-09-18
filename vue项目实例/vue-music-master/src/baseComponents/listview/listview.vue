<template>
  <div v-if="data">
    <ul ref="roll" >
      <li v-for="(value, key, index) in data" v-bind:key="index">
        <h2 class="title">{{key}}</h2>
        <ul>
          <li v-for="(item, index) in (value)" v-bind:key="index" class="singer_item" @click="selectItem(item)">
            <img v-lazy="item.singer_pic" class="singerPic">
            <span class="singer_name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div v-if="data">
      <ul ref="quickNav" class="shortpart" @click="onShortcutTouchStart">
        <li v-for="(key,index) in shortcutList" v-bind:key="index" class="shortitem" v-bind:data-index="index">
          {{key}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    shortcutList () {
      let keylist = []
      for (let key in this.data) {
        if (key) {
          keylist.push(key)
        }
      }
      return keylist
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.citylist = this.$refs.roll.children
      this.headerHeight = this.citylist[0].offsetTop
      this.quicknavlist = this.$refs.quickNav.children
      this.scrollListener()
    })
  },
  methods: {
    onShortcutTouchStart (event) {
      // 点击的快速入口的li
      let current = event.target
      // 拿到点击的索引
      let index = current.getAttribute('data-index')
      // 遍历各个城市的li(每个li里面嵌套了title和ul(里面是该城市的歌手))
      for (let liIndex in this.citylist) {
        // 如果点击的这个快速入口的索引和
        if (liIndex === index) {
          let height = this.citylist[liIndex].offsetTop - this.headerHeight
          window.scrollTo(0, height)
        }
      }
    },
    scrollListener () {
      let _self = this
      let timeout
      window.addEventListener('scroll', function () {
        if (timeout) {
          clearTimeout(timeout)
        }
        // 事件节流
        timeout = setTimeout(callback(_self), 100)
      })
      function callback (_self) {
        for (let index = 0; index < _self.citylist.length; index++) {
          // 把标题那一行给拿出来,h2
          let title = _self.citylist[index].getElementsByTagName('h2')[0]
          let titleTop = title.offsetTop - (document.body.scrollTop || document.documentElement.scrollTop)
          let currentli = _self.quicknavlist[index]
          if (currentli) {
            if (titleTop >= _self.headerHeight && titleTop <= document.documentElement.clientHeight) {
              currentli.style.color = 'white'
              if (_self.quicknavlist[index - 1].style.color === 'white') {
                _self.quicknavlist[index - 1].style.color = 'black'
              }
              if (_self.quicknavlist[index + 1].style.color === 'white') {
                _self.quicknavlist[index + 1].style.color = 'black'
              }
              break
            }
          }
        }
      }
    },
    // 点击歌手，跳转到该歌手的歌单页面
    // 这里派发了事件
    selectItem (item) {
      this.$emit('select', item)
    }
  }
}
</script>

<style>
  .title{
    height: 2rem;
    background-color: darkorange;
    color: whitesmoke;
    padding: 0.25rem 1rem;
    line-height: 2rem;
    margin-bottom: 0.5rem;
  }
  .singerPic{
    width: 5rem;
    border-radius: 50%;
  }
  .singer_item{
    padding: 0.5rem 1rem;
    position:relative;
  }
  .singer_name{
   color: white;
    margin-left: 2rem;
    position: absolute;
    bottom: 50%;
    transform: translate(0,50%);
  }
  .shortpart{
    position: fixed;
    top:50%;
    right:0;
    transform: translate(0,-25%);
    width:4rem;
    text-align: center;
  }
  .shortitem{
    margin: 1rem 0;
    color: black;
    font-size: 12px;
  }
</style>
