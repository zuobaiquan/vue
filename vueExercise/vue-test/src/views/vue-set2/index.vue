<template>
    <div class="vue-set">
      <ul>
        <li v-for="(item,index) in arrInfo">{{item.name}}--{{item.age}}</li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'vueset',
  data(){
    return {
      arrInfo:[
        {'name':'zuobaiquan','age':22},
        {'name':'zhangsan','age':20}
      ]
    }
  },
  // created(){
  //   this.arrInfo[0]={'name':'zuobaiquan01','age':22}
  // },
  mounted(){
    this.arrInfo[0]={'name':'zuobaiquan02','age':22}
  },
  methods:{
    handleClick(index){
      // this.arrInfo[index].name='zuobaiquan01'
    }
  }
}
</script>
<style media="screen" lang="scss">
ul{
  li{
    font-size: 16px;
    line-height: 40px;
  }
}
</style>
