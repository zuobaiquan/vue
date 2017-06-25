# 益跑网接口 API

## Index(首页)
### url:'/index'
格式：JSON
HTTP请求：GET
Params：none
Callback ：
```json
/*
/*
 *errno: 错误编号。0为成功
 *tagBar：首页轮播图，四组
 *hotKey: 热门搜索
 *article:文章
 *rightA1:右侧广告(一组)
 *rightA2:右侧广告(三组)
 *
 *
 */
{
    "indexData": {
        "errno": 0,
        "tagBar": [{
            "imgSrc": "./src/tabImg1.jpg",
            "imgTitle": "国内首个运动社交赛事"
        }],
        "hotKey": ["新手", "减肥", "马拉松"],
        "article": [{
            "tag": "开始跑步",
            "title": "告别厌跑的最简单方法 无外乎花点钱",
            "author": "德龄",
            "time": "2017/4/11 11:34:04",
            "content": "..."
        }],
        "rightAd1": {
            "imgSrc": "ad.jpg"
        },
        "rightAd2": [{
            "title": "[益秒杀···]",
            "tag": "积分抵扣",
            "price": 808.20,
            "acount": 9,
            "imgSrc": "./src/ad.jpg"

        }]
    }
}
```
## Article(文章)
### url:'/article'
格式：JSON
HTTP请求：GET
Params：none
Callback ：
```json
/*
 *errno: 错误编号。0为成功
 *content: 文章主体
 *rightA1:右侧广告(一组)
 *rightA2:右侧广告(三组)
 *
 *
 */
{
    "articleData": {
    	"errno": 0,
        "content": {
            "tag": "开始跑步",
            "title": "告别厌跑的最简单方法 无外乎花点钱",
            "author": "德龄",
            "time": "2017/4/11 11:34:04",
            "content": "..."
        },
        "rightAd1": {
            "imgSrc": "ad.jpg"
        },
        "rightAd2": [{
            "title": "[益秒杀···]",
            "tag": "积分抵扣",
            "price": 808.20,
            "acount": 9,
            "imgSrc": "./src/ad.jpg"
        }]
    }
}
```
## Enroll(赛事报名)
### url:'/enroll'
格式：JSON
HTTP请求：GET
Params：none
Callback ：
```json
/*
 *errno: 错误编号。0为成功
 *tabImg: 顶部轮播图(五组)
 *chineseMatch：国内赛事(六组)
 *internationalMatch：国外赛事(六组)
 *hotMatch：热门赛事(六组)
 */
{
    "enrollData": {
        "errno": 0,
        "tabImg": ["1.jpg", "2.jpg"],
        "chineseMatch": [{
            "imgSrc": "chinaMatch1.jpg",
            "title": "2017台北万人城市路跑",
            "time": "2017/2/19 6:00:00"
        }],
        "internationalMatch": [{
            "imgSrc": "internationalMatch1.jpg",
            "title": "2017首尔马拉松",
            "time": "2017/3/19 8:00:00"
        }],
        "hotMatch": [{
            "imgSrc": "hotMatch1.jpg",
            "title": "2017Jeep极致酷跑4X4",
            "time": "2017/2/19 6:00:00"
        }]
    }
}
```
## Sell(拼团)
### url:'/sell'
格式：JSON
HTTP请求：GET
Params：none
Callback ：
```json
/*
 *errno: 错误编号。0为成功
 *goods: 销售物品
 */
{
    "sellData": {
        "errno": 0,
        "goods": [{
                "errno": 0,
                "imgSrc": "sell01.jpg",
                "title": "MIZUNO/美津浓BG9000 抗UV双面跑步紧身长裤 女款",
                "oldPrice": 1098,
                "nowPrice": 933.30,
                "account": 8.5
            }
        ]
    }
}
```
## Column(益跑专栏)
### url:'/column
格式：JSON
HTTP请求：GET
Params：none
Callback ：
```json
/*
/*
 *errno: 错误编号。0为成功
 *article:文章
 *rightAd:右侧广告(三组)
 *
 *
 */
{
    "columnData": {
        "article": [{
            "title": "最珍贵的补剂都是免费的",
            "author": "石砚秀",
            "time": "一周前",
            "content": "..."
        }],
        "rightAd": [{
            "title": "[益秒杀···]",
            "tag": "积分抵扣",
            "price": 808.20,
            "acount": 9,
            "imgSrc": "./src/ad.jpg"
        }]
    }
}
```