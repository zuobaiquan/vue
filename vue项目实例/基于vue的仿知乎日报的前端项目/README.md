### 概述

一个基于vue的仿知乎日报的前端项目。

### 关于知乎日报：

知乎日报是一款拥有千万用户的资讯类客户端，每日提供来自[知乎](http://baike.baidu.com/item/%E7%9F%A5%E4%B9%8E)社区的精选问答，还有国内一流媒体的专栏特稿。

#### 主要功能

每天更新好文章，包括权威的时事解读、有趣的生活建议
　　更符合用户口味的「主题日报」，覆盖电影、财经、设计、体育等领域
　　长评优先展示
　　离线下载功能，及时缓存近期的 30 篇文章
　　更多贴心小细节：多图及长文预警；支持一键分享收藏；夜间模式

### 安装

```javascript
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### 技术栈

[vue](https://github.com/vuejs/vue)

[vuex](https://github.com/vuejs/vuex)

[vue-router](https://github.com/vuejs/vue-router/tree/next)

[axios](https://github.com/mzabriskie/axios)

[mint-ui](https://github.com/ElemeFE/mint-ui/)

### 在线演示

[demo](http://xujingguo.top/zhihu/index.html)

[github地址](https://github.com/xujingguo58/vue-)

### 细节

#### API:

感谢[Xiao Liang](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)提供的API,所有 API 均由 **知乎（Zhihu.Inc）**提供。

#### 跨域问题

由于浏览器的同源策略，不允许进行跨域请求，所以首先解决的就是跨域问题，以前采用的是开发时配置`/config/index.js`下的`proxyTable`选项，实际部署时采用nodejs转发，这次为了方便，采用了第三方API[JsonBird](https://bird.ioliu.cn)进行转发,可以避免跨域的问题，返回的是json对象。

#### 轮播：

知乎日报在首页有5个top_stories，采用的是轮播方式展现出来的，为了实现轮播，采用的`mint-ui`的`swipe`组件，不过在使用的时候折磨了很久，最后发现原因是该组件没有设置默认的高度，需要手动设置，如果不设置，就什么都显示不出来。。。（尴尬。。。）

#### 刷新

采用的同样是`mint-ui`下的组件，规定聚页面底部的距离阈值，小于阈值就触发自定义事件。

#### 路由

`vue-router`的配置文件

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import showContent from '@/components/showContent'
import detail from '@/components/detail'
import message from '@/components/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/show',         //显示新闻列表
      name: 'showContent',
      component: showContent
    },
    {
    	path: '/detail',　　　//显示详细信息
    	name: 'detail',
    	component: detail
    },
    {
      path: '/message',　　　//消息页面
      name: 'message',
      component: message
    }
  ]
})

```

#### 状态管理

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		id: 9377231,      //文章id
		response: '',    
		top_stories: [],  //标题文章
		stories: '',	　//普通文章
		date: 20170425　　//日期
	},

	mutations: {
	},
	actions: {

	},

})
export default store
```

#### 防盗链

知乎在图片做了防盗链处理，只需要在`header`中加入

```javascript
<meta name="referrer" content="never">
```

即可解决

### 运行截图

![index.png](http://upload-images.jianshu.io/upload_images/2791522-575c8b73b4291d1b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



![detail.png](http://upload-images.jianshu.io/upload_images/2791522-1ca8b012e3010452.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



![message.png](http://upload-images.jianshu.io/upload_images/2791522-3f6b6fe474b22347.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 文件结构

```
.
├── build
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist
│   ├── index.html
│   └── static
│       ├── css
│       ├── img
│       └── js
├── index.html
├── node_modules
├── package.json
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   ├── components            //组件文件夹
│   │   ├── detailHeader.vue  	  //详细信息的头部组件
│   │   ├── detail.vue			  //详细信息组件
│   │   ├── indexHeader.vue		  //首页组件头部
│   │   ├── messageHeader.vue	  //消息页面的头部组件
│   │   ├── message.vue			  //消息页面组件
│   │   └── showContent.vue		  //首页显示组件
│   ├── main.js
│   ├── router
│   │   └── index.js    //vue-router的配置文件
│   └── store
│       └── index.js    //vuex的配置文件

13 directories, 41 files

```



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
