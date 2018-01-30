/**
 * created by yuxiaojing on 2017-8-17
 * 用户-角色关联模型
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
	user_id:{
		type:Sequelize.INTEGER
	},
	role_id:{
		type:Sequelize.INTEGER
	}
}

module.exports = function(sequelize,DataTypes){
	return sequelize.define('user_role',filed, config.modelConfig)
}