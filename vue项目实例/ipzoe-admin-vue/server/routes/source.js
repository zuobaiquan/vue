/**
 * created by yuxiaojing on 2017-8-16
 * 
 */

'use strict';

const Joi = require('joi');
const Boom = require('boom');
const Models = require('../proxy/models');
const Fast = require('./fast.js');

const modelName = 'source';
const name_zh = '资源(菜单)';

const Basic = require('../proxy/logic/basicopr.js')(modelName);
const Power = require('../proxy/logic/power.js');

// const filed = {exclude:['password']};

let routes = [
	{
		method:'GET',
        path:  `/${modelName}`,//'/' + modelName,
        config:{
        	handler:Basic.getList(),
	        description:`获取${name_zh}列表`,
	        notes:'列表',
	        validate: {
	        	
	        }
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
	},
	{
		method:'GET',
		path:`/${modelName}/{id}`,
		config:{
			handler:Basic.getDetail,
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
			handler:Basic.upsertData,
			description:`添加／更新${name_zh}`,
			notes:'有id为更新，没有id为添加',
			validate:{
				payload:{
                    id:Joi.number().description(`${name_zh}id`),
                    name:Joi.string().required().description(`${name_zh}名称`),        
                    path:Joi.string().description('路径／标识符'),
                    icon:Joi.string().description('图标'),
                    father:Joi.number().description(`父级${name_zh}`),
                    level:Joi.number().description('层级'),
                    order:Joi.number().description('排序'),
                    dropdown:Joi.number().description('是否为下拉菜单：0--否,1--是'),
                    type:Joi.number().description('类型，0--menu,1--page,2--btn')
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
		method:'GET',
		path:`/${modelName}/fullMenu`,
		config:{
			handler:(request,reply)=>{
				Power.getFullMenu().then(datas => {
					reply.response(datas);
				}).catch(err => reply(err));
			},
			description:'获取所有菜单',
			notes:'所有菜单'
		}
	},{
		method:'GET',
		path:`/${modelName}/menu`,
		config:{
			handler:(request,reply) => {
				Power.getRoleMenu(request.user).then(menu => {
					reply.response(menu);
				}).catch(err => reply(err));
			},
			description:'获取菜单',
			notes:'根据权限获取菜单'
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

/**
 * 删除资源，要把其子资源一起删除，还要删除与该资源关联的角色的关联信息
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
			},
			transaction:t
		}).then(datas => {
			return Models.role_source.destroy({
				where:{
					source_id:id
				},
				transaction:t 
			})
		}).then(datas => {
			return deleteChildren([id],1,t);
		}).then(length => {
			t.commit();
			return reply.response({data:length});
		}).catch(err => {
			t.rollback();
			let error = Boom.badImplementation(err.message);
	    	return reply(error);
		})
	})
}

function deleteChildren(ids,length,t){
	let childrenIds = [],l,i;
	return new Promise((resolve,reject) => {
		Models[modelName].findAll({
			where:{
				father:{
					$in:ids
				}
			},
			transaction:t
		}).then(datas => {
			l = datas.length;
			length += l;
			if(l){
				for(i=0;i<l;i++){
					childrenIds.push(datas[i].id);
				}
				console.log('####')
				console.log(childrenIds)
				Models[modelName].destroy({
					where:{
						id:{
							$in:childrenIds
						}
					},
					transaction:t
				}).then(data => {
					return deleteChildren(childrenIds,length,t);
				}).then(len => resolve(len)).catch(err => reject(err));
			}else{
				resolve(length);
			}
		}).catch(err => reject(err));
	});
}