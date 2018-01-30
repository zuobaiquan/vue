/**
 * created by yuxiaojing on 2017-8-17
 * 角色模型
 */

'use strict';

const Sequelize = require('sequelize');
const config = require('../config.js');


const filed = {
	id:{
		type:Sequelize.BIGINT,
		primaryKey: true,//主键
		unique: true, //唯一
		autoIncrement:true //自增
	},
	name:{
		type:Sequelize.STRING,
		unique: true, //唯一
		validate:{
			isAlphanumeric: true
		}
	},
	level:{
		type:Sequelize.INTEGER, //角色等级 ，0 -- 超级管理员
		defaultValue:1
	},
	description:{
		type:Sequelize.STRING
	}
}
module.exports = function(sequelize,DataTypes){
	return sequelize.define('roles',filed, config.modelConfig)
}