<template>
    <div class="equip clearfix">
        <div class="equip_left">
            <div class="equip_flash re">
                <swiper :options="swiperOption">
                    <!-- slides -->
                    <swiper-slide v-for="v in equipData.flash" :key="v.id">
                        <img :src="v.imageSrc">
                        <P class="title">{{v.imageTitle}}</P>
                    </swiper-slide>
                    <div class="swiper-button-prev"
                         slot="button-prev"></div>
                    <div class="swiper-button-next"
                         slot="button-next"></div>
                </swiper>
            </div>
            <h2>跑步装备</h2>
            <ul class="equip_left_list">
                <li class="clearfix"
                    v-for="v in equipData.product">
                    <div class="equip_left_list_img re">
                        <img v-lazy="v.imageSrc" />
                        <p class="ab">{{v.classify}}</p>
                    </div>
                    <div class="equip_left_list_art">
                        <h3>
                                         <a href="javascript:;">{{v.title}}</a>
                                            							</h3>
                        <p class="equip_left_list_art_title">
                            <span>by:</span>
                            <a href="javascript:;">{{v.from}}&nbsp;</a>
                            <b>{{v.time}}</b>
                        </p>
                        <p class="equip_left_list_art_text">{{v.text}}</p>
                    </div>
                </li>
    
            </ul>
        </div>
        <ul class="equip_right">
            <li v-for="v in equipData.buy">
                <a href="javascript:;">{{v.title}}</a>
                <span>{{v.mode}}</span>
                <p>
                    <em>拼团价：</em>
                    <i>￥{{v.price}}</i>
                    <b>({{v.discount}})</b>
                </p>
                <div class="equip_right_img">
                    <img v-lazy="v.imageSrc" />
                </div>
                <a :href="v.href"
                   class="equip_right_buy">立即拼团</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            "equipData": {
                "flash": [{
                    "imageSrc": "./static/equip/equip_flash_1.jpg",
                    "imageTitle": "爱普生RUNSENSE SF-850厦马实测： 黑科技极简跑表的正确打开方式"
                },
                {
                    "imageSrc": "./static/equip/equip_flash_2.jpg",
                    "imageTitle": "newton牛顿跑鞋测评"
                },
                {
                    "imageSrc": "./static/equip/equip_flash_3.jpg",
                    "imageTitle": "【公布众测名单】＃不软的真众测＃第十期 Podoon智能鞋垫"
                },
                {
                    "imageSrc": "./static/equip/equip_flash_4.jpg",
                    "imageTitle": "加速恢复，减缓疲劳——Skins RY400 使用测评"
                },
                {
                    "imageSrc": "./static/equip/equip_flash_5.jpg",
                    "imageTitle": "压缩与速干如何一举兼得？LP 激能压缩AIR系列长裤评测"
                },
                {
                    "imageSrc": "./static/equip/equip_flash_6.jpg",
                    "imageTitle": "明明可以靠脸吃饭，还偏偏那么有实力～疾风家族Vazee 2090开箱体验"
                }
                ],
                "product": [
                    {
                        "imageSrc": "./static/equip/equip_left_2.png",
                        "classify": "跑鞋",
                        "title": "Boost（爆米花）运动垫评测团招募",
                        "from": "新闻中心",
                        "time": "5小时前",
                        "text": "想快速改变自己跑鞋的中底性能？不用换新鞋，益跑评测团给你机会，本次评测团招募为大家带来Boost（爆米花）运动垫，它是由无数个弹性十足、重量很轻的TPU发泡小球集结在一起后，体积膨胀5-8倍，重量超轻且能量十足，感兴趣的朋友快来报名体验吧。Boost（爆米花）运动垫评测团活动福利：1、共10双Boost（爆米花）运动垫的评测体验机会。2、所有参与者均有机会获得私人订制3D雕"
                    },
                    {
                        "imageSrc": "./static/equip/equip_left_3.png",
                        "classify": "越野装备",
                        "title": "一大波新品来袭，折扣+福利更是诚意笔芯?",
                        "from": "益跑拼团.积分",
                        "time": "一天前",
                        "text": "三月不减肥，四月徒伤悲，五月路人雷，六月男友飞。整个冬天积攒的肉肉，是时候该做个了结了。春暖花开，草长莺飞，春季实在是户外野练的好时节。阳光，蓝天，微风，不该辜负这样的好时光~新旅程，新赛季，益跑拼团为你添了新装备跑鞋，集合了各项炸天的新科技，让你轻松畅跑无伤，折扣+福利更是对你诚意笔芯♥~TheNorthFace北面2017越野远足系列由XtraFoam驱动的E"
                    },
                    {
                        "imageSrc": "./static/equip/equip_left_4.png",
                        "classify": "跑鞋",
                        "title": "爱的N次方——李宁超轻14代跑鞋评测",
                        "from": "维稳",
                        "time": "2天前",
                        "text": "爱的N次方——李宁超轻14代跑鞋评测 科技的发展，让最新的材料技术与跑鞋的设计完美融合。历经13年演变，李宁超轻系列跑鞋精益求精，并不断地创造出那些让我们跑的更快、更稳定的经典跑鞋。超轻系列跑鞋以其外表的“轻、盈、酷、炫”，展示其灵魂上的特立独行，使我不禁对李宁品牌肃然起敬。 李宁超轻14代跑鞋来了，伴随它而来的还有"
                    },
                    {
                        "imageSrc": "./static/equip/equip_left_5.png",
                        "classify": "跑鞋",
                        "title": "两个人的“翻岛爱” 你选择基情还是爱情？",
                        "from": "新闻中心",
                        "time": "5天前",
                        "text": "你完成的一个人的马拉松太多，两个人马拉松甚至没有，2017 Jeep极致酷跑给你这个机会，和基友或恋人一起，携手每一步来完成42公里的旅程，途中翻越江南少有山海云雾的美景，饱览最有好景莫负的舟山朱家尖，伴着一路繁花完成一次与众不同的“翻岛爱”之旅。　　42公里环岛马拉松是本次比赛中的新增的双人项目，将会有150组选手参赛，比赛形式为团队赛，不限性别，"
                    },
                    {
                        "imageSrc": "./static/equip/equip_left_6.png",
                        "classify": "跑鞋",
                        "title": "必迈 Mile 42K 专业马拉松跑鞋评测",
                        "from": "疯狂的芭蕾",
                        "time": "一周前",
                        "text": "零、 写在最前面：相信看到这篇文章的有跑步小白，也有跑步精英，有对必迈一无所知的，也有必迈的真爱粉。在这双Mile42K诞生之前，所有的必迈粉丝们都迫不及待的想要见到这双跑鞋。因为它真的让我们等太久了，两年的历练，让Mile这个系列在磨练中不断的成长，42K究竟能给我们带来怎样的惊喜呢？ 一、 前言关于必迈：必迈，是一群爱跑步的人，聚在一个最合适跑步的公园里，为给跑者提供更"
                    },
                    {
                        "imageSrc": "./static/equip/equip_left_7.png",
                        "classify": "越野装备",
                        "title": "收藏丨一个老驴的户外背包装包技巧！",
                        "from": "8264",
                        "time": "一周前",
                        "text": "户外出行搭理背包是一门技巧和学问，千万不可小看它哦，如果背包装的巧装的好，不仅可以让你的物品能全部容纳，在你使用时方便取出，还可以减轻背包在你身上的压力，背得舒服才能走得愉快。如此看来不学一学填装背包是不行的啊。　　背包装填如果有问题不仅会影响使用的方便性和舒适性，还会造成重心偏移和背包损坏。因此，装填并非将所有物品全扔入背包，而是要背的舒服，走的"
                    },
                    {
                        "imageSrc": "./static/equip/equip_left_8.png",
                        "classify": "配件",
                        "title": "稳定你的膝盖│迈克达威髌骨带使用评测",
                        "from": "鼻涕龙",
                        "time": "一周前",
                        "text": "一、髌骨带的作用膝关节既是一个在运动中极其重要的部位，同时又是一个比较脆弱容易受伤的部位，当你体重每增长一公斤，你的膝盖部位就得承受六倍的重量。例如，你体重增长五公斤，你的膝盖就得多负担三十公斤！我们首先简单看一下膝关节的构造：膝关节是上下腿骨交汇的地方，中间有半月板，前面有髌骨，髌骨是由两条肌肉拉伸，悬浮在腿骨交汇处之前，非常容易滑动。由于跑步或骑车运动给膝盖施加了过多的压力"
                    },
                    {
                        "imageSrc": "./static/equip/equip_left_9.jpg",
                        "classify": "越野装备",
                        "title": "户外救援：急救包里配什么",
                        "from": "8264",
                        "time": "一周前",
                        "text": "急救包配置理念： 第一条：你不是在医院没有大型设备，你配备的所有物品只是为了以备万一使用，不要妄想在野外进行大型抢救，如果出现危及生命的情况你的任务是维持病人生命体征等待救援人员来到。 第二条：定期清理医药包，不要携带过期药品，你是在拿大家的生命开玩笑。 第三条：尽量携带小型化的设备，单独"
                    },
                    {
                        "imageSrc": "./static/equip/equip_left_10.png",
                        "classify": "跑鞋",
                        "title": "能量与轻量可以兼得 安踏能量环跑鞋评测",
                        "from": "德林",
                        "time": "一周前",
                        "text": "拿到这双鞋子的时候，瞬间便被看到的同事问说：“这是那个动能环吧？”可见这双安踏能量环跑鞋的识别度有多高，标志性的能量环、飞织所勾勒出独特外观，可以再一开始就能引得很多人侧目，下面就来看看这双鞋的具体细节吧。清新脱俗动能十足的外观　　本次拿到的安踏能量环跑鞋为纯白色，上手后的第一印象很有时尚感，标志性的能量环中底很是抢人眼球。轻量化的飞织鞋面是本款产品"
                    }
                ],
                "buy":[
					{
						"title":"【益秒杀】THE NORTH FACE Martin Wing 10 跑步背包+《越跑越野100-332公里的进击之路》",
						"mode":"积分抵扣",
						"price":"699.00",
						"discount":"7.50",
						"imageSrc":"./static/equip/equip_right_1.png",
						"href":"javascript:;"
					},
					{
						"title":"【益秒杀】Dr.Shoe 挪威进口胶囊除臭干燥剂去异味除湿防潮清新2粒装",
						"mode":"积分抵扣",
						"price":"45.00",
						"discount":"6.00",
						"imageSrc":"./static/equip/equip_right_2.png",
						"href":"javascript:;"
					},
					{
						"title":"【益秒杀】GU Energy Gel 能量胶 跑步能量补给 现场购买或自取; 线上购买满7个包邮",
						"mode":"限时秒杀",
						"price":"9.8",
						"discount":"7.54",
						"imageSrc":"./static/equip/equip_right_3.png",
						"href":"javascript:;"
					}
				]
            },
            swiperOption: {
                autoplay: 5000,
                // direction: 'vertical',
                loop: true,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                onTransitionStart(swiper) {
                    console.log(swiper)
                },
            }
        }
    }
}
</script>
<style lang="scss">
.re {
    position: relative;
}

