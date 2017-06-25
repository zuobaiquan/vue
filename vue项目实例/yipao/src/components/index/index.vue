<template>
    <div class="index clearfix">
        <div class="banner">
            <ul id="tab">
                <li ref="aImg"
                    v-for="(v,i) in indexData.tagBar"
                    @mouseover="tab(i)">
                    <p ref="aP"
                       class="show"></p>
                    <a :href="v.href">
                        <img v-lazy="v.imgSrc"
                             alt="">
                    </a>
                    <em ref="aEm"
                        class="layer">{{v.title}}</em>
                </li>
            </ul>
        </div>
        <div class="content-left">
            <div class="content-left-side1">
                <!--left-->
                <div class="content-left-side1-hot">
                    <i>热门搜索</i>
                    <a :href="v.href"
                       v-for="v in indexData.hotKey">{{v.title}}</a>
                </div>
                <!--right-->
                <div class="content-left-side1-serch">
                    <input type="text"
                           name="serchkey"
                           id="serchkey"
                           placeholder="人名、标题、关键字">
                    <a class="hotserch">搜索</a>
                </div>
            </div>
            <div class="content-left-side2">
                <a href="#"><img v-lazy="indexData.side2ImgSrc[0]"
                         alt="赛事报名">{赛事报名}</a>
                <a href="#"><img v-lazy="indexData.side2ImgSrc[1]"
                         alt="赛事日历">{赛事日历}</a>
                <a href="#"><img v-lazy="indexData.side2ImgSrc[2]"
                         alt="益跑商城">{益跑商城}</a>
                <a href="#"><img v-lazy="indexData.side2ImgSrc[3]"
                         alt="智能选鞋">{智能选鞋}</a>
                <a href="#"><img v-lazy="indexData.side2ImgSrc[4]"
                         alt="益跑工具箱">{益跑工具箱}</a>
            </div>
            <div class="content-left-side3">
                <ul>
                    <li v-for="v in indexData.article">
                        <a :href="v.href"
                           class="content-left-side3-p1"><img v-lazy="v.src"
                                 alt=""></a>
                        <ol>
                            <li v-for="k in v.article_bottom">
                                <!--img and text-->
                                <a :href="k.href"
                                   class="content-left-side3-img"><img v-lazy="k.src"
                                         alt=""><i>{{k.tag}}</i></a>
                                <div class="content-left-side3-text">
                                    <h3><a :href="k.href">{{k.title}}</a></h3>
                                    <em>by:&nbsp;<a href="javascript:;">{{k.author}}</a></em>{{k.time}}
                                    <p>{{k.content}}</p>
                                </div>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
            <div class="content-left-side4">
                更多文章
            </div>
        </div>
        <div class="content2">
            <div v-for="v in indexData.rightAd1">
                <a :href="v.href"
                   class="cmlm">
                    <img v-lazy="v.imgSrc"
                         alt="">
                </a>
            </div>
            <ul>
                <li v-for="v in indexData.rightAd2">
                    <a :href="v.href"
                       class="clearfix">{{v.title}}<span>{{v.tag}}</span></a>
                    <div>拼团价：<strong>￥{{v.price}}<em>({{v.acount}}折)</em></strong></div>
                    <a href="javascript:;">
                        <img :src="v.imgSrc"
                             alt="">
                    </a>
                    <a href="javascript:;"
                       class="spell">
                        <p>立即拼团</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="content-fixed" v-show="toTopFlag">
            <a href="javascript:;"
               title="回到顶部"
               @click="toTop"></a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            "n": 0,
            "toTopFlag": false,
            "indexData": {
                "errno": 0,
                "side2ImgSrc": ["./static/index/index_apply.png", "./static/index/index_date.png", "./static/index/index_store.png", "./static/index/index_shoe.png", "./static/index/index_box.png"
                ],
                "hotKey": [
                    { "href": "javascript:;", "title": "新手" },
                    { "href": "javascript:;", "title": "减肥" },
                    { "href": "javascript:;", "title": "马拉松" }
                ],
                "tagBar": [
                    {
                        "href": "javascript:;",
                        "imgSrc": "./static/index/index_banner1.jpg",
                        "title": "2017Jeep极致酷跑4X4全地形环岛接力赛"
                    },
                    {
                        "href": "javascript:;",
                        "imgSrc": "./static/index/index_banner2.jpg",
                        "title": "国内首个运动社交赛事“企鹅派对跑”5月启动"
                    },
                    {
                        "href": "javascript:;",
                        "imgSrc": "./static/index/index_banner3.jpg",
                        "title": "智美系｜2017长春国际马拉松，首创“幸福跑游”新概念"
                    },
                    {
                        "href": "javascript:;",
                        "imgSrc": "./static/index/index_banner4.jpg",
                        "title": "手撕赞助商T恤教程 专治撞衫和尺码不服"
                    },
                    {
                        "href": "javascript:;",
                        "imgSrc": "./static/index/index_banner5.jpg",
                        "title": "近万中外跑者畅跑花海云崖， 2017查济油菜花马拉松浪漫开跑"
                    },
                    {
                        "href": "javascript:;",
                        "imgSrc": "./static/index/index_banner6.jpg",
                        "title": "2017淮安金湖国际半程马拉松"
                    }
                ],
                "article": [
                    {
                        "href": "javascript:;",
                        "src": "./static/index/index_side1.jpg",
                        "article_bottom": [
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side1_p1.png",
                                "tag": "开始跑步",
                                "title": "跑者莫怕风吹日晒 6种食物护肤超化妆品",
                                "author": "网易跑步",
                                "time": "7小时前",
                                "content": "由于经常外出跑步，跑者们的皮肤难免会受到风吹日晒。论及对皮肤的保护，不管什么的化妆品，实际上都不如食物有效。六位皮肤科医生推荐了六种食物，它们能促进皮肤吸收水分，对抗皱纹色素沉着过度，甚至能够去除湿疹和牛皮癣。   鳄梨美国明尼苏达大学临床医学院的皮肤学教授查尔斯·克拉奇菲尔德推荐多食用鳄梨，“我每周至少吃一颗鳄梨。它们能..."
                            }
                        ]
                    },
                    {
                        "href": "javascript:;",
                        "src": "./static/index/index_side2.jpg",
                        "article_bottom": [
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side2_p1.png",
                                "tag": "开始跑步",
                                "title": "跑者难以完成比赛怎么办？",
                                "author": "搜狐跑步",
                                "time": "9小时前",
                                "content": "没有什么比在一项跑步比赛当中没有完成比赛更让人心痛的了，谁也不希望在比赛结束之后看到自己的名字后面出现“DNF（没有完成比赛的首字母缩略词）”这几个字母。加拿大精英跑步运动员莱斯利-塞克斯顿经验丰富，他就如何最佳地避免DNF给大家提出了几点建议。　　被问及人们可能的不能完成比赛的原因，莱斯利-塞克斯顿表示：“我讨..."
                            },
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side2_p2.gif",
                                "tag": "开始跑步",
                                "title": "告别厌跑的最简单方法 无外乎花点钱",
                                "author": "德龄",
                                "time": "10小时前",
                                "content": "每个人都有厌跑的时候，面对这个问题，可以咬牙坚持跑下去，熬到苦尽甘来，但其实如果你想花点钱的话，却没准能收获事半功倍的效果，这份钱可多可少，只要花对地方，绝对能让你对跑步再度瞬间充满热情，告别厌跑期。花点钱买个新装备　　买个自己喜欢的新装备，或是心仪已久的产品，或是蕴含全新概念的高科技，然后你就很容易的抱着试试看的心理重新踏上马路。由于穿了新装备，自然想检验下它的实力所在，"
                            }
                        ]
                    },
                    {
                        "href": "javascript:;",
                        "src": "./static/index/index_side3.jpg",
                        "article_bottom": [
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side3_p1.png",
                                "tag": "越野赛事",
                                "title": "『读懂UTWT』中国越野跑参赛者数据（1）！",
                                "author": "V越野刚子",
                                "time": "13小时前",
                                "content": "你很勇敢！有货 ｜有趣｜ 有胆关注这个不一样的越野微信号：V越野刚子（ ID：chengang0902）Competition tour map 2017作者 | V越野刚子时间 | 2017.4.9读懂UTWT（国际越野跑巡回赛）大家好，我是V越野刚子，今天陆续给大家更新推送关于UTWT的介绍，我希望通过本公众号持续的更新维护，能让中国一小部分越野爱好者，能了解UTWT，并有..."
                            },
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side3_p2.png",
                                "tag": "开始跑步",
                                "title": "跑步欲望不强烈？ 或是这6个坏习惯所致",
                                "author": "网易跑步",
                                "time": "13小时前",
                                "content": "跑者跑步的欲望并不是一直都能保持的像当初那样强烈，总会有一些原因会让跑者偶尔不想走出家门。下面的这6个坏习惯或许就是其中的原因之一。不吃早饭早晨起床后，跑者或许觉得不饿，或许很忙，于是就放弃了吃早餐。然而，有研究发现，吃过早餐的跑者外出跑步的意愿会更加强烈。早餐应该以蛋白质和健康脂肪为主，能够为跑步提供充分的能量。沉迷手机跑者们每天分给跑步的时间本..."
                            },
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side3_p3.gif",
                                "tag": "跑的更快",
                                "title": "跑的更快的方法",
                                "author": "简爱跑步营",
                                "time": "13小时前",
                                "content": "设定一个比赛目标去训练是对时间的一种承诺。作为跑者，每天置身于里程、工作、家庭和朋友之间，没有很多空闲时间留给其它事情。但专家认为，只需在你的日常生活中额外增加一个10分钟的小环节，就可以让你的跑步训练更健康、更成功。               2016里约奥运障碍赛选手Colleen Quigley说，“没有人喜欢受伤，但有几件能够，"
                            }
                        ]
                    },
                    {
                        "href": "javascript:;",
                        "src": "./static/index/index_side4.jpg",
                        "article_bottom": [
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side4_p1.png",
                                "tag": "越野装备",
                                "title": "一大波新品来袭，折扣+福利更是诚意笔芯?",
                                "author": "益跑拼团·积分",
                                "time": "15小时前",
                                "content": "三月不减肥，四月徒伤悲，五月路人雷，六月男友飞。整个冬天积攒的肉肉，是时候该做个了结了。春暖花开，草长莺飞，春季实在是户外野练的好时节。阳光，蓝天，微风，不该辜负这样的好时光~新旅程，新赛季，益跑拼团为你添了新装备跑鞋，集合了各项炸天的新科技，让你轻松畅跑无伤，折扣+福利更是对你诚意笔芯♥~TheNorthFace北面2017越野远足系列由XtraFoam驱动的E"
                            },
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side4_p2.png",
                                "tag": "健康恢复",
                                "title": "大部分人必须了解的抗痘指南",
                                "author": "林烁",
                                "time": "1天前",
                                "content": "明明就过了青春期怎么还有一堆青春痘呢？这些三不五时就冒出来的小痘子要怎么拿掉？看看从食物，药物机理如何解决这个问题吧1    痘痘的致病机理痘痘，学名寻常性痤疮(acne vulgaris)，是由于皮脂分泌过多、毛囊开口角化异常，导致毛囊被过多皮脂堵塞；同时，毛囊附近的痤疮丙酸杆菌(Propionibacterium acnes) 过度滋生，造成毛囊感染，红肿，发炎，痘痘由此产"
                            },
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side4_p3.png",
                                "tag": "跑步人生",
                                "title": "胖人也能跑得快！美国300斤橄榄球选手跑接力",
                                "author": "搜狐跑步",
                                "time": "1天前",
                                "content": "如果你认为瘦就意味着跑得快，一个橄榄球运动员凯尔德-托马斯可能会挑战你的既有认知。　　这位来自于巴吞鲁日南方大学实验室学院的进攻内锋体重达到了330磅（约合299.37斤），但是最近他参加4x100米接力跑步比赛的视频火遍了网络，成为了不少人茶余饭后的热点话题。　　凯尔德-托马斯的身高达到了6英尺4英寸（约合193公分），体重达到了330磅（约合2"
                            },
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side4_p4.png",
                                "tag": "健康恢复",
                                "title": "跑步了也拉伸了，但小腿仍然酸痛？",
                                "author": "林烁",
                                "time": "2天前",
                                "content": "很多人有在问这个问题，就是我跑步健身了之后进行小腿部的牵拉，但是小腿依旧出现酸痛且硬邦邦的情况。牵拉的方法不对牵拉小腿的方法有非常多种，如果你牵拉了之后，还是发现踝关节的活动度依旧没有改善。那么可能就是你牵拉的手段不对了。踝关节活动度测试选择一个坐位，双腿伸直。进行勾脚尖和垫脚背。查看下，你的踝关节（脚踝），两边脚的活动度分别是怎么样的。但你发现足踝的活动度并不是那么的高，那么"
                            },
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side4_p5.png",
                                "tag": "跑步人生",
                                "title": "心脏病医生坚持跑4年 血压胆固醇变正常",
                                "author": "网易跑步",
                                "time": "2天前",
                                "content": "来自美国俄亥俄州的心脏病医生哈维·哈恩并不是一位特别肥胖的人，但是他曾经出现血压高胆固醇高的状况。在坚持了4年跑步之后，哈恩已经不用再依赖药物来控制血压和胆固醇了。               哈恩从来没认为过自己体重超标或者身体状况不佳，直到有一次左膝盖的半月板撕裂。“自从大学毕业之后，我的体重增加了36斤，以前我每周有"
                            },
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side4_p6.png",
                                "tag": "跑的更快",
                                "title": "纹身竟会影响跑步能力？ 专家：影响热量储备",
                                "author": "搜狐跑步",
                                "time": "2天前",
                                "content": "据调查，美国有4500人至少有一个纹身，很多人以此为美，认为纹身是时尚，但是来自于美国密歇根州的阿尔玛学院研究人员最近进行的一项研究显示，纹身可能会对于跑步运动产生影响。　　研究发现，纹身皮肤比未装饰的皮肤产生较少但是咸度更高的汗液，理论上，这可能会导致跑步者出现问题，因为较低的汗液速率可能导致更高的核心温度，而具有较高钠浓度的汗液可能更容易导致电"
                            },
                            {
                                "href": "javascript:;",
                                "src": "./static/index/index_side4_p7.png",
                                "tag": "开始跑步",
                                "title": "跑步欲望不强烈？ 或是这6个坏习惯所致",
                                "author": "网易跑步",
                                "time": "3天前",
                                "content": "跑者跑步的欲望并不是一直都能保持的像当初那样强烈，总会有一些原因会让跑者偶尔不想走出家门。下面的这6个坏习惯或许就是其中的原因之一。不吃早饭早晨起床后，跑者或许觉得不饿，或许很忙，于是就放弃了吃早餐。然而，有研究发现，吃过早餐的跑者外出跑步的意愿会更加强烈。早餐应该以蛋白质和健康脂肪为主，能够为跑步提供充分的能量。沉迷手机跑者们每天分给跑步的时间本..."
                            }
                        ]
                    }
                ],
                "rightAd1": [{
                    "href": "javascript:;",
                    "imgSrc": "./static/index/index-content2-1.jpg"
                }],
                "rightAd2": [
                    {
                        "href": "javascript:;",
                        "title": "【益秒杀】Mizuno美津浓 Tatting Top男款 运动外套 轻量梭织上衣 柠檬绿",
                        "tag": "积分抵扣",
                        "price": 478.50,
                        "acount": 7.50,
                        "imgSrc": "./static/index/index-content2-2.png"
                    },
                    {
                        "href": "javascript:;",
                        "title": "【益秒杀】Mizuno美津浓 WAVE RIDER 20 耐磨透气男子跑步鞋  深蓝/银/红",
                        "tag": "积分抵扣",
                        "price": 763.30,
                        "acount": 8.50,
                        "imgSrc": "./static/index/index-content2-3.png"
                    },
                    {
                        "href": "javascript:;",
                        "title": "【益秒杀】TheNorthFace 北面男款 跑鞋 ULTRA ENDURANCE蓝色/绿色",
                        "tag": "积分抵扣",
                        "price": 729.50,
                        "acount": 6.09,
                        "imgSrc": "./static/index/index-content2-4.png"
                    }
                ]
            }
        }
    },
    methods: {
        toTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        tab(iNow) {
            this.n = iNow;
            this.go();
        },
        go() {
            for (var i = 0; i < this.$refs.aImg.length; i++) {
                this.$refs.aEm[i].style.bottom = '-50px';
                this.$refs.aP[i].style.opacity = '0.4';
                if (i <= this.n) {
                    this.$refs.aImg[i].style.left = 96 * i + 'px';
                    this.$refs.aEm[this.n].style.bottom = '0';
                    this.$refs.aP[this.n].style.opacity = '0';
                } else {
                    this.$refs.aImg[i].style.left = 1200 - (this.$refs.aImg.length - i) * 96 + 'px';
                    this.$refs.aEm[this.n].style.bottom = '0';
                    this.$refs.aP[this.n].style.opacity = '0';
                }
            }
        },
        handleScroll() {
            this.toTopFlag =window.scrollY > 0;
        }
    },
    mounted: function () {
        // 手风琴轮播图
        for (var i = 1; i < this.$refs.aImg.length; i++) {
            this.$refs.aImg[i].style.left = 1200 - (this.$refs.aImg.length - i) * 96 + 'px';
        }
        var _this = this;
        setInterval(function () {
            _this.n++;
            if (_this.n == _this.$refs.aImg.length) {
                _this.n = 0;
            }
            _this.go();
        }, 3000);
        // 监听滚动事件
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>
<style lang="scss">
@mixin pos($xxx) {
    position: $xxx;
}

@mixin marginL($xxx) {
    margin-left: $xxx;
}

@mixin marginR($xxx) {
    margin-right: $xxx;
}

@mixin marginT($xxx) {
    margin-top: $xxx;
}

@mixin marginB($xxx) {
    margin-bottom: $xxx;
}

@mixin borderR($xxx) {
    border-radius: $xxx;
}

@mixin lineH($xxx) {
    line-height: $xxx;
}

@mixin fontS($xxx) {
    font-size: $xxx;
}

@mixin textA($xxx) {
    text-align: $xxx;
}

@mixin banner() {
    margin: 0 auto;
}

.clearfix:after {
    display: block;
    content: "";
    clear: both;
}

.clearfix {
    zoom: 1;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.inner {
    width: 1200px;
    margin: 0 auto;
}

.wh {
    width: 720px;
    height: 360px;
}

.wh2 {
    width: 300px;
    height: 300px;
}

.banner {
    width: 100%;
    height: 360px;
    margin-bottom: 22px;
    ul {
        height: 360px;
        @include pos(relative);
        top: 0;
        left: 0;
        overflow: hidden;
        li {
            @extend .wh;
            @include pos(absolute);
            border-left: 1px solid #fff;
            transition: 300ms all ease-out 300ms;
            img {
                @extend .wh;
            }
        }
        li:nth-child(1) {
            p {
                opacity: 0;
            }
        }
        li:nth-child(1) {
            em {
                bottom: 0;
            }
        }
    }
    .show {
        width: 95px;
        height: 360px;
        background: #fff;
        opacity: 0.4;
        @include pos(absolute);
        z-index: 1;
        transition: 1s all ease-out 300ms;
    }
    .layer {
        width: 700px;
        height: 50px;
        position: absolute;
        bottom: -50px;
        background: rgba(0, 0, 0, 0.5);
        font-size: 18px;
        color: #fff;
        line-height: 50px;
        padding-left: 20px;
        transition: 1s all ease-out 300ms;
        z-index: 5;
    }
}

.index {
    @include marginT(20px);
    .content-left {
        @extend .fl;
        width: 830px;
        .content-left-side1 {
            @extend .clearfix;
            border-bottom: 4px solid #eee;
            padding-bottom: 20px;
            .content-left-side1-hot {
                @extend .fl;
                i {
                    @extend .fl;
                    width: 86px;
                    height: 34px;
                    background: #e74e34;
                    @include textA(center);
                    @include lineH(34px);
                    color: #fff;
                    @include fontS(14px);
                    font-style: normal;
                    @include marginR(6px);
                }
                a {
                    @extend .fl;
                    text-decoration: none;
                    color: #555;
                    @include fontS(14px);
                    @include lineH(34px);
                    padding: 0 4px;
                    &:hover {
                        color: #1d9eca;
                    }
                }
            }
            .content-left-side1-serch {
                @extend .fr;
                input {
                    @extend .fl;
                    width: 246px;
                    height: 30px;
                    border: 1px solid #ccc;
                    @include borderR(5px);
                    text-indent: 1em;
                }
                a {
                    @extend .fl;
                    width: 94px;
                    height: 32px;
                    @include textA(center);
                    @include lineH(34px);
                    @include fontS(14px);
                    color: #fff;
                    background: #87bb54;
                    @include marginL(5px);
                    @include borderR(5px);
                    &:hover {
                        background: #a3bb92;
                    }
                }
            }
        }
        .content-left-side2 {
            width: 830px;
            height: 190px;
            background: #eee;
            @include marginT(25px);
            @include marginB(25px);
            @include borderR(5px);
            a {
                @include fontS(16px);
                color: #4c4545;
                @extend .fl;
                width: 20%;
                text-align: center;
                line-height: 1;
                img {
                    display: block;
                    margin: 18px auto 14px auto;
                    height: 125px;
                }
            }
        }
        .content-left-side3 {
            ul {
                width: 100%;
                li {
                    width: 100%;
                    @include marginB(25px);
                    .content-left-side3-p1 {
                        display: block;
                        width: 100%;
                        @include marginB(25px);
                        img {
                            width: 100%;
                            height: 150px;
                        }
                    }
                    ol {
                        width: 100%;
                        li {
                            width: 100%;
                            @include marginB(25px);
                            @extend .clearfix;
                            border-bottom: 1px solid #d9dcdf;
                            padding-bottom: 25px;
                            .content-left-side3-img {
                                @extend .fl;
                                width: 360px;
                                height: 200px;
                                @include pos(relative);
                                img {
                                    @extend .fl;
                                    @include marginR(18px);
                                    width: 360px;
                                    height: 200px;
                                }
                                i {
                                    @include pos(absolute);
                                    left: 0;
                                    top: 0;
                                    width: 64px;
                                    height: 22px;
                                    @include fontS(12px);
                                    color: #fff;
                                    background: #e74e34;
                                    @include textA(center);
                                    @include lineH(22px);
                                }
                            }
                            .content-left-side3-text {
                                @extend .fr;
                                @include fontS(12px);
                                color: #8f8f8f;
                                width: 452px;
                                h3 {
                                    a {
                                        @include fontS(20px);
                                        display: block;
                                        color: #2c2c2c;
                                        margin: 0;
                                        @include lineH(30px);
                                        padding: 0 0 6px 0;
                                        font-weight: 400;
                                        height: 32px;
                                        overflow: hidden;
                                        &:hover {
                                            color: #0e90d2;
                                        }
                                    }
                                }
                                em {
                                    padding-right: 10px;
                                    @include fontS(14px);
                                    color: #555;
                                    a {
                                        color: #0e90d2;
                                        &:hover {
                                            color: #2c2c2c;
                                        }
                                    }
                                }
                                p {
                                    color: #695f5d;
                                    @include lineH(24px);
                                    @include marginT(8px);
                                    overflow: hidden;
                                    font-size: 14px;
                                    min-height: 140px;
                                }
                            }
                        }
                        li:nth-last-child(1) {
                            border-bottom: 0;
                            padding-bottom: 0;
                        }
                    }
                }
            }
        }
        .content-left-side4 {
            @include textA(center);
            cursor: pointer;
            padding: 8px;
            background: #fff8c7;
            border: 1px solid #f4e78a;
            color: #117fb9;
            @include fontS(12px);
            @include lineH(1);
            @include marginB(25px);
        }
    }
    .content2 {
        @extend .wh2;
        @extend .fr;
        .cmlm {
            display: block;
            @extend .wh2;
            img {
                display: block;
                @extend .wh2;
            }
        }
        ul {
            width: 300px;
            li {
                margin-top: 25px;
                border-bottom: 1px solid #979797;
                a {
                    font-size: 14px;
                    color: #2c2c2c;
                    line-height: 18px;
                    display: block;
                    margin-bottom: 6px;
                    span {
                        color: #fff;
                        font-size: 12px;
                        width: 51px;
                        height: 18px;
                        background: #ae71cd;
                        display: inline-block;
                        margin-left: 3px;
                        padding-left: 3px;
                        line-height: 18px;
                    }
                }
                div {
                    margin-bottom: 21px;
                    font-size: 14px;
                    color: #695f5d;
                    strong {
                        color: #f00;
                        font-weight: bold;
                    }
                }
                img {
                    @extend .wh2;
                }
                .spell {
                    width: 92px;
                    height: 34px;
                    background: #87bb54;
                    display: block;
                    border-radius: 3px;
                    margin-left: 104px;
                    margin-bottom: 24px;
                    p {
                        color: #fff;
                        line-height: 34px;
                        text-align: center;
                    }
                }
            }
        }
    }
    .content-fixed {
        z-index: 9999;
        width: 48px;
        height: 48px;
        background: url("../../assets/index_fixed.png") no-repeat;
        @include pos(fixed);
        right: 298px;
        bottom: 80px;
        border-radius: 50%;
        a {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
        }
    }
}
</style>