/**
 * created by yuxiaojing on 2017-8-17
 * 角色管理
 */

'use strict';

const Joi = require('joi');
const Boom = require('boom');
const Models = require('../proxy/models');
const Fast = require('./fast.js');

const modelName = 'roles';
const name_zh = '角色';

const Basic = require('../proxy/logic/basicopr.js')(modelName);
const power = require('../proxy/logic/power.js');

let routes = [
	{
		method:'GET',
        path:  `/${modelName}`,//'/' + modelName,
        config:{
        	handler:Basic.getList(),
	        description:`获取${name_zh}列表`,
	        notes:`所有${name_zh}`
        }
	},{
		method:'POST',
		path:`/${modelName}/list`,
		config:{
			handler:Basic.getListSplitPage(),
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
			handler:getDetail,
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
		method:['POST','PUT'], //新增角色的时候要新增权限信息
		path:`/${modelName}`,
		config:{
			handler:power.upsetRole,
			description:`添加／更新${name_zh}`,
			notes:'有id为更新，没有id为添加',
			validate:{
				payload:{
                    id:Joi.number().description(`${name_zh}id`),
                    name:Joi.string().required().description(`${name_zh}名`),
                    description:Joi.string().description('备注'),
                    level:Joi.number().default(1).description('等级，0表示超级管理员,默认1'),
                    source:Joi.string().description(`资源(菜单)id,用','分隔`)
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
	}
]

module.exports = (function(){
	routes.forEach(route => {
		route.path = Fast.nested(route.path);
		route.config.tags = Fast.setTags(modelName);
		route.config.auth = false;//'jwt';
	});

	return routes;
})();

/**
 * 获取角色详情，包含资源信息
 * @param  {[type]} request [description]
 * @param  {[type]} reply   [description]
 * @return {[type]}         [description]
 */
function getDetail(request,reply){
	let id = request.params.id;
	let error,l,i; 
	Models[modelName].findOne({
		where:{
			id:id
		}
	}).then(role => {
		if(role){
			Models.role_source.findAll({
				where:{
					role_id:role.id
				}
			}).then(datas => {
				let sourceArr = [];
				l = datas.length;
				for(i=0;i<l;i++){
					sourceArr.push(datas[i].source_id);
				}
				role.dataValues.sourceArr = sourceArr;
				reply.response({data:role});
			}).catch(err => {
				error = Boom.badImplementation(err.message);
		    	return reply(error);
			})
		}else{
			error = Boom.badData('角色不存在');
			return reply(error);
		}
	}).catch(err => {
		error = Boom.badImplementation(err.message);
    	return reply(error);
	});
}

/**
 * 删除角色，删除资源信息
 * @param  {[type]} request [description]
 * @param  {[type]} reply   [description]
 * @return {[type]}         [description]
 */
function deleteData(request,reply) {
	let id = request.params.id;

	Basic.createTransaction(t => {
		Models[modelName].destroy({
	        where:{
	            id:id
	        }
	    },{transaction:t}).then(datas => {
	    	Models.role_source.destroy({
	    		where:{
	    			role_id:id
	    		},
	    		transaction:t
	    	}).then(data => {
	    		//删除用户-角色表
	    		return Models.user_role.destroy({
	    			where:{
	    				role_id:id
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
	    }).catch(err => {
	    	let error = Boom.badImplementation(err.message);
	    	reply(error);
	    	return t.rollback();
	    });
	});
}
