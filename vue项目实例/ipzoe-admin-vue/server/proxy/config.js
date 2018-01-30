/**
 * created by yuxiaojing on 2017-8-16
 * 数据模型配置
 */

'use strict';

const mySql = {
	connectionLimit:10,
	host:'120.55.186.105',
	user:'root',
	password:'Z86G8vc4',
	database:'ipzoe-admin' 
}


const dbConfig = {
  'dialect': 'mysql',  // 数据库使用mysql
  'host': mySql.host, // 数据库服务器ip
  'port': 3306 ,        // 数据库服务器端口
  'timezone':'+08:00',  //时区
  'dialectOptions': {
      useUTC: false //for reading from database
  },
  'benchmark':true,
  'pool':{
    max: 5,
    min: 0,
    idle: 30000
  },
  logging:function(){}

};

const modelConfig = {
  timestamps:true,
  underscored: true,
  freezeTableName: true,
  paranoid: true
}

module.exports = {
	mySql:mySql,
	dbConfig:dbConfig,
	modelConfig:modelConfig
}