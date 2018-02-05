<template>
  <div class="child02">
      <child-box @transferTabIndex="getTabIndex" ref="childTab"></child-box>
      <div v-show="showIndex==0">我的选项卡1</div>
      <div v-show="showIndex==1">我的选项卡2</div>
      <div v-show="showIndex==2">我的选项卡3</div>
      <button type="button" name="button" @click="tabToThree">点击这里切换到选项卡3</button>
  </div>
</template>
<script>
import childBox from './child.vue'
export default {
  name: 'child02',
  data () {
    return {
      showIndex:0
    }
  },
  components:{
    'child-box':childBox
  },
  methods:{
    getTabIndex(index){
      this.showIndex=index;
    },
    tabToThree(){
      this.$refs.childTab.handelSwitch(2);
    }
  }
}
</script>
