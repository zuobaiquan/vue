import Vue from 'vue'
import App from './App.vue'

//按需加载
import {Button,Switch,Rate,Loading} from 'element-ui'
Vue.use(Button);
Vue.use(Switch);
Vue.use(Rate);
Vue.use(Loading);

//Tabs依赖于TabPane
import {TabPane,Tabs} from 'element-ui'
Vue.use(TabPane);
Vue.use(Tabs);

new Vue({
  el: '#app',
  render: h => h(App)
})
