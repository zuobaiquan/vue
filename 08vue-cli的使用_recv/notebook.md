## vue-cli——vue脚手架

作用：帮我们提供好基本项目结构

本身集成很多项目模板:

```javascript
simple		个人觉得一点用都没有
webpack	可以使用(大型项目)
		Eslint 检查代码规范(强制空格，分号，缩进等，否则报错)
		单元测试
webpack-simple	个人推荐使用, 没有代码检查，没有单元测试	√

browserify	
browserify-simple
```

基本使用流程:
1. npm install vue-cli  -g	安装 vue命令环境
 验证安装ok?
 ```javascript
 vue --version
 ```
2. 生成项目模板

 ```javascript
 vue init <模板名> 本地项目名称
 ```
3. 进入到生成目录里面

 ```javascript
 cd xxx  //进入项目目录

 npm install
 ```
4. npm run dev