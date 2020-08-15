<template>
  <div>
    <ul ref="ul1">
        <li v-for="(item, index) in list" :key="index">
            {{item}}
        </li>
    </ul>
    <button @click="addItem">添加一项</button>
  </div>
</template>

<script>

// 注意：

// Vue是 异步渲染 

// data 改变，dom不会 立马 渲染

//$nextTick 会在DOM渲染之后触发，以获取最新的DOM节点

export default {
  name: 'app',
  data() {
      return {
        list: ['a', 'b', 'c']
      }
  },
  methods: {
    addItem() {
        this.list.push(`${Date.now()}`)
        this.list.push(`${Date.now()}`)
        this.list.push(`${Date.now()}`)

        const ulElem = this.$refs.ul1
        console.log("使用nextTick之前",ulElem.childNodes.length )    
        // 1. 异步渲染，$nextTick 待 DOM 渲染完再回调
        // 3. 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次
        this.$nextTick(() => {
          // 获取 DOM 元素
          console.log("使用nextTick之后",ulElem.childNodes.length )
        })
    }
  }
}
</script>