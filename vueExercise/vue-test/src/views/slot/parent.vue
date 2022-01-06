<template>
  <div>
      <h3>这是父组件</h3>
      <son>slot学习

        <template slot="slot1" slot-scope="scope">
          <div>slot 具名插槽</div>
          <ul>
            <li v-for="item in scope.data" :key="item.name">{{item.name}} -- {{item.age}}</li>
          </ul>
        </template>
      </son>
  </div>
</template>
<script>
import son from './son.vue'
export default {
  name: 'SlotName',
  components:{
    son
  },
  data(){
    return {
      
    }
  },
  created(){
    
  }
}
</script>
<style media="screen" lang="scss">

</style>

<!-- <son>slot学习
        <template slot="myslot">
          <div>slot学习 具名slot</div>
       </template>

       <template slot="myslot2" slot-scope="scope">
        <ul>
          <li v-for="item in scope.data" :key="item.name">{{item.name}} -- {{item.age}}</li>
        </ul>
      </template>
      </son> -->