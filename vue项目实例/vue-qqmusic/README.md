# 用Vue高仿qq音乐官网-pc端
一直想做一个vue项目 然后呢 我就做了

## 效果预览

部分地方不全部根据原版，也有自由发挥的，目前功能模块比较简陋，要完整显示效果必须接入后端数据，请下载以下api文件并打开
>  [网易云音乐API](https://github.com/Binaryify/NeteaseCloudMusicApi)


> 项目地址：[github](https://github.com/j710328466/vue-qqmusic)

> 预览地址：[demo](http://182.254.147.168:8564/#/)

## Build Setup


```
# install dependencies
cnpm i
(可以用cnpm或yarn，更方便快捷，你值得拥有)

# serve with hot reload at localhost:8564
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 网易云API部署 listen localhost:3000
npm run start 
```
##  技术栈

*  vue(数据绑定)
*  vue-router
*  vuex(管理组件状态，实现组件通信）
*  webpack(打包工具)
*  scss（原来想用stylus,回头看看我都快写完了...）
*  axios（我等下要重点讲这****）
*  组件库: element-UI(本来想用muse-UI,感觉那个更cool，下次吧..) 
*  API: 网易云音乐API(仿qq音乐我用网易云音乐的东西，你怕不怕...)

## 核心功能组件的实现

*  搜索功能

![](https://ooo.0o0.ooo/2017/06/14/594135198d975.gif)

*  播放功能

![](https://ooo.0o0.ooo/2017/06/14/5941364de751e.gif)
    (播放页面正在完善中，样式只是大概，待细化...)

*  跳转功能
    
![](https://ooo.0o0.ooo/2017/06/14/59415a8cd0df7.gif)
    (目前子目录只开通歌手列表)


## 自己挖的坑，自己埋

1.  vuex的模块应用

*  一开始我并没有使用vuex，因为我觉得目前这个项目比较小，并不需要它来管理数据，毕竟vuex针对大项目来说确实很好用，但是后来考虑到如果后期该项目我还要    维护，数据量一大，还是要重新分类数据，所以中途某些地方插入了vuex的使用，这就很大一部分影响了项目进行的进度。（目前只用到action和state）

2.  qq音乐的轮播图
*  不用说，qq音乐这个网站的页面我是真的挺喜欢，不光是他的设计，页面的布局也很美观，在控制台调试的时候可以看看它的结构，非常有层次而富有美感，即使加上    一层margin,padding也不会有违和感。这就造就了它的轮播图结构比较麻烦，不是说做不出来，因为这是第一次上传的项目，我想先将大概的结构完善一下，后期再    维护，所以我就选用了element-UI里面的跑马灯式轮播图组件，大体来说，除了部分瑕疵以外，还是高度还原了原版轮播图的。

3.  axios后端数据获取时产生的跨域问题

*  重点来了，这个是我在该项目中花了最多时间的地方，相信很多同学使用axios都碰到过我这个问题，目前我这里使用了三种方法处理该问题，请大家针对自己的项目    问题对号入座
    
*  跨域访问，简单来说就是 A 网站的 javascript 代码试图访问 B 网站，包括提交内容和获取内容。由于安全原因，跨域访问是被各大浏览器所默认禁止的。
    
①. 针对本地相同端口服务器之间的跨域
   
*  这是我刚开始碰到问题时使用的第一种，这个时候你只需要找到build文件中的dev-server，找到引用express的位置，给它加上一个头文件：
    ``` 
    app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
    })
    ```
        
>  ![](https://ooo.0o0.ooo/2017/06/14/594140894d162.jpg)

*  然后它就会报错~，具体原因是你同一个端口申请相同端口的东西,不好意思，那不叫跨域...
<br>       
②. 针对本地不同端口的服务器之间的跨域
     
*  就是将上面的头文件放在当前项目申请的服务器的那个api中。
<br>        
③. 针对本地服务器对域名服务器访问的跨域问题
        
*  找到当前项目congfig文件夹下index.js文件，然后在文件中将proxyTable内容改为：
   ```
   proxyTable: {
      '/api': {
      target: '[1]',
      changeOrigin: true,
      pathRewrite: {
      '^/api': '/'
      }
     }
    }
    ```
 *  就是你当前想访问的api地址，项目中访问的时候就只要用/api做反向代理即可
        
## 终于

*  这是我第一个用vue撸的项目，可能功能有点简陋，很多地方有待提高，不过这次实践让我对组件化的理解有了一定的提升，后期会继续加入其它功能模块的，文中有用词不对的地方，欢迎大家指出，项目有什么bug，也希望大家多多提issue
 
*  如果你帮到了你，给个star吧
 
 
 * （最后，这是[我的简历](https://github.com/j710328466/vue-qqmusic/blob/master/%E6%88%91%E7%9A%84%E7%AE%80%E5%8E%86.pdf) 2018级毕业生，也可以在项目跟目录下载pdf文件，谢谢）
 ![](https://ooo.0o0.ooo/2017/06/14/594148dc7c4f1.gif)
