/**
 * created by yuxiaojing on 2017-7-28
 * user model
 * 模型事例，参考：https://itbilu.com/nodejs/npm/V1PExztfb.html
 */

'use strict';
 
const Sequelize = require('sequelize');
const config = require('../config.js');

const filed = {
	id:{
		type:Sequelize.BIGINT,
		primaryKey: true,//主键
		autoIncrement:true //自增
	},
	user_name:{
		type:Sequelize.STRING,
		unique: true, //唯一
		validate:{
			isAlphanumeric: true
		}
	},
	password:{
		type:Sequelize.STRING,
		validate:{
			isAlphanumeric: true
		}
	},
	description:{
		type:Sequelize.STRING
	},
	avatar:{
		type:Sequelize.STRING //头像
	},
	status:{
		type:Sequelize.INTEGER, //状态，1正常 0冻结
		defaultValue:1
	},
	level:{
		type:Sequelize.INTEGER, //等级 ，0 -- 超级管理员
		defaultValue:1
	}

}


module.exports = function(sequelize,DataTypes){
	return sequelize.define('user',filed, config.modelConfig)


}
