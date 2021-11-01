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
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, watch } from 'vue'
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
    const data: DataProps = reactive({
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

    const greeting = ref('welcome...')
    const updateGreeting = () => {
      greeting.value += 'welcome!!!'
    }
    // watch(greeting, (newVal, oldVal) => {
    //   console.log('newVal', newVal);
    //   console.log('oldVal', oldVal);
    //   document.title = 'update' + greeting.value;
    // });
    // 监听多个，第一个参数可以是数组
    // 监听 count 值 不能这么写[greeting, data.count] 提示 A watch source can only be a getter/effect function
    // 必须是 响应式对象 [greeting, () => data.count]
    watch([greeting, () => data.count], (newVal, oldVal) => {
      console.log('newVal', newVal)
      console.log('oldVal', oldVal)
      document.title = 'update' + greeting.value
    })
    // 下面这种写法无法更新数据
    // return {
    //   ...data
    // }

    // 响应式 toRefs
    // 可以将reactive()创建出来的响应式对象,转换为普通对象
    return {
      ...toRefs(data),
      greeting,
      updateGreeting
    }
  }
}
</script>
