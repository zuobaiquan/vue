<template>
  <div id="app">
      <el-button type="primary">主要按钮</el-button>
      <el-button type="danger">主要按钮</el-button>
      <el-button type="info" icon="close">主要按钮</el-button>
      <el-button type="success" icon="edit">主要按钮</el-button>
      <el-button type="warning" icon="search">主要按钮</el-button>

      <span class="el-icon-delete"></span>
      <span class="el-icon-loading"></span>

      <el-row>
          <el-col :span="12">
              <div class="my-grid"></div>
          </el-col>
          <el-col :span="12">
              <div class="my-grid"></div>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="8">
              <div class="my-grid">
                  <myDate></myDate>
              </div>
          </el-col>
          <el-col :span="8">
              <div class="my-grid"></div>
          </el-col>
          <el-col :span="8">
              <div class="my-grid"></div>
          </el-col>
      </el-row>

     {{msg}}
  </div>
</template>

<script>
//引入Date组件
import myDate from './components/Date.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      myDate
  }
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@color:red;
.height(@h){
    height:@h;
}
.my-grid{
    .height(50px);
    border:1px solid @color;
}
</style>
