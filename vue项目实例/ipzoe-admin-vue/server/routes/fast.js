/**
 * created by yuxiaojing on 2017-8-14
 * 信息快捷配置
 */
'use strict';

const Joi = require('joi');

let nestedAdmin = function(path){
     return '/admin' + path;
}

let nestedPublic = function(path){
	return '/pub' + path;
}

let setTags = function(tags){
	let tagArr = ['api','admin']
	if(typeof tags == 'string'){
		tagArr.push(tags);
	}else{
		tagArr.concat(tags);
	}
	return tagArr;
}

let splitPageParams = {
	page:Joi.number().description('当前页码'),
	size:Joi.number().description('每页加载条数'),
	sort:Joi.object().description(`排序方式，如：{id:"DESC"}`),
	search:Joi.object().description('搜索')
}

let searchDoc = `
sort表示排序方式，search表示搜索内容：如：
<pre>
{
	"sort":{
		"id":"DESC"
	},
	"search":{
		"user_name":{
			"$like":"%admin%"
		},
		"id":2
	}
}
</pre>
搜索可能用到的常规操作符,更多条件参考：https://itbilu.com/nodejs/npm/VJIR1CjMb.html#model-attributes
<pre>
$and: {a: 5}           // AND (a = 5)
$or: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
$gt: 6,                // > 6
$gte: 6,               // >= 6
$lt: 10,               // < 10
$lte: 10,              // <= 10
$ne: 20,               // != 20
$not: true,            // IS NOT TRUE
$between: [6, 10],     // BETWEEN 6 AND 10
$notBetween: [11, 15], // NOT BETWEEN 11 AND 15
$in: [1, 2],           // IN [1, 2]
$notIn: [1, 2],        // NOT IN [1, 2]
$like: '%hat',         // LIKE '%hat'
$notLike: '%hat'       // NOT LIKE '%hat'
$iLike: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
$notILike: '%hat'      // NOT ILIKE '%hat'  (PG only)
</pre>
`

module.exports = {
	nested:nestedAdmin,
	setTags:setTags,
	jwtCert:'IpzoeAdminVue',  //token 签名密码
	splitPageParams:splitPageParams,
	searchDoc:searchDoc
}