/*
 * @Descripttion: 请填写简介
 * @Author: armin
 * @Date: 2022-01-18 14:00:26
 * @LastEditors: armin
 * @LastEditTime: 2022-01-18 14:02:35
 */
import {App} from 'vue'
import trend from './src/index.vue'

// 让这个组件可以通过 use 的形式使用
export default {
  install(app:App) {
    app.component('m-trend', trend)
  }
}