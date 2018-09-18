<!--这是轮播图组件-->
<template>
  <div class="slider" ref="slider">
    <ul class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </ul>
    <div class="dots">
      <span class="dot" v-for="(item,index) in dots" v-bind:key="index" v-bind:class="{active:currentPageIndex===index}">
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BetterScroll from 'better-scroll'

export default{
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  // 我们可以为组件的 prop 指定需求
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  // mounted钩子函数中可以获取真实DOM
  mounted () {
    // 在数据变化后等待Vue完成Dom更新,该方法表示真实DOM更新完成
    this.$nextTick(function () {
      this._setSliderGroupWidth()
      this._InitDots()
      this._InitSlider()
      if (this.autoPlay) {
        this._play()
      }
    })

    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      // 因为在后面调用_setSliderGroupWidth方法的时候，li已经成了7个，
      // 这个时候需要一个标记，表示ul不需要再加2个宽度
      this._setSliderGroupWidth(true)
      this.slider.refresh()
    })
  },
  destroyed () {
    clearTimeout(this.timer)
  },
  methods: {
    // 设置ul的宽度
    _setSliderGroupWidth (isResize) {
      // 获取屏幕的宽度
      let clientwidth = this.$refs.slider.clientWidth
      console.log(clientwidth)
      // 给li去设置宽度,li的宽度就是占满屏幕的宽度
      this.sliderli = this.$refs.sliderGroup.children
      for (let i = 0; i < this.sliderli.length; i++) {
        this.sliderli[i].style.width = clientwidth
        this.sliderli[i].getElementsByTagName('img')[0].style.width = clientwidth + 'px'
      }
      // ul的宽度就是所有li宽度的和
      let sliderGroupwidth = clientwidth * this.sliderli.length
      // 如果说是双向循环，那么需要加两个，作为切换
      if (this.loop && !isResize) {
        sliderGroupwidth += 2 * clientwidth
        console.log(sliderGroupwidth)
      }
      // 设置slider-group的宽度
      this.$refs.sliderGroup.style.width = sliderGroupwidth + 'px'
    },
    // 使用BetterScroll初始化滚动
    _InitSlider () {
      this.slider = new BetterScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        }
      })
      // 翻页后的回掉函数去设置当前页的索引，用于dot的改变
      this.slider.on('scrollEnd', () => {
        this.currentPageIndex = this.slider.getCurrentPage().pageX
        if (this.autoPlay) {
          this._play()
        }
      })
    },
    // 初始化点
    _InitDots () {
      this.dots = new Array(this.sliderli.length)
    },
    // 设置自动轮播
    _play () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slider.next()
      }, this.interval)
    }
  }
}
</script>
<style>
  .slider-group:after{
    display: block;
    clear: both;
    content: ' ';
  }
  .slider-group li{
    float:left;
  }
  .slider{
    overflow: hidden;
    position: relative;
  }
  .dots{
    position: absolute;
    bottom: 10px;
    left:50%;
    transform: translate(-50%,0);
  }
  .dot{
    display: inline-block;
    width:6px;
    height: 6px;
    background-color:gray;
    border-radius: 50%;
    margin: 0 5px;
  }
  .active{
    background-color:white;
  }

</style>
