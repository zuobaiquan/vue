<template>
  <ul class="tab-list">
    <li class="tab-li"
      v-for="(item, index) in tabItem"
      v-html="item"
      :class="{active: index === actIndex}"
      @click="handelSwitch(index)"
    >
    </li>
  </ul>
</template>
<script>
export default {
  name: 'child02',
  data(){
    return {
      tabItem:['选项一','选项二','选项三'],
      actIndex:0
    }
  },
  methods:{
    handelSwitch(index){
      this.actIndex=index;
      this.$emit("transferTabIndex",this.actIndex)
    }
  }
}
</script>
<style media="screen" lang="scss">
.tab-list{
  list-style: none;
  .tab-li{
    height: 25px;
    line-height: 25px;
    display: inline-block;
    color: #333333;
    text-align: center;
    padding: 0 20px;
    &.active{
      color: #409eff;
    }
  }
}
</style>
