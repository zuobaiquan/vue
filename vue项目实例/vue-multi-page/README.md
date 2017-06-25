# Vue 多页面开发

## 概述

使用`vue + webpack + es6` 进行多页面开发

参考的项目

  [vue-cli 生成的项目结构](http://vuejs-templates.github.io/webpack/structure.html)

  [vue-multipage](https://github.com/MeCKodo/vue-multipage)

## 使用方法

```
# 安装
npm install

# 调试环境 serve with hot reload at http://localhost:8080
npm run dev

# 生产环境 build for production with minification
npm run build
```



## 目录结构

```js
|--- build  // 参考vue-cli生成的脚手架
|--- config // 参考vue-cli生成的脚手架
|--- dist // build
	|--- static // 包含 static 和 src/assets 中的静态资源
    	|--- css
        |--- fonts
        |--- js
        |--- img
  	|--- index.html
    |--- cart.html
|--- src
	|--- assets // 静态资源，存放需要被webpack处理的文件(base64...)
    	|--- fonts
        |--- img
	|--- components // 组件，根据业务划分
    	|--- common // 通用组件
        	|--- loading.vue
    	|--- home
            |--- index-info.vue
        |--- shopping
        	|--- shopping-header.vue
        	|--- cart-list.vue
    |--- js
    	|--- lib // 第三方插件，将其样式与文件放一起
        	|--- calendar // 日历插件
            	|--- calendar.js
                |--- calendar.css
       	|--- tools.js
        |--- config.js
		|--- base.js
    |--- scss
    	|--- bootstrap // 基础的样式包
        |--- home
            |--- home.scss 
        |--- shopping
        	|--- _order.scss
            |--- _cart.scss
            |--- shopping.scss
  	|--- module // 各页面
    	|--- shoppingCart 
        	|--- cart.vue 
            |--- cart.js
            |--- cart.html
      	|--- shoppingOrder
        	|--- order.vue
            |--- order.js
            |--- order.html
|--- static // 静态资源
|--- test // 测试文件目录	
```

------

## `static/`  和 `src/assets`

 静态资源管理，具体可以查看

 [Handing Static Assets](http://vuejs-templates.github.io/webpack/static.html)

### `src/components`

存放组件，包括 通用组件及各业务下的组件

```js
|--- components
    |--- home // home 业务模块
        |--- home-header.vue
        |--- index-info.vue
        ...
    |--- shopping  // shopping 业务模块
        |--- buy-list.vue
        ...
     |--- common // 通用组件
        |--- loading.vue
        |--- prompt.vue
```

#### 业务组件

组件类型&&组件命名

> - 当前页面使用的组件:     命名格式 `	 [页面]-[组件].vue` 	
> - 当前业务模块下的公用组件:   命名格式 ` [业务模块]-[组件].vue` 
> - 全业务模块的通用组件： 命令格式 `组件名.vue`   

#### 通用组件

组件样式需添加 `scoped` ，编译时会直接整合到页面的样式中

------

### `src/js`

```js
|--- js	
	|--- lib // 第三方插件，将其样式与文件放一起
		|--- calendar // 日历插件
			|--- calendar.js
			|--- calendar.css
	|--- tools.js  
	|--- conf.js // 配置文件
	|--- base.js
```

#### `base.js` 

```js
// 导入全局依赖的库 vue, jquery
import Vue from 'vue'
import jQuery from 'jquery'
// 导入全局的站点配置文件
import C from './conf';
// 全局的基础UI框架
require('scss/bootstrap/bootstrap.scss')

exports default {Vue, C}
```

配置`base.js`是为了方便统一管理全局需导入的资源， 在build时也利于提取vendor

#### `js/lib`

特定的第三方插件则放在`js/lib/`下， 包括插件的样式文件

------

### `src/scss`

```js
|--- scss
  	|--- bootstrap // 基础的UI框架
    |--- home // 官网业务模块样式
      	|--- _index-info.scss
		|--- home.scss // 整合所有该业务下页面的样式
	|--- shopping
		|--- _cart.scss
		|--- _order.scss
		|--- shopping.scss
```

#### 基础UI框架

在构建时提取为vendor.[contenthash].css 在全页面导入

#### 业务样式

各业务下的页面可能有公有的样式，都整合到一起。这么做主要便于管理

比如 `shopping.scss` 中`@import './cart'；@import './order'`

------

### `src/module`

```js
|--- module // 具体的各页面
	|--- shoppingCart // shopping模块 购物车页面
		|--- cart.vue // 统一管理该页面各组件的状态、数据
		|--- cart.js
        |--- cart.html
	|--- shoppingOrder // shopping模块 订单页面
		|--- order.vue
        |--- order.js
        |--- order.html
```

页面文件夹命名格式 `[业务][页面]` ，包含三个文件`*.vue` `*.js` `*.html`

这样做的原因，主要是为了方便，通过名称就能知道文件的相应关系

以购物车页面为例

```
// cart.vue
<template>
    <div class="shopping-cart-container">
        <h1>{{ msg }}</h1>
        <shopping-banner></shopping-banner>
        <hr>
        <cart-list></cart-list>
    </div>
</template>

<script>
    import ShoppingBanner from '../../components/shopping/shopping-banner.vue'
    import CartList from '../../components/shopping/cart-list.vue'

    export default {
        data () {
            return {
                msg: 'cart page'
            }
        },

        components: {
            'shopping-banner': ShoppingBanner,
            'cart-list': CartList
        }
    }
</script>

========================================================================================
// cart.js
import {Vue} from '../../js/base'
import HeaderNav from '../../components/common/header.vue'
import Cart from './cart.vue'

require('scss/shopping/shopping.scss')

var vm = new Vue({
  el: '#shopping-cart',
    template: '<div><header-nav></header-nav><div class="container"><cart></cart></div>	  </div>',
    components: {
        'header-nav': HeaderNav,
        'cart': Cart
    }
})

========================================================================================
//cart.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <title>购物车</title>
  </head>
  <body>
    <div id="shopping-cart"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```



## 入过的坑及解决办法

### 提取公用模块

坑：不知道怎么把公有的UI库（即 bootstrap.css）提取出来

解决：

```js
 // split vendor js and UI framework into its own file
  new webpack.optimize.CommonsChunkPlugin ({
    name: 'vendor',
    minChunks: function (module, count) {
      // any required modules inside node_modules are extracted to vendor
      // 提取全局依赖的库（vue, jquery）
      var jsReg = /\.js$/.test (module.resource) &&
          module.resource.indexOf (
            path.join (__dirname, '../node_modules')
          ) === 0;


      // 公共UI库提提取
      // todo 这边可进行更精确的匹配
      // 提取的样式文件 vendor.[contenthash].css
      var bootstrapUIReg = /bootstrap\.scss$/.test (module.resource);

      return (
        module.resource && (jsReg || bootstrapUIReg)
      )
    }
  }),

    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin ({
    	name: 'manifest',
    	chunks: ['vendor']
  })
```

### .vue 文件样式

`<style>` 中如果用scss, 直接 `lang="scss"` 而不是 sass, 一开始没注意以为会自动转换...

## 注意点

这边默认开启了eslint检测，用的时候可以先关了，省的新搞了个文件，就先提示文件不规范了

直接在webpack.base.conf 中直接注释掉preLoaders，简单粗暴



## 结束

啰嗦了一堆， 主要是记录过程方便以后查看 XD

有什么想法或这个项目有什么问题都可以发我邮件 jiananle@outlook.com

