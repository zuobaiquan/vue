<template>
  <div>
      <h4>这是子组件</h4>
      <input type="text" placeholder="请输入">
      <slot></slot>
      <slot name="slot1" :data="list"></slot>
  </div>
</template>
<script>
export default {
  name: 'SlotSon',
  data(){
    return {
      list:[
        {name:"Tom",age:15},
        {name:"Jim",age:25},
        {name:"Tony",age:13}
      ]
    }
  },
  created(){
    
  }
}
</script>
<style media="screen" lang="scss">

</style>

<!-- 
        子组件中的实践slot是显示不出来的。如果需要让他显示出来，这时我们就可以用到插槽slot

        这里面slot是没有名称的，这是插槽中的默认插槽。
       -->
       <slot></slot>

       
       <slot name="myslot"></slot>

       <!-- slot-scope是作用域插槽 -->

       <slot name="myslot2" :data='list'></slot>

       <!-- 首先，在子组件中的插槽上有一句data="list"，而在父组件中也有slot-scope="scope"，slot-scope就是取data的值，slot-scope的值是自定义的，我们可以取任何名称，但是data的值传过来时是以对象形式传输的，所以在这scope.data才是list的值。

       这样我们就可以在父组件中取到子组件的值，并且加以应用了。 -->