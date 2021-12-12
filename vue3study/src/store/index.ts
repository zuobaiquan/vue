import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  // mutations 必须是同步函数
  mutations: {
    add(state) {
      state.count++
    }
  },
  // Action 类似mutation，不同在于：
  // Action 提交的是mutation，而不是直接变更状态
  // Action 可以包括任何异步操作
  actions: {
  },
  modules: {
  }
})

// state 驱动应用的数据，全局共享的数据
// view 已声明的方式将state映射到视图
// action 响应在view上的用户输入导致的状态变化

// vuex 特点
// 状态存储是响应式
// 不能直接改变store中的状态，唯一的途径就是显式地提交 mutation
