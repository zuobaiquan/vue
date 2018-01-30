/**
 * created by yuxiaojing on 2017-8-16
 * 菜单模型
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
	name:{
		type:Sequelize.STRING
	},
	path:{
		type:Sequelize.STRING	
	},
	icon:{
		type:Sequelize.STRING
	},
	level:{
		type:Sequelize.INTEGER, //层级，0 -- 一级菜单
		defaultValue:0
	},
	father:{
		type:Sequelize.INTEGER,
		defaultValue:0
	},
	order:{
		type:Sequelize.INTEGER,
		defaultValue:0
	},
	dropdown:{
		type:Sequelize.BOOLEAN, //是否为下拉菜单 0--否，1--是
		defaultValue:0
	},
	type:{
		type:Sequelize.INTEGER, //类型，0--menu,1--page,2--btn
		defaultValue:0
	}
}

module.exports = function(sequelize,DataTypes){
	return sequelize.define('source',filed, config.modelConfig)
}