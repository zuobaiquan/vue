/**
 * created by yuxiaojing on 2017-8-15
 * 权限验证逻辑，判断该用户是否存在
 */

const Boom = require('boom');

const Models = require('../models/index.js')
// const Boom = require('boom');

module.exports = {
	validateToken:validateToken
}

function validateToken(id) {
	// let result = false;
	return new Promise((resolve,reject) => {
		Models.user.findOne({
			where:{
				id:id
			}
		}).then(user => {
			if(user){
				resolve(user)
			}else{
				reject(null)
			}
		}).catch(err => {
			reject(err)
		});
	});
	
}