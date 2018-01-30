/**
 * created by yuxiaojing on 2017-8-15
 * 登录接口
 */

'use strict';

const Joi = require('joi');
const Boom = require('boom');
const Models = require('../proxy/models');
const JWT = require('jsonwebtoken');
const Fast = require('./fast.js');


module.exports = [
	{
		method:'POST',
		path:'/login',
		config:{
			auth:false,
			handler:login,
			description:'用户登录',
			notes:'返回token',
			tags:['api','public'],
			validate:{
				payload:{
                    user_name:Joi.string().required().description('用户名'),
                    password:Joi.string().required().description('密码')
                }
			}
		}
	}
]

//还没判断用户状态

function login(request,reply) {
	let data = request.payload;
	let token,error;
	Models.user.findOne({
		where:{
			user_name:data.user_name
		} 
	}).then(user => {
		if(user){
			if(user.password === data.password){
				console.log(user)
				if(user.status){
					try{
						token = JWT.sign({id:user.id,name:user.user_name,level:user.level,signTime:new Date()}, Fast.jwtCert, { algorithm: 'HS256'});
						user.password = null;
						reply.response({data:{token:token,user:user}});
					}
					catch(err) {
						error = Boom.badImplementation(err.message);
					}
				}else{
					error = Boom.badData('用户状态异常');
				}
			}else{
				error = Boom.badData('密码不正确');
			}
		}else{
			error = Boom.badData('用户名不存在');
		}
		reply(error)
	});
}