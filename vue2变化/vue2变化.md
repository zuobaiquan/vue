到了2.0以后，有哪些变化?

### 1.组件模板

在每个组件模板，不在支持片段代码

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

### 2.关于组件定义

```javascript
//  Vue.extend  这种方式，在2.0里面有，但是有一些改动，这种写法，即使能用，咱也不用——废弃
//  vue2继续可以使用
Vue.component('组件名称',{
	data(){}
	methods:{}
	template:''
 });

//推出一个组件，简洁定义方式  类似之前的Vue.extend()
var Home={
    template:''
};
```

例如：

```html
<div id="box">
    <Home></Home>
</div>
<template id="aaa">
    <div>
        <h3>我是h3标题</h3>
        <strong>我是加粗标签</strong>
    </div>
</template>
```

```javascript
var Home={
	template:'#aaa'
}
new Vue({
	el: "#box",
	data:{
		msg:'zuobaiquan',
	},
	components:{
		Home
		//或者写成
		//'my-aaa':Home，在模板中调用就直接<my-aaa></my-aaa>
	}
})
```

### 3.生命周期

beforeCreate	组件实例刚刚被创建,属性都没有

		created	实例已经创建完成，属性已经绑定
		beforeMount	模板编译之前
		mounted	模板编译之后，代替之前ready  *
		beforeUpdate	组件更新之前
		updated	组件更新完毕	*
		beforeDestroy	组件销毁前
		destroyed	组件销毁后
```html
<div id="box">
    <input type="button" value="更新数据" @click="update">
    <input type="button" value="销毁组件" @click="destroy">
    {{msg}}
</div>
```

```javascript
new Vue({
    el:'#box',
    data:{
        msg:'welcome vue2.0'
    },
    methods:{
        update(){
            this.msg='大家好';
        },
        destroy(){
            this.$destroy();
        }
    },
    beforeCreate(){
        console.log('组件实例刚刚被创建');
    },
    created(){
        console.log('实例已经创建完成');
    },
    beforeMount(){
        console.log('模板编译之前');
    },
    mounted(){
        console.log('模板编译完成');
    },
    beforeUpdate(){
        console.log('组件更新之前');
    },
    updated(){
        console.log('组件更新完毕');
    },
    beforeDestroy(){
        console.log('组件销毁之前');
    },
    destroyed(){
        console.log('组件销毁之后');
    }
});
```

### 4.循环

​	变化后默认就可以添加重复数据，vue2.0之前如果需要添加重复的数据需要用 track-by='索引/id'

```
会有重复数据？ track-by='索引/id'    提高循环性能
```

之前：

```html
<li v-for="(index,val) in list" track-by="$index">
    {{index}}---{{val}}
</li>
```

现在：

```html
<li v-for="(val,index) in list" :key="index">
    {{index}}---{{val}}
</li>
<!--去掉了隐式一些变量-->
<!--$index	$key -->
<!--更接近js语法-->
<!--
arr.forEach(function(item,index){
});
-->
```

track-by="id"    变成      <li v-for="(val,index) in list" :key="index">

### 5.自定义键盘指令

```
之前：Vue.directive('on').keyCodes.ctrl=17;
```

	现在: Vue.config.keyCodes.ctrl=17;

### 6.过滤器

之前:

	系统就自带很多过滤
	{{msg | currency}}
	{{msg | json}}
	....
	limitBy
	filterBy
	.....
	一些简单功能，自己通过js实现
到了2.0， 内置过滤器，全部删除了，但还有自定义过滤器，自定义过滤器传参形式发生了变化

lodash	工具库	_.debounce(fn,200)

	之前:	{{msg | toDou '12' '5'}}	
	现在: {{msg | toDou('12','5')}}

### 7.组件通信

子组件想要拿到父组件数据:  通过  props

vm.$emit()

vm.$on();

```html
<div id="box">
    父级: ->{{a}}
    <br>
    <child-com :msg="a"></child-com>
    <child-com :msg.sync="a"></child-com>
</div>
<template id="child">
    <div>
        <span>我是子组件</span>
        <input type="button" value="按钮" @click="change">
        <strong>{{msg}}</strong>
    </div>
</template>
```


