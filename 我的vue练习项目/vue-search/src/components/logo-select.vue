<template>
  <div class="main-logo">
    <img class="logo" :src="logoData[selectedNow].imgSrc">
    <span class="logoList-arrow" @click="toggleFlag"></span>

    <transition name="lagofade">
      <ul class="logoList" v-show="logoListFlag">
        <li v-for="(item, index) in logoData" @click="logoSelected(index)">
          <img :src="item.imgSrc">
        </li>
      </ul>
    </transition>
  </div>
</template>

<script type="text/javascript">
// export defult是es6中的方法，将整个花括号对象暴露出去;
export default {
  data: function() {
    return {
      selectedNow: 0,
      logoListFlag: false,
      logoData: [
        {
          imgSrc: require('../assets/360_logo.png')
        },
        {
          imgSrc: require('../assets/baidu_logo.png')
        },
        {
          imgSrc: require('../assets/sougou_logo.png')
        }
      ]
    }
  },
  methods: {
    toggleFlag: function() {
      this.logoListFlag = !this.logoListFlag;
    },
    logoSelected: function(index) {
      this.selectedNow = index;
      this.logoListFlag = false;

      // 触发父组件的自定义事件，向父组件传参数,selectNow是选择了哪个搜索引擎的索引，父组件得到了之后就可以指定搜索时跳转到哪个搜索引擎
      this.$emit('getindex', this.selectedNow);
    }
  }
}
</script>
<style type="text/css" scoped>
  .main-logo {
    position: relative;
  }
  .logo {
    display: block;
    margin: 0 auto;
  }
  .logoList-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid;
    border-color: #000 transparent transparent transparent;
    right: 300px;
    top: 66px;
    cursor: pointer
  }
  ul {
    background-color: #fff;
    width: 220px;
    margin: 0 auto;

    position: absolute;
    z-index: 99999;
    left: 40%;
    top: 85%;
  }
  ul li img {
    width: 220px;
    display: block;
    padding: 10px 0;
  }
  ul li img:hover {
    background-color: #eee;
    cursor: pointer;
  }
.logofade-enter-active,
.logofade-leave-active {
    transition: all .5s;
}

.logofade-enter,
.logofade-leave-active {
    opacity: 0;
    transform: translateY(20px);
}
</style>
