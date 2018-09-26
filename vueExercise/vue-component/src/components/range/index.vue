<template>
  <div class="range-container">
    <div class="base_range_div"></div>
    <div class="now_range_div" id="nowRange"></div>
    <div class="base_text_div left_text_div" :class="{check_text_div:leftClick}" id="leftText"
       @touchstart.stop.prevent="leftTextTouchStart"
       @touchmove.stop.prevent="leftTextTouchMove"
       @touchend.stop.prevent="leftTextTouchEnd">
       {{leftText}}
    </div>
    <div class="base_text_div right_text_div" :class="{check_text_div:rightClick}" id="rightText"
       @touchstart.stop.prevent="rightTextTouchStart"
       @touchmove.stop.prevent="rightTextTouchMove"
       @touchend.stop.prevent="rightTextTouchEnd">
       {{rightText}}
    </div>
    <div class="base_text_div left_bottom_div" id="leftImg">
      <span
        @touchstart.stop.prevent="leftTextTouchStart"
        @touchmove.stop.prevent="leftTextTouchMove"
        @touchend.stop.prevent="leftTextTouchEnd"></span>
    </div>
    <div class="base_text_div right_bottom_div" id="rightImg">
      <span
        @touchstart.stop.prevent="rightTextTouchStart"
        @touchmove.stop.prevent="rightTextTouchMove"
        @touchend.stop.prevent="rightTextTouchEnd"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myRange',
    data() {
      return {
        leftClick: false,
        rightClick: false,
        rangeWidth: '',
        leftWidth: 0,
        rightWidth: 0,
      }
    },
    mounted() {
      this.rangeWidth = document.body.clientWidth * 0.9;
    },
    methods: {
      leftTextTouchStart() {
        this.leftClick = true;
      },
      leftTextTouchMove(e) {
        let clientX = e.changedTouches[0].clientX;
        console.log(e.changedTouches[0]);
        if (clientX >= 0) {
          if (this.left + this.right <= this.rangeWidth) {
            this.leftWidth = clientX;
            document.querySelector("#nowRange").style.left=this.left+'px'
            document.querySelector("#nowRange").style.width=this.width+'px'
            document.querySelector("#leftText").style.left=this.left+'px'
            document.querySelector("#leftImg").style.left=this.left+'px'
            this.$emit('leftChange', this.leftText);
          }
        }
      },
      leftTextTouchEnd() {
        this.leftClick = false;
      },
      rightTextTouchStart() {
        this.rightClick = true;
      },
      rightTextTouchMove(e) {
        let clientX = e.changedTouches[0].clientX;
        if (clientX <= this.rangeWidth) {
          this.rightWidth = this.rangeWidth - clientX;
          if (this.left + this.right <= this.rangeWidth) {
            document.querySelector("#nowRange").style.right=this.right+'px'
            document.querySelector("#nowRange").style.width=this.width+'px'
            document.querySelector("#rightText").style.right=this.right+'px'
            document.querySelector("#rightImg").style.right=this.right+'px'
            this.$emit('rightChange', this.rightText);
          }
        }
      },
      rightTextTouchEnd() {
        this.rightClick = false;
      }
    },
    computed: {
      width() {
        return Math.min(Math.max(0, this.rangeWidth - this.leftWidth - this.rightWidth), this.rangeWidth)
      },
      left() {
        return Math.max(this.leftWidth, 0)
      },
      right() {
        if (this.left + this.rightWidth <= this.rangeWidth) return Math.max(this.rightWidth - 0.5, 0)
      },
      leftText() {
        let num = parseInt(this.left / this.rangeWidth * 100);
        if (num === 0 || isNaN(num)) return '不限';
        return num + 'k';
      },
      rightText() {
        if (this.rangeWidth === 0) return '不限';
        let num = parseInt((this.rangeWidth - this.right) / this.rangeWidth * 100);
        if (num >= 0) {
          if (num === 100) return '不限';
          return num + 'k';
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .range-container {
    width: 90%;
    margin: 1rem auto;
    position: relative;
    .base_range_div {
      width: 100%;
      height: 1rem;
      background: #dedede;
    }
    .now_range_div {
      position: absolute;
      height: 1rem;
      background: green;
      width: 100%;
      left: 0;
      top: 0;
    }
    .base_text_div {
      position: absolute;
      color: #fff;
      padding: 0.2rem;
      span {
        width:15px;
        height: 19px;
        display: inline-block;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAMAAAB4HKeYAAAAV1BMVEUAAAARqYMRqoMRqIMRqYQPrIgRqYQRq4gRqYMRqYMRqYIRqYMRp38RqYURqYMRqYMRqYMSpn4Rp4ARqIERqYMQq4UQqYIQp4QQrIoRsZERqYMRqIERqoPVJ/D8AAAAGnRSTlMAQ5De101JNfrt5bGkaUQ/KL28hYJ2djEUEhhAvvcAAABqSURBVBjTrc/JEYNAEENRMSs7eLe7O/84zdSIggD4J72jUHOdw9H3ZqL3384cVEQsfCpjp1LSPhZOKkxtAh5ypPpEa3KqRRzdQAxuTNha6RW1hV7omZ7phm4ucqITnesjy2Cv3gfv32X+AU+nDyDGtXrlAAAAAElFTkSuQmCC) 0 0/100% 100% no-repeat;
      }
    }
    .left_text_div{
      left: 0;
      top: 50%;
      transform: translate(-50%,-50%);
      background: green;
    }
    .check_text_div {
      background: #e0620d !important;
      padding: 0.08rem 0.2rem;
    }
    .right_text_div{
      right: 0;
      top: 50%;
      transform: translate(50%,-50%);
      background: green;
    }
    .left_bottom_div{
      top: 1.2rem;
      left: 0;
      transform: translateX(-50%);
    }
    .right_bottom_div {
      top:1.2rem;
      transform: translateX(50%);
      right: 0;
    }
  }
</style>
