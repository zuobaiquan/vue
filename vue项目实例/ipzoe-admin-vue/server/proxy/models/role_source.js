/**
 * created by yuxiaojing on 2017-8-17
 * 角色--资源关联模型
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
	role_id:{
		type:Sequelize.INTEGER
	},
	source_id:{
		type:Sequelize.INTEGER
	}
}

module.exports = function(sequelize,DataTypes){
	return sequelize.define('role_source',filed, config.modelConfig)
}