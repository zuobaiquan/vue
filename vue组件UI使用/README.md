# UI组件

``` bash
# install dependencies
npm install

#如果需要用bootstrap组件库
bower install bootstrap

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

UI组件----别人提供好一堆东西

目的: 为了提高开发效率

原则: 拿过来直接使用



bower	前端包管理器	   自动解决依赖

npm	node包管理器



### 1.bootstrap

```bash
twitter	开源
简洁、大方
官网文档

基于 jquery

栅格化系统+响应式工具  (移动端、pad、pc)
按钮
...
```
>饿了么团队开源一个基于vue 组件库
>
>elementUI	PC
>MintUI		移动端

### 2.elementUI

官网：http://element.eleme.io/

使用：

1. 安装 element-ui

  ```bash
  npm i element-ui -D
  #等价于  npm install element-ui --save-dev

  #命令简写说明
  //   i	->    install
  //   D     ->    --save-dev
  //   S	->    --save
  ```

  2.引入   main.js入口文件

```javascript
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
```
3.使用组件

Vue.use(ElementUI)

```bash
css-loader  	引入css
npm install css-loader style-loader -D
#字体图标	file-loader
#支持less  
npm install less less-loader -D
#在webpack-config.js中配置
{test: /\.less$/,loader: 'less-loader'},
```

按需加载相应组件:	√

比如 我就需要 按钮

1. babel-plugin-component
  cnpm install babel-plugin-component -D

2. .babelrc文件里面新增一个配置

  ```javascript
  "plugins": [["component", [
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-default"
      }
    ]]]
  ```

3. 想用哪个组件就用哪个
  引入:
  	import {Button,Radio} from 'element-ui'
  使用:
  	a). Vue.component(Button.name, Button);  个人不太喜欢
  	b). Vue.use(Button);   √
  详细参考：http://element.eleme.io/#/zh-CN/component/quickstart

4. 交互

   发送请求:

   	vue-resourse

   ```bash
   axios
   ```

​       更多学习资料 https://github.com/mzabriskie/axios