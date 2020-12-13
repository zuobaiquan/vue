<!--
新增的钩子函数
onRenderTracked  检查哪个 reactive 对象属性或一个 ref 作为依赖被追踪。当render函数被调用时，会检查哪个响应式数据被收集依赖
onRenderTriggered 当执行update操作时，会检查哪个响应式数据导致组件重新渲染。
-->

<template>
  <div class="home">
    <img
      style="width:695px;height:319px;"
      :src="require('@/assets/lifecircle.jpg')"
    />
    <h4>{{ double }}</h4>
    <button @click="increase">+1</button>

    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
    <p>{{ person.name }}</p>
  </div>
</template>

<script lang="ts">
import { computed, reactive, toRefs, onMounted, onUpdated } from 'vue'
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: {
    name?: string;
  };
}
export default {
  name: 'Reactive',
  setup () {
    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    const data: DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++
      },
      // 测试vue2 响应式 盲区
      numbers: [1, 2, 3],
      person: {},
    })
    data.numbers[0] = 100
    data.person.name = 'zuobaiquan'
    //下面这种写法无法更新数据
    // return {
    //   ...data
    // }

    // 响应式 toRefs
    // 可以将reactive()创建出来的响应式对象,转换为普通对象
    return {
      ...toRefs(data),
    }
  },
}
</script>
