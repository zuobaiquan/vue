## vue-loader

vue-loader基于webpack

broserify  模块加载，只能加载js

webpack   模块加载器， 一切东西都是模块, 最后打包到一块了

简单的目录结构:

```javascript
|-index.html
|-main.js	入口文件
|-App.vue	vue文件，(大写)官方推荐命名法
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
	
	App.vue	-> 变成正常代码		vue-loader
	cnpm install vue-loader --save-dev
	
	cnpm install vue-html-loader --save-dev
	
	vue-html-loader、css-loader、vue-style-loader、vue-hot-reload-api
	
	babel-loader
	babel-core
	babel-plugin-transform-runtime
	babel-preset-es2015
	babel-runtime

```javascript
//没有创建 package.json 文件的话，可以直接使用 npm init --yes 来初始化 package.json 文件的配置。
//注意：在实际项目中，json文件中不能出现注释
{
  "name": "06vue-loader",//项目名称
  "version": "1.0.0",//版本
  "description": "",//描述
  "main": "main.js",  // //主文件main.js
  "scripts": {
    "dev": "webpack-dev-server --inline --hot --port 8085",  //代码调试，运行inline模式，并启用热模块替换
    "build":"webpack -p"   //文件打包，运行 npm run build  生成build.js压缩文件
    //scripts指定了运行脚本命令的npm命令行缩写，比如这是的dev指定了运行npm run dev时，所要执行的命令。
  },
  "keywords": [],//关键字
  "author": "",//作者
  "license": "ISC",//开源协议
  "devDependencies": {//各种各样的loader，用来解析想相应的文件格式。要解析vue并且完成相应的功能，这些基本都是必须的。
    "babel-core": "^6.24.1",
    "babel-loader": "^6.4.1",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-runtime": "^6.23.0",
    "css-loader": "^0.28.1",
    "vue-hot-reload-api": "^1.3.2",
    "vue-html-loader": "^1.2.4",
    "vue-loader": "^8.5.4",
    "vue-style-loader": "^1.0.0"
  },
  "dependencies": { ////项目依赖
    "vue": "^1.0.28"
  }
}
//如果想省事的话，直接复制上面的 devDependencies , dependencies 字段，并且填写到 package.json 文件中。然后运行 npm install 就会自动安装所有的模块以及依赖。
```








