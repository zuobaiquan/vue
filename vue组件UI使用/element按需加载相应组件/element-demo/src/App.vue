<template>
  <div id="app">
      <el-button type="primary">主要按钮</el-button>
      <el-switch
          v-model="value1"
          on-text=""
          off-text="">
      </el-switch>
      <div class="block">
          <span class="demonstration">区分颜色</span>
          <el-rate
                  v-model="value2"
                  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
      </div>
      <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
      </template>
      {{msg}}

      <br />

      <el-button @click="getData()">点击获取数据</el-button>
      <div>
          {{msg}}
      </div>

      <el-button @click="getMyinfo()">点击获取我的信息</el-button>
      <div v-loading="loading"
           element-loading-text="拼命加载中">
          {{myinfo}}
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      loading:true,
      msg: 'Welcome to Your Vue.js App',
      myinfo:'',
      value1:true,
      value2:null,
      activeName: 'second'
    }
  },
  //使用声明周期自动获取数据
  mounted(){
    this.getMyinfo();
  },
  methods: {
    handleClick(tab, event){
        console.log(tab, event);
    },
    getData(){
        axios.get('a.txt').then(function (res) {
            console.log(res);
            this.msg=res.data;
        }.bind(this)).catch(function (err) {
            console.log(err);
        });
    },
    getMyinfo(){
        //https://api.github.com/users/zuobaiquan
        axios.get('https://api.github.com/users/zuobaiquan').then(function (res) {
            console.log(res);
            this.myinfo=res.data;
            this.loading=false;
        }.bind(this)).catch(function (err) {
            console.log(err);
        });
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
