<template>
  <div>
      <h3>这是父组件</h3>
      <son>实践slot
        <template slot="myslot">
          <div>实践具名slot</div>
       </template>

       <template slot="myslot2" slot-scope="scope">
        <ul>
          <li v-for="item in scope.data">{{item.name}} -- {{item.age}}</li>
        </ul>
      </template>
      </son>
  </div>
</template>
<script>
// https://www.cnblogs.com/passkey/p/14291370.html#
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
