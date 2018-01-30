<template>
    <div class="wrap">
<!--         getindex是自定义事件，这里用来父子组件的传参（接受具体的那一个搜索引擎） -->
        <logo-select @getindex='getIndex'></logo-select>
        <div class="search-input">
            <input v-model="keyword" type="text" @keyup="get($event)" @keydown.down="selectDown()" @keydown.up="selectUp()" @keydown.enter="search()">
            <span class="search-reset" @click="clearInput">&times;</span>
            <button @click="search()">搜一下</button>
            <!-- transition-group也是vue2.0中的新特性,tag='ul'表示用ul包裹v-for出来的li -->
            <div class="search-select-list">
              <transition-group name="itemfade" tag="ul" mode="out-in" v-cloak>
                <li @click="selectClick(index)" v-for="(value, index) in myData" :class="{active:index == now}" :key="value" class="search-select-list" >{{value}}</li>
              </transition-group>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import logoSelect from './logo-select';

export default {
  // 注册组件
  components: {
    'logo-select': logoSelect
  },
  data: function() {
    return {
      myData: [],  // 存放用ajax获取的数据
      keyword: '',
      now: -1,
      searchIndex: 0,
      logoData: [
        {
          name: '360搜索',
          searchSrc: 'https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q='
        },
        {
          name: '百度搜索',
          searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
        },
        {
          name: '搜狗搜索',
          searchSrc: 'https://www.sogou.com/web?query='
        }]
      }
    },
    methods: {
      // 键盘下事件
      selectDown: function() {
        this.now++;

        if (this.now == this.myData.length) {
          this.now = 0;
        }
        this.keyword = this.myData[this.now]; // 更新input里面的文字
      },
      // 键盘上事件
      selectUp: function() {
        this.now--;

        if (this.now < 0) {
          this.now = 0;
        }
        this.keyword = this.myData[this.now];
      },
      // ajax请求
      get: function(ev) {
        // 如果按的是上键或者下键，就不进行ajax请求
        if (ev.keyCode == 38 || ev.keyCode == 40) {
          return;
        }
        // 跨域请求
        this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
          this.myData = res.data.s;
        });
      },
      search: function() {
        //打开对应的搜索界面
        window.open(this.logoData[this.searchIndex].searchSrc + this.keyword);
      },
      clearInput: function() {
        this.keyword = '';
        // 这里也要jsonp获取数据，不然显示框会一直显示着
        this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
            this.myData = res.data.s;
        });
      },
      selectClick: function(index) {
        this.keyword = this.myData[index];
        this.search();
      },
      // 接受子组件的参数？
      getIndex: function(index) {
        this.searchIndex = index;
      }
    }
  }
</script>
<style type="text/css" scoped>
.wrap {
  width: 960px;
  height: auto;
  margin: 0 auto;
  padding-top: 150px;
}
.search-input {
  width: 655px;
  margin: 0 auto;
  z-index: 99;
}
.search-input > input {
  width: 500px;
  height: 45px;
  padding: 0 10px;
  border: 1px solid #eee;
}
.search-input .search-reset {
  font-size: 30px;
  cursor: pointer;

  position: relative;
  left: -45px;
  top: 5px;

}
.search-input button {
  width: 100px;
  height: 49px;
  background-color: #3cbc71;
  color: #fff;
  font-size: 19px;
  border: none;
  cursor: pointer;

  position: relative;
  left: -29px;
  top: 1px;
}
ul {
  background-color: #fff;
  width: 520px;
  border: 1px solid #eee;
}
ul li {
  width: 500px;
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
}
ul li:hover {
  background-color: #eee;
}
.active {
  background-color: #eee;
  cursor: pointer
}

/* transition-group有关的特效样式 */
.search-select-list {
    transition: all 0.5s
}
.itemfade-enter,
.itemfade-leave-active {
    opacity: 0;
}

.itemfade-leave-active {
    position: absolute;
}
</style>