.ab {
    position: absolute;
}

i,
em {
    font-style: normal;
}

.equip {
    width: 1200px;
    height: 100%;
    .equip_left {
        width: 840px;
        height: 100%;
        float: left;
        .equip_flash {
            width: 840px;
            height: 360px;
            overflow: hidden;
            position: relative;
            p.title {
                position: absolute;
                bottom: 0;
                height: 50px;
                width: 100%;
                background: rgba(0, 0, 0, 0.4);
                text-indent: 1em;
                line-height: 50px;
                font-size: 18px;
                color: #fff;
            }
            .swiper-button-prev {
                position: absolute;
                top: 172px;
                left: 10px;
            }
            .swiper-button-next {
                position: absolute;
                top: 172px;
                right: 10px;
            }
        }
        h2 {
            width: 100%;
            height: 52px;
            line-height: 52px;
            font-size: 26px;
            color: #5e5454;
            margin-top: 30px;
            border-bottom: 4px solid #eeeeee;
        }
        .equip_left_list {
            width: 100%;
            height: 100%;
            li {
                width: 840px;
                height: 230px;
                margin: 30px 0;
                border-bottom: 1px solid #d9dcdf;
                div {
                    height: 200px;
                }
                .equip_left_list_img {
                    width: 360px;
                    float: left;
                    p {
                        padding: 0 10px;
                        height: 22px;
                        font-size: 12px;
                        line-height: 22px;
                        background: #e74e34;
                        color: #fff;
                        top: 0;
                        left: 0;
                    }
                }
                .equip_left_list_art {
                    width: 450px;
                    height: 200px;
                    float: right;
                    font-size: 12px;
                    color: #695f5d;
                    a {
                        color: #000;
                    }
                    h3 {
                        width: 100%;
                        height: 32px;
                        line-height: 32px;
                        text-align: left;
                        font-size: 20px;
                    }
                    .equip_left_list_art_title {
                        width: 100%;
                        height: 24px;
                        line-height: 24px;
                        margin-bottom: 6px;
                        a {
                            font-size: 14px;
                            color: #0e90d2;
                        }
                        b {
                            color: #8f8f8f;
                        }
                    }
                    .equip_left_list_art_text {
                        font-size: 14px;
                        line-height: 24px;
                    }
                }
            }
        }
    }
    .equip_right {
        width: 296px;
        height: 100%;
        float: right;
        li {
            width: 100%;
            height: 384px;
            border-bottom: 1px solid #979797;
            font-size: 14px;
            line-height: 24px;
            margin-top: 20px;
            a {
                color: #2c2c2c;
            }
            span {
                font-size: 12px;
                color: #fff;
                display: inline-block;
                width: 54px;
                height: 18px;
                background: #ae71cd;
                text-align: center;
                line-height: 18px;
            }
            p {
                color: #ff0000;
                em {
                    color: #2c2c2c;
                }
                i {
                    font-weight: bold;
                }
            }
            .equip_right_img {
                width: 296px;
                text-align: center;
                display: table-cell;
                vertical-align: middle;
                img {
                    width: 200px;
                    height: 200px;
                }
            }
            .equip_right_buy {
                display: block;
                width: 92px;
                height: 34px;
                background: #99cc66;
                border-radius: 4px;
                color: #fff;
                text-align: center;
                line-height: 34px;
                margin-top: 20px;
                margin-left: 100px;
            }
        }
    }
}
</style>