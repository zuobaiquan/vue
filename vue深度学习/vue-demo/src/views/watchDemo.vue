<template>
  <div class="watchViews">
    <input v-model="name"/>
    <input v-model="info.name"/>
    <input v-model="searchInput"/>

    <input v-model="test1"/>
    <input v-model="test2"/>

  </div>
</template>

<script>
export default {
  name: 'watchViews',
  data () {
    return {
      name:'zuozuozuo',
      info:{
        name:'zuobaiquan'
      },
      searchInput:'',

      test1:'',
      test2:'',

    }
  },
  watch: {
    name(oldVal, val) {
        console.log('watch name', oldVal, val) // 值类型，可正常拿到 oldVal 和 val
    },
    info:{
      handler(newVal,oldVal){
        console.log('newVal',newVal,'oldVal',oldVal)
        // 注意  引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val
      },
      deep:true
    },
    //immediate 默认为false 如果为true 代表如果在 wacth 里声明了之后，就会立即先去执行里面的handler方法
    searchInput:{
      //使用watch值是对象的第三种情况
			handler:"getList",//简写
			immediate:true
      //getList里面通过searchInput去搜索数据库
      
      //初始化立即执行，这样我们就可以在created中去掉this.getList()了
    },
    
    // watch同时监听多个值的变化
    changeData: {
      handler: function (newval, oldval) {
        console.log('changeData',newval)
      },
      deep: true
    }

  },
  computed: {
    changeData() {
      const { test1, test2 } = this
      return {
        test1,
        test2,
      }
    }
  },
  methods: {
    getList(){
      console.log('request Data!!!')
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped> 
input{
  margin:10px 40px;
  display: block;
  height: 32px;
  line-height: 32px;
}
</style>
