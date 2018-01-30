/**
 * created by yuxiaojing on 2017-8-14
 */

'use strict';

const Joi = require('joi');
const Boom = require('boom');
const Models = require('../proxy/models');
const Fast = require('./fast.js');

const modelName = 'user';
const name_zh = '用户';

const Basic = require('../proxy/logic/basicopr.js')(modelName);
const Power = require('../proxy/logic/power.js');

const filed = {exclude:['password']};

let routes = [
	{
		method:'GET',
        path:  `/${modelName}`,//'/' + modelName,
        config:{
        	handler:Basic.getList(filed),
	        description:`获取${name_zh}列表`,
	        notes:'列表',
	        validate: {
	        	
	        }
        }
	},{
		method:'POST',
		path:`/${modelName}/list`,
		config:{
			handler:Basic.getListSplitPage(filed),
			description:`分页获取${name_zh}列表，以及单表查询`,
			notes:Fast.searchDoc,
			validate:{
				payload:Fast.splitPageParams
			}
		}
	},{
		method:'GET',
		path:`/${modelName}/{id}`,
		config:{
			handler: getUserDetail,
			description:`获取${name_zh}详情`,
			notes:'详情',
			validate:{
				params:{
                    id:Joi.number()
                            .required()
                            .description(`${name_zh}id`)
                }
			}
		}
	},{
		method:['POST','PUT'],
		path:`/${modelName}`,
		config:{
			handler:Power.upsetUser,
			description:`添加／更新${name_zh}`,
			notes:'有id为更新，没有id为添加',
			validate:{
				payload:{
                    id:Joi.number().description(`${name_zh}id`),
                    user_name:Joi.string().required().description(`${name_zh}名`),
                    password:Joi.string().required().description('密码'),
                    description:Joi.string().description('备注'),
                    avatar:Joi.string().description('头像'),
                    status:Joi.number().default(1).description('状态，1表示正常（默认），0表示冻结'),
                    level:Joi.number().default(1).description('等级，0表示超级管理员'),
                    roles:Joi.string().description(`角色id,用','分隔`)
                }
			}
		}
	},{
		method:'DELETE',
		path:`/${modelName}/{id}`,
		config:{
			handler:deleteData,
			description:`删除${name_zh}`,
            notes:'删除',
            validate: {
                params:{
                    id:Joi.number()
                            .required()
                            .description(`${name_zh}id`)
                }
            }
		}
	},{
		method:'POST',
		path:`/${modelName}/freeze`,
		config:{
			handler:freeze,
			description:'冻结／解冻',
			notes:'用户状态修改',
			validate:{
				payload:{
					id:Joi.number().required().description(`${name_zh}id`),
					status:Joi.number().required().description('状态：1正常 0冻结')
				}
			}
		}
	},{
		method:'POST',
		path:`/${modelName}/reset`,
		config:{
			handler:resetPassword,
			description:'重置密码',
			notes:'重置密码，不传id时为重置当前帐号的密码',
			validate:{
				payload:{
					id:Joi.number().description('用户id,可不传'),
					password:Joi.string().description('新密码')
				}
			}
		}
	}
];

module.exports = (function(){
	routes.forEach(route => {
		route.path = Fast.nested(route.path);
		route.config.tags = Fast.setTags(modelName);
		route.config.auth = 'jwt';
	});

	return routes;
})();


function deleteData(request,reply){
	let id = request.params.id;
	Basic.createTransaction(t => {
		Models[modelName].destory({
			where:{
				id:id
			},
			transaction:t
		}).then(datas => {
			return Models.user_role.destory({
				where:{
					user_id:id
				},
				transaction:t
			});
		}).then(data => {
			reply.response({data:datas});
	    	return t.commit();
		}).catch(err => {
    		let error = Boom.badImplementation(err.message);
    		reply(error);
    		return t.rollback();
    	})
	});
}


function freeze(request,reply) {
	Models[modelName].update({
		status:request.payload.status
	},{
		where:{
			id:request.payload.id
		}
	}).then(datas => {
		if(datas[0]){
			return reply.response({data:datas});	
		}else{
			let error = Boom.badData('用户不存在');
			return reply(error);
		}
	}).catch(err => {
    	let error = Boom.badImplementation(err.message);
    	return reply(error);
    });
}

function resetPassword(request,reply) {
	let data = request.payload;
	if(!data.id){
		data.id = request.user.id;
	}
	Models[modelName].update({password:data.password},{
		where:{
			id:data.id
		}
	}).then(datas => {
		if(datas[0]){
			return reply.response({data:datas});	
		}else{
			let error = Boom.badData('用户不存在');
			return reply(error);
		}
	}).catch(err => {
    	let error = Boom.badImplementation(err.message);
    	return reply(error);
    });
}

function upsertData (request,reply) {
	var data = request.payload;
    if(data.id){
    	Models[modelName].update(data,{
    		where:{
    			id:data.id,
    			user_name:data.user_name
    		}
    	}).then(datas => {
    		if(datas[0]){
    			return reply.response({data:datas});	
    		}else{
    			let error = Boom.badData('用户名不能修改');
    			return reply(error);
    		}
	        
	    }).catch(err => {
	    	let error = Boom.badImplementation(err.message);
	    	return reply(error);
	    });
    }else{
    	//	使用upset 的时候，如果模型中有唯一约束，需要用事务回滚
    	Basic.createTransaction(t => {
    		Models[modelName].upsert(data,{transaction: t}).then(datas => {
	    		if(datas){
	    			reply.response({data:datas});	
	    			return t.commit();
	    		}else{
	    			let error = Boom.badData('用户名已存在');
	    			reply(error);
	    			return t.rollback();
	    		}
		    }).catch(err => {
		    	let error = Boom.badImplementation(err.message);
		    	reply(error);
		    	return t.rollback();
		    });
    	});
    }
    
}

/**
 * 获取用户信息（带角色）
 * created by liujialing
 * @param {any} request 
 * @param {any} reply 
 */
function getUserDetail (request,reply) {
	let id = request.params.id;
	Models[modelName].findById(id).then(datas => {
		Models.user_role.findAll({where: {'user_id': id}}).then(rolesData => {
			let rolesArr = [];
			for(var i = 0;i < rolesData.length; i++){
				rolesArr.push(rolesData[i].role_id);
			}
			datas.dataValues.rolesArr = rolesArr;
			return reply.response({data:datas});
		}).catch(err => {
			let error = Boom.badImplementation(err.message);
			return reply(error);
		});
	}).catch(err => {
		let error = Boom.badImplementation(err.message);
		return reply(error);
	});
}