```javascript
//之前，子组件可以更改父组件信息，可以是同步  sync
<!--版本2-->
<!--<script type="text/javascript" src="../lib/vue.min.js"></script>-->
<!--版本1-->
<script type="text/javascript" src="../lib/vue.js"></script>
<script type="text/javascript">
    new Vue({
        el:'#box',
        data:{
            a:'我是父组件数据'
        },
        components:{
            'child-com':{
                props:['msg'],
                template:'#child',
                methods:{
                    change(){
                        this.msg='被更改了'
                    }
                }
            }
        }
    });
</script>
//现在，不允许直接给父级的数据，做赋值操作
```
之前，子组件可以更改父组件信息，可以是同步  sync

现在，不允许直接给父级的数据，做赋值操作

问题，就想更改：

	a). 父组件每次传一个对象给子组件, 对象之间引用	√
	b). 只是不报错, mounted中转
```html
<div id="box">
    父级: ->{{giveData.a}}
    <br>
    <child-com :msg="giveData"></child-com>
</div>
<template id="child">
    <div>
        <span>我是子组件</span>
        <input type="button" value="按钮" @click="change">
        <strong>{{msg.a}}</strong>
    </div>
</template>
```

```javascript
<!--版本2-->
<script type="text/javascript" src="../lib/vue.min.js"></script>
<!--版本1-->
<!--<script type="text/javascript" src="../lib/vue.js"></script>-->
<script type="text/javascript">
    new Vue({
        el:'#box',
        data:{
            giveData:{
                a:'我是父组件数据'
            }
        },
        components:{
            'child-com':{
                props:['msg'],
                template:'#child',
                methods:{
                    change(){
                        //this.msg='被更改了'
                        this.msg.a='被改了';
                    }
                }
            }
        }
    });
</script>
```

> 单一事件管理组件通信:	vuex

var Event=new Vue();

```javascript
Event.$emit(事件名称, 数据)
```

```javascript
Event.$on(事件名称,function(data){
	//data
}.bind(this));
```
```
//准备一个空的实例对象
var Event=new Vue();

var A={
    template:`
            <div>
                <span>我是A组件</span> -> {{a}}
                <input type="button" value="把A数据给C" @click="send">
            </div>
        `,
    methods:{
        send(){
            Event.$emit('a-msg',this.a);
        }
    },
    data(){
        return {
            a:'我是a数据'
        }
    }
};
var B={
    template:`
            <div>
                <span>我是B组件</span> -> {{a}}
                <input type="button" value="把B数据给C" @click="send">
            </div>
        `,
    methods:{
        send(){
            Event.$emit('b-msg',this.a);
        }
    },
    data(){
        return {
            a:'我是b数据'
        }
    }
};
var C={
    template:`
            <div>
                <h3>我是C组件</h3>
                <span>接收过来的A的数据为: {{a}}</span>
                <br>
                <span>接收过来的B的数据为: {{b}}</span>
            </div>
        `,
    data(){
        return {
            a:'',
            b:''
        }
    },
    mounted(){
        //var _this=this;使用bind
        //接收A组件的数据
        Event.$on('a-msg',function(a){
            this.a=a;
        }.bind(this));

        //接收B组件的数据
        Event.$on('b-msg',function(a){
            this.b=a;
        }.bind(this));
    }
};

new Vue({
    el:'#box',
    components:{
        'com-a':A,
        'com-b':B,
        'com-c':C
    }
});
```

```html
<div id="box">
    <com-a></com-a>
    <com-b></com-b>
    <com-c></com-c>
</div>
```

### 8.vue动画

之前 transition    被当做属性

```html
<p transition="fade"></p>
```

```css
.fade-transition{}
.fade-enter{}
.fade-leave{}
```

现在  transition   被当做组件

```html
<!--
	<transition name="fade">
-->
<transition>  
	运动东西(元素，属性、路由....)
</transition>
```

class定义:
.fade-enter{}	//初始状态
.fade-enter-active{}  //变化成什么样  ->  当元素出来(显示)

.fade-leave{}
.fade-leave-active{} //变成成什么样   -> 当元素离开(消失)

详细讲解：https://cn.vuejs.org/v2/guide/transitions.html



配合animate.css配合用

```
<transition enter-active-class="animated zoomInLeft" leave-active-

class="animated zoomOutRight">
            	<p v-show="show"></p>
        	</transition>
```



多个元素运动

```html
<transition-group enter-active-class="" leave-active-class="">
	<p :key=""></p>	
	<p :key=""></p>
</transition-group>
```