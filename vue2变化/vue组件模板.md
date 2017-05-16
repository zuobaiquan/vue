到了2.0以后，有哪些变化?



1. 在每个组件模板，不在支持片段代码
 组件中模板:
 ```javascript
 Vue.component('my-aaa',{
 	template:'<div><h3>我是h3标题</h3><strong>我是加粗标签</strong></div>'
     //错误写法  template:'<h3>我是h3标题</h3><strong>我是加粗标签</strong>'
 })
 new Vue({
 	el: "#box",
 	data:{
 		msg:'zuobaiquan',
 	},
 })
 //在每个组件模板，不在支持片段代码
 //必须有根元素，包裹住所有的代码
 ```





