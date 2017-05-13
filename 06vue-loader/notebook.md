## vue-loader

vue-loader基于webpack

broserify  模块加载，只能加载js

webpack   模块加载器， 一切东西都是模块, 最后打包到一块了

简单的目录结构:

```javascript
|-index.html
|-main.js	入口文件
|-App.vue	vue文件，官方推荐命名法
|-package.json	工程文件(项目依赖、名称、配置)
	npm init --yes 生成
|-webpack.config.js	webpack配置文件
```
说明

.vue文件：放置的是vue组件代码


```html
	<template>
		html
	</template>
	
	<style>
		css
	</style>
	
	<script>
		js	（平时代码、ES6）	babel-loader
	</script>
```
ES6: 模块化开发

	导出模块：
		export default {}
	引入模块:
		import 模块名 from 地址
webpak准备工作:

	cnpm install webpack --save-dev
	cnpm install webpack-dev-server --save-dev
	
	App.vue	-> 变成正常代码		vue-loader@8.5.4
	cnpm install vue-loader@8.5.4 --save-dev
	
	cnpm install vue-html-loader --save-dev
	
	vue-html-loader、css-loader、vue-style-loader、
	vue-hot-reload-api@1.3.2
	
	babel-loader
	babel-core
	babel-plugin-transform-runtime
	babel-preset-es2015
	babel-runtime










