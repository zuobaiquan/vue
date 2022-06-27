<template>
  <!--
  <div class="home">
    <h3>{{data.count}}</h3>
    <h4>{{data.double}}</h4>
    <button @click="data.increase">+1</button>
  </div>
  -->
  <div class="home">
    <h3>{{ count }}</h3>
    <h4>{{ double }}</h4>
    <button @click="increase">+1</button>

    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
    <p>{{ person.name }}</p>

    <button @click="updateGreeting">{{ greeting }}1</button>
    <p @click="changeObj">newObj：{{newObj}}</p>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRef, toRefs, watch, watchEffect } from 'vue'
interface DataProps {
  count: number
  double: number
  increase: () => void
  numbers: number[]
  person: {
    name?: string
  }
}
export default {
  name: 'Reactive',
  setup () {
    // 当在setup，声明变量时，如果不加上ref或者reactive之后，变量是不会响应变化的
    // 而toRefs是为了在输出，引入的时候更方便用解构而不破坏响应式

    const data:DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++
      },
      // 测试vue2 响应式 盲区
      numbers: [1, 2, 3],
      person: {}
    })
    data.numbers[0] = 100
    data.person.name = 'zuobaiquan'

    const greeting = ref('test')
    const updateGreeting = () => {
      data.count = 5555
      greeting.value += 'abs'
    }
    watch(data, (val) => {
      console.log('val11', val.count)
    })
    // watch 只能监听响应性数据 reactive 和 ref 定义的值，若要监听一个单一的值，需要传递相应值的 getter 函数  (类似 () => data.count)
    // watchEffect 不能监听 reactive 和 ref 定义的值，只能监听其对应的具体的值(响应单一的值)
    watchEffect(() => {
      console.log('watchEffect 执行了')
      // console.log('data123456', data.count)
      console.log('data123456', greeting.value)
    })
    // watch(greeting, (newVal, oldVal) => {
    //   console.log('newVal', newVal);
    //   console.log('oldVal', oldVal);
    //   document.title = 'update' + greeting.value;
    // });
    // 监听多个，第一个参数可以是数组
    // 监听 count 值 不能这么写[greeting, data.count] 提示 A watch source can only be a getter/effect function
    // 必须是 响应式对象 [greeting, () => data.count]
    // https://blog.51cto.com/u_15302032/5323971
    watch([greeting, () => data.count], (newVal, oldVal) => {
      console.log('newVal', newVal)
      console.log('oldVal', oldVal)
      document.title = 'update' + greeting.value
    })
    // 下面这种写法无法更新数据
    // return {
    //   ...data
    // }

    // toRef是将个对象 A 中的某个属性 x 转换为响应式数据，
    // 其接收两个参数，第一个参数为对象 A，第二个参数为对象中的某个属性名 x。
    const obj = { name: 'zuo', age: 12 }
    const newObj = toRef(obj, 'name')
    const changeObj = () => {
      newObj.value = 'Tom'
      console.log('newObj', newObj.value)
      // newObj值会改变，但不更新UI
    }

    // 响应式 toRefs
    // 可以将reactive()创建出来的响应式对象,转换为普通对象
    return {
      ...toRefs(data),
      greeting,
      updateGreeting,
      newObj,
      changeObj
    }
  }
}
</script>
