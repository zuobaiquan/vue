# vue移动端路由切换完整实例

在写移动端时，因为需要给页面做转场动画，便有了这次的研究

其中最主要的时以下两个问题：

  1. 浏览器导航栏的切换
  2. IOS 上滑动切换时，会有两次页面的转场动画，一次自身滑动时进行的切换，随后触发我们设置的转场动画。

除了上面两个问题，其余的操作都是可以在页面内进行设置，基本都是可控的。主要就是解决上面两个问题。

可以看下实际写出来的效果：[在线DEMO](http://dzblog.cn/cases/vue-transition-router/index.html)


### 1. 浏览器导航栏的切换
通过记录 历史记录 来比较判断前进还是后退

* 如下例子

> A页面 -> B页面 -> C页面

假如我从 A页面到 B页面 再到C页面，历史记录就会产生3条

我们用一个数组表示: `['/a', '/b', '/c']`

然后我在通过点击浏览器导航栏的后退按钮， 我便会回到 B 页面，

这时候我只要判断是否存在 B页面， 存在就证明我点的时后退按钮。

然后只要我后退过， 我就能点击浏览器的前进按钮了。这时候怎么判断它到底是前进的呢。

我们可以这样。

当我们后退到了B页面，历史记录不是还保存着`['/a', '/b', '/c']` 三个路径吗

我们可以删除B页面后面的路径，那现在就是 `['/a', '/b']`；
如果我们后退到A页面， 那么我们保存的路径就是`['/a']`

只要我们点击前进按钮， 我们去保存的路径里面找， 是不是就找不到路径了， 那样就完成了前进判断。


---
上面是一种正常的情况。
但是假如我们有点页面重复进入了呢。

 * 就如以下这种情况

> A页面 -> B页面 -> C页面 -> B页面 -> C页面

现在走了5步，到达了第二个C页面， 然后我们后退一步，到达了B页面
这个时候问题就出来了，我们是删除第一个B页面后面的路径还是删除第二个B页面后面的路径

1. 我们先试着删除第二个B页面的路径，那么我们还保存的路径就是： `['/a', '/b', '/c', '/b']`。
    那这个时候我们按照上面正常情况的逻辑来操作.
    我点击前进， 然后我去保存的路径里面找，找不到就算前进， 找到证明是后退。
    那么结果显而易见，我们找到了第一个C页面，那就这样就算后退了，但其实我点击的时前进

2. 那我们试着删除第一个B页面后面的路径，那么保存的路径就是： `['/a', '/b']`,
    那么我在点击后退按钮，这时候他其实会进入C页面， 我们可以看以下流程图
!['图片描述'](http://dzblog.cn/images/md/07699fa8d1013.png)
    这个时候我们在此点击后退按钮，就会到C页面， 但是保存的路径里面 `'/c'` 已经被我删除了, 所以判断出来的是前进。

3. 如果我们过滤重复的页面路径，是不是就会好了呢，其实也是一样的
    假如我们有5个页面路径，过滤了2个重复的，只有3个页面路径了
    那么我退到第四个路径的时候是不是就找不到了， 那么后面两个页面都会算作前进。


所以以目前来看，最好的办法就是记录每一个页面，但是每个页面，都让他有区别
那么我们就可以在url上面放一个随机字符串

代码实现：

```
// 当没有key的时候会进入两次 beforeEach,我们只需保存带key的就行
const updateNavigations = (to) => {
    if (to.query[pathKey]) {
        store.commit('UPDATE_NAVIGATIONS', {path: to.fullPath})
    }
}

router.beforeEach((to, from, next) => {
    let toIndex = store.state.navigations.findIndex(path => path === to.fullPath)
    if (toIndex >= 0) { // 存在该路径
        let len = store.state.navigations.length-1
        if (toIndex === len) { // 当前路径是最后一条，证明是同一个页面
            console.log('refresh')
        } else { // 后退
            store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'back' }) // 后退标志
            store.commit('DELETE_NAVIGATION', { index: toIndex }) // 删除当前路径后面的路径
        }
    }else{ // 不存在该路径
        store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'forward' }) // 前进标志
        updateNavigations(to) // 保存该连接
    }

    const query = { ...to.query }
    // 存在就直接next， 防止死循环
    if (!query['APP_KEY']) { // 不存在添加key ，再次 next
        query['APP_KEY'] = Math.random().toString(16).substring(2)
        next({ path: to.path, query})
    }else{
        next()
    }
})
```

以上代码我们就能就url中添加一个 `APP_KEY` 的随机串,那样就算同一个页面在我们保存的路径里面也是其实是不同的。就可以正常的执行逻辑了
上面就基本解决了浏览器导航栏的问题了


### 2. IOS上的滑动切换
在IOS的网页上， 是可以左右滑动进行切换，即使你没有做转场动画。
这个时候就会出现一个问题。

* 还是ABC页面

>  A -> B -> C

当我们到达C页面，然后向左滑动时，滑完他就进入B页面，但是这这时它还是会进入我们的 `beforeEach` 这个钩子函数里面，执行我们上面的逻辑。
那样就会触发我们的转场动画。你就会发现执行了两次切换。

于是我在网上找到了一种方法 [fix ios左滑再次执行动画 #2259](https://github.com/airyland/vux/pull/2259)

代码是这样的

```
let touchEndTime = Date.now()

window.addEventListener('touchend', () => {
    touchEndTime = Date.now()
})

router.beforeEach((to, from, next) => {
    if ((Date.now() - touchEndTime) < 377) { // ios滑动切换
        store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: '' })
    }
})

```
上面也很好理解， 就是我们取到手指最后离开的屏幕的那一刻， 然后在到 `beforeEach`里面进行比较，
当手指离开屏幕的最后一刻跟我们自己 `beforeEach`里面进行的转场相差小于 337, 就算是IOS的滑动切换

那样就解决了IOS的滑动切换问题了。

但是IOS的右滑切换时监听不到手指离开屏幕的那一刻的（也不知道是什么鬼）， 所以IOS的右滑切换，是没法像上面那样判断的。
这个我也没找到解决办法， 暂时只能解决IOS左滑返回的切换。


**基本上遇到的比较麻烦的两个点就是上面这两个点了，其余都是可以通过监听事件进行设置，倒也没什么难度**

[在线DEMO演示](http://dzblog.cn/cases/vue-transition-router/index.html)

[个人博客](http://dzblog.cn/)

http://dzblog.cn/example
