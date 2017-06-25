<template>
    <div class="column clearfix">
        <div class="c3left">
            <div class="c3list">
                <img :src="columnData.topImg"
                     alt="益跑专栏" />
                <h3>益跑专栏</h3>
            </div>
            <ul class="c3llist">
                <li v-for="v in columnData.article">
                    <div class="c3listh">
                        <a href="jacascript:;">
                            <img v-lazy="v.imgSrc">
                            <h3>{{v.title}}</h3>
                        </a>
                        <span>
                            							by:
                            							<a href="javascript:;">{{v.author}}</a>
                            						</span> {{v.time}}
                        <p>{{v.content}}</p>
                    </div>
                    <p class="c3listt"></p>
                </li>
                <!--more-->
                <li v-for="v in columnData.article2"
                    v-show="show_more_flag">
                    <div class="c3listh">
                        <a href="jacascript:;">
                            <img v-lazy="v.imgSrc">
                            <h3>{{v.title}}</h3>
                        </a>
                        <span>
                            							by:
                            							<a href="javascript:;">{{v.author}}</a>
                            						</span> {{v.time}}
                        <p>{{v.content}}</p>
                    </div>
                    <p class="c3listt"></p>
                </li>
                <div class="newsmore"
                     @click="show_more">更多文章</div>
            </ul>
        </div>
        <div class="c3right">
            <div class="c3rig"
                 v-for="v in columnData.ad">
                <a href="javascript:;">{{v.title}}}</a>
                <br /> 拼团价
                <span>
                    						￥{{v.oldPrice}}
                    						<i>({{v.account}}折)</i>
                    					</span>
                <a href="javascript:;">
                    <img :src="v.imgSrc">
                </a>
                <a href="javascript:;"
                   class="c3righ">立即拼团</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            "columnData": {
                "topImg": "./static/column/topImg.jpg",
                "article": [
                    {
                        "title": "最珍贵的补剂都是免费的",
                        "author": "石砚秀",
                        "time": "1周前",
                        "imgSrc": "./static/column/img01.png",
                        "content": "月初，我在微博说了个段子，结果被人抄过去当成真实事件在公众号里哗众取宠。充满正能量的跑步不应该和吸毒相提并论，所以段子只能是个段子，就算为了噱头也不能玷污跑步。更何况，跑步当然没有贵到和吸毒一样，最简单的一双跑鞋加一套运动衣就可以跑出门，不过也是有很多相关的衍生消费，自由选择因人而异呗    。例如补剂，挺受跑者关注的，当你还在纠结自己该不该吃蛋白粉、支链氨基酸什么的时候，"
                    },
                    {
                        "title": "手撕赞助商T恤教程 专治撞衫和尺码不服",
                        "author": "石砚秀",
                        "time": "2周前",
                        "imgSrc": "./static/column/img02.png",
                        "content": "这几天我们被马拉松赛的“统一服装”风波刷了屏，尽管秦皇岛马拉松和大连马拉松随后又表示“不对全程及半程马拉松参赛选手着装做硬性要求”，但是10k和迷你跑就活该被欺负了吗？这才是最娱乐化的项目耶，拖家带口变成活广告牌？！笔者不是喜欢妥协的人，但是如果真得被规定死了，我们能做些什么呢？　　别沮丧，搞一点点小怪吧，服装我们穿还不行，不"
                    },
                    {
                        "title": "你跑得不好是因为跑得太多",
                        "author": "石砚秀",
                        "time": "2周前",
                        "imgSrc": "./static/column/img03.png",
                        "content": "为什么我还是不能够跑出×××的成绩呢？这是很多跑者，尤其是开始参加马拉松赛后的跑者们的疑问。他们真得挺努力，几乎全年无休在训练，有明确的成绩目标，大大小小装备买了不少，认真做训练记录，朋友圈步数名列前茅，晒的跑量碾压众人，可惜仍然没有实现成绩上的突破。他们也很郁闷，产生各种疑问，难道是不够努力？要不要再多花些钱报个训练营？要不要再多花些时"
                    },
                    {
                        "title": "全马破4训练法之训练篇2 赛前3月的训练",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "imgSrc": "./static/column/img04.png",
                        "content": "2.4   比赛3个月前   – 2个月前，目标：可以在125左右搞定15公里加速跑                接下来的3个月进入了最终的打磨阶段。刚开始5公里都跑不下来的你，通过9个月的训练，已经很能跑了。接下来需要提高警惕，注意伤痛。如果感觉身体某个地方有异样，或者觉得疲劳的时候，请调整训练计划，放弃做速度训练，可以通过LSD来恢复疲劳；如果特别累也可以选择休息。"
                    },
                    {
                        "title": "解决赛前迷惑，拒绝“在线等”",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "imgSrc": "./static/column/img05.png",
                        "content": "阳春三月，大部分跑者将要迎来今年的第一场马拉松赛了。不管是新手还是老手，都可能会有一些疑虑，着急的情况下四处求助甚至焦急地“在线等”，希望以下的汇总对你有帮助——赛前一周减量？你也要有量可减 我们常听到“赛前减量”的说法，主要指跑量，马拉松赛前一周的训练总里程数应该减至30%，逐次减量。但"
                    },
                    {
                        "title": "全马破4之训练篇：打造可以破4的身体",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "imgSrc": "./static/column/img06.png",
                        "content": "2. 训练篇我们大致以3个月为一个单位，把1年分成4个阶段来考虑训练。最后3个月更是至关重要，再更详细地分成4个小阶段。每段时期都制定有该达成的目标。2.1   比赛1年前– 9个月前，目标：打造可以慢跑10公里的身体最初的3个月给身体打基础至关重要。注意不要受伤，通过训练给身体确立坚实的有氧基础。大"
                    },
                    {
                        "title": "越野跑背包的挑选窍门",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "imgSrc": "./static/column/img07.gif",
                        "content": "正在写关于如何挑选越野跑背包的文章，就看到同事写的关于软水壶的设计一统天下的文章，戳这里。里面有他在Ispo上感受的行业动态以及个人对于软水壶硬水壶的体验。　　我并不为软水壶一味叫好，回到正题，如何选择越野跑包？　　有部分读者企图从第一句就找到购买链接，抱歉这篇不是软文，你可能看完以后并不知道你要买具体哪一款，笔者是个和任何品牌无关的自由跑者，买过无数个包，转过无数个包，愿"
                    },
                    {
                        "title": "山地还是跑道，选择路面也是跑步的乐趣",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "imgSrc": "./static/column/img08.jpg",
                        "content": "你的跑步日记上是否也经常写下“今天的跑步距离是10公里”呢？很多跑友平时都是在铺装的公路上累积跑步距离，可知在草地、土路等未铺装的道路上跑10公里感觉是完全不同的？跑步是不断重复“脚底接触路面⇔离开路面”的动作。越来越多的人掌握了不同跑鞋的使用，然而与此同时理解不同的跑步路面区别的人并不多。注意选择训练的路面，可以增强跑"
                    },
                    {
                        "title": "服用BCAA，加快疲劳恢复",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "imgSrc": "./static/column/img09.png",
                        "content": "1. 训练→破坏；过度训练→疲劳堆积所谓过度训练主要指“疲劳堆积的状态”，换句话说，是“因为运动而被破坏的组织，来不及恢复的状态”。组织和内脏器官的新陈代谢，大约需要2个月左右才能全部更新完毕（随组织或内脏器官不同而时间有所不同）。在持续进行严格训练"
                    }
                ],
                "article2": [
                    {
                        "imgSrc": "./static/column/img11.jpg",
                        "title": "跑者用得上的微信小程序盘点",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "content": "最近微信小程序瞬间火了起来，大家能够对此使用多久目前还有待时间来检验，不过一下有了很多实用的小程序到真是不假，对于跑者来说也有一些适合的小程序，今天特意在这里搜罗一下跑者们用得上的微信小程序，在微信搜索中输入相应的名称就能找到它们了。好天跑起来　　从2017年的第一周就开始了没有蓝天的日子，可把北京的跑者们简直憋坏了，每天查查空气质量成为了跑步前的必修课。比赛前看看当天的天"
                    },
                    {
                        "imgSrc": "./static/column/img12.jpg",
                        "title": "如何在岁末年初保持跑步习惯",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "content": "岁末年初的忙碌中，如何灵活地管理跑步习惯，是保持、提高跑步实力的重要因素。特别是对于年初有比赛计划的跑友来说，岁末年初正是大约赛前半个月到2个月的集中备战期、十分重要。如何取得各种日程和累积跑量之间的平衡，本文与大家分享我的经验。■马拉松旅行这是一种预先计划好从起点到终点的路线、悠闲地跑跑走走到达终点的训练方法。途中也要包含等红绿灯、上厕所、在便利店补给等停下脚步的时刻。不妨跑"
                    },
                    {
                        "imgSrc": "./static/column/img13.jpg",
                        "title": "从心开始：我为什么不想跑极限越野了",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "content": "如今跑圈，哪怕是个刚刚起步的跑者都知道极限马拉松了，常见新手跑者朋友圈打趣说要先定个小目标“撒哈拉沙漠马拉松、环勃朗峰、环富士山、巨人之旅”。　　从路跑到越野，似乎是顺路，有很多的理所当然：路跑多无聊啊，越野更有趣啊，更接近自然，更炫酷，更挑战啊，发朋友圈更多赞，买装备拼高端更显逼格，blabla……　　我当然也知道，所以"
                    },
                    {
                        "imgSrc": "./static/column/img14.jpg",
                        "title": "2016年末回顾 XJBP在XJBL的比赛上的跑者们",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "content": "2016年印象最深的就是XJB如何一词了，最开始甚至响彻了工体，随后也可轻松应用于多个领域，用在总结这一年的跑圈也再合适不过了，反正就是像极了郭德纲《济公传》相声里的一位配角：“胡来”。XJBP的跑者纵欲无度　　这一年我们跑的挺快的，也绝对跑的挺忙的，以往难得寻摸到可以大型比赛的我们，现在打开报名网站简直变成了随便挑随便选，一年12个月月月有，一月四周周周有，周末两天天天有"
                    },
                    {
                        "imgSrc": "./static/column/img15.jpg",
                        "title": "越野比赛中的攻略技巧",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "content": "4. 比赛当天的时间安排 可以想象到比赛当天的拥挤状况，需要提前做好各种准备。这里罗列出一些重要的事项，供大家参考。有的比赛还可以提前把行李寄存在中途的补给站使用。越是大型的比赛，来观战的人也越多，大家都会紧张的，不用太在意。换个角度说，起跑前的适度的紧张感也是必要的。越野跑比赛的时间跨度"
                    },
                    {
                        "imgSrc": "./static/column/img16.jpg",
                        "title": "越野跑的强化训练：周间路跑计划",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "content": "11.   训练计划模板　　针对你的越野比赛，来设置相应的路跑训练期间和越野跑训练期间，并制定相应的训练计划，是提高能力的捷径。请制定适合自己的训练计划，并实践它。11.1   首先要有路跑的训练做基础　　越野跑也是跑步，所以你在进入严肃的越野训练前，首先你要有一定的路跑训练基础。路跑训练可以参考本章的第3节http://www.erun360.com/blog/2010893"
                    },
                    {
                        "imgSrc": "./static/column/img17.jpg",
                        "title": "听说你跑步坚持不下来？",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "content": "很多人说，跑步是单调、乏味的运动，跑步的人很孤独，“怎么坚持下来啊？”这是新手常常想问的问题。也有不少新人没坚持下来，没瘦一斤就放弃了。随着天气转冷，流行性懒癌泛滥，跑步成了更艰难的事情。　　而你如果问一个老手是如何坚持跑步的，他大概会惊讶的反问，“啊？这还用坚持？不就是和吃饭喝水一样的吗？这就是习惯了的生活啊！”　　没错，习"
                    },
                    {
                        "imgSrc": "./static/column/img18.jpg",
                        "title": "改变尼泊尔妇女的命运 Mira Rai用越野跑",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "content": "在两年前，Mira Rai去加德满都近郊的西瓦普利纳嘉郡（Shivapuri Nagarjun）国家公园散步。她在山路上走的飞快，恰好碰到正在跑步的一群人，Mira不知怎的竟然鬼使神差的跟了上去，还跟他们搭上了话，大家对她很和善，有说有笑的样子。他们告诉Mira几天后回来，她照着这些人的话回来了，却发现这里正在举行一场跑步比赛——加德满都West Val"
                    },
                    {
                        "imgSrc": "./static/column/img19.jpg",
                        "title": "越野训练计划制定秘诀 ",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "content": "10.制定长期训练计划的思路 每个人都有不同的比赛目标，比如完赛、破自己的记录等，为了实现这些目标，而进行各种训练。可惜的是，人类的身体不可能全年一直保持在状态最好的样子，那么也就很难保证你在参加比赛的时候状态最好。不是谁都能达成自己的目标。不管再怎么刻苦训练，如果不能达到预期的结果，总会进入低迷状态。经常听到有"
                    },
                    {
                        "imgSrc": "./static/column/img20.jpg",
                        "title": "垂直爬升怎么玩儿？",
                        "author": "石砚秀",
                        "time": "1个月前",
                        "content": "“垂直爬升”（Vertical Kilometre）挑战，近年在欧洲越野圈如火如荼，这次在霞慕尼UTMB与欧洲选手的切磋中，南非越野跑者Ryan Sandes对于VK FKT这种玩法的兴趣也越来越浓厚了，他在家乡开普敦的桌山（Table Mountain）也来了一场VK FKT。Ryan Sandes 在桌山说起对VK的了解，还是几年前在Salomon"
                    }
                ],
                "ad": [
                    {
                        "title": "【益秒杀】The North Face/北面 通用吸湿UPF50防晒臂套黑色",
                        "oldPrice": 159.00,
                        "account": 7.50,
                        imgSrc: "./static/column/ad01.jpg"
                    },
                    {
                        "title": "【益秒杀】TheNorthFace北面春夏新品男款轻便防风防泼水短袖皮肤衣",
                        "oldPrice": 808.20,
                        "account": 9.00,
                        imgSrc: "./static/column/ad03.jpg"
                    },
                    {
                        "title": "BUFF 国家地理系列 抓绒魔术头巾",
                        "oldPrice": 349.00,
                        "account": 8.750,
                        imgSrc: "./static/column/ad02.jpg"
                    }
                ]
            },
            "show_more_flag": false
        }
    },
    methods: {
        handler(component) {
            console.log('this component is showing');
        },
        show_more() {
            this.show_more_flag = true;
        }

    }
}
</script>
<style lang="scss">
.column {
    .c3left {
        width: 830px;
        float: left;
    }
    .c3list {
        position: relative;
        img {
            width: 100%;
            margin-bottom: 25px;
        }
        h3 {
            position: absolute;
            z-index: 100;
            top: 38px;
            left: 41px;
            margin: 0;
            font-size: 50px;
            color: #fff;
        }
    }
    .c3listt {
        border-bottom: 1px solid #d9dcdf;
        width: 100%;
        height: 0;
        margin: 0 0 25px 0;
    }
    .c3listh {
        position: relative;
        font-size: 12px;
        color: #8f8f8f;
        margin-bottom: 25px;
        img {
            float: left;
            margin-right: 18px;
            width: 360px;
            height: 200px
        }
        h3 {
            font-size: 20px;
            color: #2c2c2c;
            margin: 0;
            line-height: 30px;
            padding: 0 0 6px 0;
            font-weight: 400;
            height: 32px;
            overflow: hidden;
        }
        h3:hover {
            color: #0aa3da;
        }
        span {
            padding-right: 10px;
            font-size: 14px;
            color: #555;
            a {
                background-color: transparent;
                color: #0e90d2;
            }
            a:hover {
                color: #095f8a;
            }
        }
        p {
            color: #695f5d;
            line-height: 24px;
            margin: 8px 0 0 0;
            overflow: hidden;
            font-size: 14px;
            min-height: 140px;
        }
    }
    .newsmore {
        text-align: center;
        cursor: pointer;
        padding: 8px;
        background: #fff8c7;
        border: 1px solid #f4e78a;
        color: #117fb9;
        font-size: 12px;
        line-height: 1;
    }
    .c3right {
        float: right;
        width: 340px;
        text-align: center;
        _padding: 22px 20px 0 20px;
    }
    .c3rig {
        text-align: left;
        color: #695f5d;
        padding-bottom: 24px;
        border-bottom: 1px solid #979797;
        margin-bottom: 24px;
        a {
            color: #2c2c2c;
        }
        span {
            color: #ff0000;
            font-weight: bold;
        }
        img {
            display: block;
            width: 200px;
            margin: 18px auto;
        }
        i {
            font-style: normal;
        }
    }
    .c3rig .c3righ {
        color: #ffffff;
        width: 92px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        background: #87bb54;
        border-radius: 3px;
        margin: 0 auto;
        display: block;
    }
}
</style>