前期看了很多webpack的介绍，之前一直用requireJS或者browserify，真正决心来使用webpack，实在是因为webpack好像确实功能更全。

这期想做的是通过webpack和vue-router搭建一个单页应用，并且将vue的transition组件加进去，做一个幻灯片的样子。
首先，贴上我的环境。
![这里写图片描述](http://img.blog.csdn.net/20161211104137642?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#开始

##step1：安装vue cli

![这里写图片描述](http://img.blog.csdn.net/20161211104259137?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
推荐更改为cnpm（淘宝的镜像），这样下载要快一点。

##生成项目

CMD输入

```
vue init webpack-simple my-webpack-simple-demo
```
![这里写图片描述](http://img.blog.csdn.net/20161211104636738?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

然后可以一路回车，它会告诉你vue的版本是2.x，没错，我们就是要用vue2.0.
询问你工程名，描述，以及所有人。
完成后，按照指示，进入文件，并且npm 下载依赖项

![这里写图片描述](http://img.blog.csdn.net/20161211104956911?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
完毕后

```
npm run dev
```
浏览器会自动跳转，没错，至此我们的环境搭建就算完成了。
![这里写图片描述](http://img.blog.csdn.net/20161211105101665?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

##说明
这个时候我们可以来看一看文件的目录
![这里写图片描述](http://img.blog.csdn.net/20161211105411732?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

说一下这些文件的作用
1、src文件夹
用于存放我们写的源代码
2、.gitignore
用于git上传时，指定忽略一些文件，比如build文件夹以及node_modules
3、index.html
这个就不用说了，就是我们浏览器打开看到的页面
4、package.json
这个是一些npm的一些配置文件。
用于配置npm的命令，比如我们刚刚在命令行输入的 npm run dev 其实就是在该文件找到的。

```
 "dev": "cross-env NODE_ENV=development webpack-dev-server --open --inline --hot",
```
以及保存一些依赖项，也就是说，如果之后要用到npm的时候，在后面添加后缀 --save-dev，就会自动保存在"devDependencies"中。
如果别人使用你的项目，首先npm install，加载所有的依赖项。

5、readme
6、webpack.config.js
webpack的配置文件。
其实自动化工具，诸如webpack就相当于我们程序的保姆，我们把一些琐碎的事情丢给它，然后它来帮我们执行。但是它怎么执行呢，肯定不能乱执行，所以我们需要给它一些命令。
这里我们来看一下webpack的配置文件。其实也很好理解。



```
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}


```
我一点一点的来说：
```
 entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
```
entry：指定了程序的入口文件，告诉webpack源文件在哪里。
output:指定了程序的输出文件，告诉webpack把文件解析后，放到哪里，以及名字叫什么(filename:'build.js')

```
rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
```
这里定义了一些语法解析规则。
指定后缀名为.vue 的文件通过vue-loader语法解析加载。
js文件通过babel语法解析。
然后png/jpg/gif/svg通过文件格式解析。
如果有人喜欢用sass的，也需要在这里配置。

webpack还有很多深奥的东西，因为自己对于配置文件这类东西真的不爱去折腾，暂时对于web pack的就先说到这里。
发现一篇博文讲得还不错。
http://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe9

#vue-router
简单版的我就不写了，回头有时间写一篇博客。
首先安装vue-router
这是我的目录，App.vue算是我的主页，components中存放的是我的小模块。main,js用来启动路由，router-config.js 用来配置路由路径
![这里写图片描述](http://img.blog.csdn.net/20161212101543265?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

App.vue文件，没什么可说的，基本上照着官方API写就好了
```
<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Demo - 01</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--使用指令v-link进行导航-->
          <a class="list-group-item" v-link="{ path: '/home'}">Home</a>
          <a class="list-group-item" v-link="{ path: '/about'}">About</a>
          <router-link class="list-group-item" to="/Hello">Hello</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--用于渲染匹配的组件-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  body {
    background-color: #f7f8f9;
  }
</style>
```

值得说明一下的是

```
          <a class="list-group-item" v-link="{ path: '/home'}">Home</a>
          <a class="list-group-item" v-link="{ path: '/about'}">About</a>
          <router-link class="list-group-item" to="/Hello">Hello</router-link>
```
这里写了两种方法，前面两种是vue1.x的写法，后面一种是vue2.x的写法，亲测目前vue2.x对于两种方式都支持。

main.js文件

这里踩坑就有点多了。

先上vue的官方文件

vue1.x的router.start不再适用
```
router.start({
  template: '<router-view></router-view>'
}, '#app')
```
变得更简单了，直接在Vue的实例中声明router即可，就像声明data、components一样

```
new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
})
```
template是注册组件。

```
template: '<router-view></router-view>'
```
或者这样写，也是没问题的
```
new Vue({
  el: '#app',
  router: router,
  render: h => h('router-view')
})
```

router.map 也被取代了

之前的写法

```
router.map({
  '/foo': {
    component: Foo
  },
  '/bar': {
    component: Bar
  }
})
```
因为没有map了，所以router直接写成数组

```
var router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})
```
先说上这两个基本的，因此我的main.js的写法是这样的

```
import Vue from 'vue'
import VueRouter from "vue-router"
import Hello from './components/hello.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/Hello',
    component: Hello
}, {
    path: '/Home',
    component: Home
}, {
    path: '/About',
    component: About
}];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const App = Vue.extend(require('./App.vue'))

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

```

打开，运行

```
npm run dev 
```


![这里写图片描述](http://img.blog.csdn.net/20161212102812312?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

##总结
主要是网上的很多教程都是关于vue1.x版本的，踩了很多坑，终于搞明白了，第一步就是这么完成了。
下面就可以接着探索router的更多好玩的东西了。

另外本教程的代码也都放在了我的git上面，最近慢慢写，慢慢更新。