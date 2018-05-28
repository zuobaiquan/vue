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
    //this.arrInfo[0]={'name':'zuobaiquan02','age':22}
    //正确做法
    //this.arrInfo[0].name='zuobaiquan02'
    //this.arrInfo[0].age=23
    //
    //正确做法二 通过splice()方法，删除某个元素后，再添加一个元素，达到“赋值”的效果：
    // var newArrItem={'name':'zuobaiquan02','age':24}
    // this.arrInfo.splice(0, 1, newArrItem);

    //正确做法三 利用vue内置属性 set
    var newArrItem={'name':'zuobaiquan02','age':24}
    this.$set(this.arrInfo,0,newArrItem)
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
