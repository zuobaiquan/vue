/**
 * created by yuxiaojing on 2017-8-17
 * 权限管理相关逻辑，包含用户，菜单（资源），角色三个模块
 */

'use strict';

const Boom = require('boom');

const Models = require('../models/index.js')
const Basic = require('./basicopr.js')('power')

module.exports = {
	getFullMenu:getFullMenu,
	upsetRole:upsetRole,
	upsetUser:upsetUser,
	getRoleMenu:getRoleMenu
}

function getFullMenu(){
	let m = new Map(),
		promiseArr = [],i,l;
	return new Promise((resolve,reject)=>{
		Models.source.findAll({
			where:{
				level:0
			},
			order:[['order']]
		}).then(datas => {
			l = datas.length;
			if(l){
				for(i=0;i<l;i++){
					m.set(datas[i].id,datas[i]);
					promiseArr.push(getChildren(datas[i].id));
				}
				Promise.all(promiseArr).then(dataArr => {
					for(i=0;i<l;i++){
						if(dataArr[i][0] && dataArr[i][0].father){
							m.get(dataArr[i][0].father).dataValues.children = dataArr[i];
						}
					}
					resolve([...m.values()])
				}).catch(err => {
			    	reject(err);
				});
			}else{
				resolve(datas);	
			}
			
		}).catch(err => {
			let error = Boom.badImplementation(err.message);
	    	reject(error);
		})
	})
}


function fullSourceIds(ids,m){
	let idArr = [],promiseArr =[],
		l = ids.length,i;
	return new Promise((resolve,reject) => {
		for(i=0;i<l;i++){
			promiseArr.push(Models.source.findOne({
				where:{
					id:ids[i]
				}
			}));
		}
		Promise.all(promiseArr).then(dataArr => {
			l = dataArr.length;
			if(l){
				for(i=0;i<l;i++){
					if(dataArr[i].father){
						m.set(dataArr[i].father,dataArr[i].father);
						idArr.push(dataArr[i].father);
					}
				}
				if(idArr.length){
					fullSourceIds(idArr,m).then(map => {
						resolve(map);
					}).catch(err => reject(err));
				}else{
					resolve(m);
				}
			}else{
				resolve(m);
			}
		}).catch(err => reject(err));
	})
}

function getMenu(ids){
	let m = new Map(),
		promiseArr = [],i,l;
	return new Promise((resolve,reject) => {
		Models.source.findAll({
			where:{
				level:0,
				id:{
					$in:ids
				},
			},
			order:[['order']]
		}).then(datas => {
			l = datas.length;
			if(l){
				for(i=0;i<l;i++){
					m.set(datas[i].id,datas[i]);
					promiseArr.push(getChildren(datas[i].id,ids));
				}
				Promise.all(promiseArr).then(dataArr => {
					for(i=0;i<l;i++){
						if(dataArr[i][0] && dataArr[i][0].father){
							m.get(dataArr[i][0].father).dataValues.children = dataArr[i];
						}
					}
					resolve([...m.values()])
				}).catch(err => {
			    	reject(err);
				});
			}else{
				resolve(datas);
			}
		}).catch(err => {
			let error = Boom.badImplementation(err.message);
	    	reject(error);
		})
	})
}

function getRoleMenu(user){
	let m = new Map(),
		rolesId = [],
		sourceArr = [],
		promiseArr = [],i,l;
	return new Promise((resolve,reject) => {
		if(user.level){
			Models.user_role.findAll({
				where:{
					user_id:user.id
				}
			}).then(datas => {
				l = datas.length;
				for(i=0;i<l;i++){
					rolesId.push(datas[i].role_id);
				}
				return Models.role_source.findAll({
					where:{
						role_id:{
							$in:rolesId
						}
					}
				});
			}).then(datas => {
				l = datas.length;
				for(i=0;i<l;i++){
					sourceArr.push(datas[i].source_id);
					m.set(datas[i].source_id,datas[i].source_id);
				}
				return  fullSourceIds(sourceArr,m);
			}).then(map => {
				let idArr = [...map.values()];
				// 获取到了资源id
				return getMenu(idArr)
				
			}).then(menu => resolve(menu)).catch(err => {
				console.log(err)
				let error = Boom.badImplementation(err.message);
		    	reject(error);
			});
		}else{
			getFullMenu().then(menu => resolve(menu)).catch(err => reject(err));
		}
		
	});
}

function getChildren(id,idArr) {
	let m = new Map(),
		promiseArr=[],i,l;
	return new Promise((resolve,reject) => {
		let where = {
				father:id,
				type:{
					$not:2
				}
			}
		if(idArr){
			where.id = {
				$in:idArr
			}
		}
		Models.source.findAll({
			where:where
		}).then(datas => {
			l = datas.length;
			if(l){
				for(i=0;i<l;i++){
					m.set(datas[i].id,datas[i]);
					promiseArr.push(getChildren(datas[i].id));
				}
				Promise.all(promiseArr).then(dataArr => {
					for(i=0;i<l;i++){
						if(dataArr[i][0] && dataArr[i][0].father){
							m.get(dataArr[i][0].father).dataValues.children = dataArr[i];
						}
					}
					resolve([...m.values()])
				}).catch(err => {
			    	reject(err);
				});
			}else{
				resolve(datas)
			}
		}).catch(err => {
			let error = Boom.badImplementation(err.message);
	    	reject(error);
		});
	});
}

/**
 * 添加、更新用户，同时更新用户-角色关联信息
 * @param  {[type]} request [description]
 * @param  {[type]} reply   [description]
 * @return {[type]}         [description]
 */
function upsetUser(request,reply){
	let data = request.payload;
	let promiseArr = [],i,l;
	if(data.id){
		//更新
		Basic.createTransaction(t => {
			Models.user.update(data,{
	    		where:{
	    			id:data.id,
	    			user_name:data.user_name
	    		},
	    		transaction: t
	    	}).then(datas => {
	    		if(datas[0]){
	    			upsetUserRole(data,data.roles,t,true).then(user => {
	    				reply.response({data:user});
	    				return t.commit();
	    			}).catch(err => {
	    				let error = Boom.badImplementation(err.message);
	    				reply(error);
	    				return t.rollback();
	    			});
	    		}else{
	    			let error = Boom.badData('用户名不能修改');
	    			return reply(error);
	    		}
		        
		    }).catch(err => {
		    	let error = Boom.badImplementation(err.message);
		    	return reply(error);
		    });
		})
	}else{
		//新增
		Basic.createTransaction(t => {
			Models.user.create(data,{transaction:t}).then(datas => {
				if(datas){
					//添加成功，返回user
					upsetUserRole(datas,data.roles,t).then(user => {
	    				reply.response({data:user});
	    				return t.commit();
	    			}).catch(err => {
	    				let error = Boom.badImplementation(err.message);
	    				reply(error);
	    				return t.rollback();
	    			});
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
		})
	}
}

/**
 * 插入用户、角色关联数据
 * @param  {[type]}  user     [description]
 * @param  {[type]}  roles    [description]
 * @param  {[type]}  t        [description]
 * @param  {Boolean} isUpdate [description]
 * @return {[type]}           [description]
 */
function upsetUserRole(user,roles,t,isUpdate){
	let rolesArr = roles && roles.split(',') || [],
		l = rolesArr.length,
		promiseArr =[],i,
		options = {};
	return new Promise((resolve,reject) => {
		if(l){
			if(isUpdate){
				Models.user_role.destroy({
					where:{
						user_id:user.id
					}
				}).then(datas => {
					for(i=0;i<l;i++){
						promiseArr.push(Models.user_role.create({
							role_id:rolesArr[i],
							user_id:user.id
						},{transaction:t}));	
					}
					return Promise.all(promiseArr);
				}).then(data => resolve(user))
				.catch(err => reject(err));
			}else{
				for(i=0;i<l;i++){
					promiseArr.push(Models.user_role.create({
						role_id:rolesArr[i],
						user_id:user.id
					},{transaction:t}));	
				}
				Promise.all(promiseArr)
						.then(dataArr => resolve(user))
						.catch(err => reject(err));
			}
		}else{
			resolve(user);
		}
	})
}


/**
 * 添加、更新角色，同时更新角色-资源关联信息
 * @param  {[type]} request [description]
 * @param  {[type]} reply   [description]
 * @return {[type]}         [description]
 */
function upsetRole(request,reply){
	let data = request.payload;
	let promiseArr = [],i,l;
    if(data.id){
    	Basic.createTransaction(t => {
    		Models.roles.update(data,{
	    		where:{
	    			id:data.id,
	    			name:data.name
	    		},
	    		transaction: t
	    	}).then(datas => {
	    		if(datas[0]){
	    			//修改成功，开始添加资源关联关系
	    			upsetRoleSource(data,data.source,t,true).then(role => {
	    				reply.response({data:role});
	    				return t.commit();
	    			}).catch(err => {
	    				let error = Boom.badImplementation(err.message);
	    				reply(error);
	    				return t.rollback();
	    			});
	    		}else{
	    			let error = Boom.badData('角色不存在或角色名不能修改');
	    			reply(error);
	    			return t.rollback();
	    		}
		    }).catch(err => {
		    	let error = Boom.badImplementation(err.message);
		    	reply(error);
		    	return t.rollback();
		    });
    	});
    	
    }else{
    	Basic.createTransaction(t => {
    		Models.roles.create(data,{transaction: t}).then(datas => {
	    		if(datas){
	    			upsetRoleSource(datas,data.source,t).then(role => {
	    				reply.response({data:role});
	    				return t.commit();
	    			}).catch(err => {
	    				let error = Boom.badImplementation(err.message);
	    				reply(error);
	    				return t.rollback();
	    			});
	    		}else{
	    			let error = Boom.badData('角色名已存在');
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
 * 插入角色--资源关联数据
 * @param  {[type]} roleId [description]
 * @param  {[type]} source [description]
 * @param  {[type]} t      [description]
 * @return {[type]}        [description]
 */
function upsetRoleSource(role,source,t,isUpdate){
	let sourceArr = source && source.split(',') || [],
		l = sourceArr.length,
		promiseArr = [],i,
		options = {};
	return new Promise((resolve,reject) => {
		if(l){
				if(isUpdate){
					//更新前要把原来关系删除
					Models.role_source.destroy({
						where:{
							role_id:role.id
						}
					},{transaction:t}).then(data => {
						for(i=0;i<l;i++){
							promiseArr.push(Models.role_source.create({
								role_id:role.id,
								source_id:sourceArr[i]
							},{transaction:t}));	
						}
						return Promise.all(promiseArr)
					}).then(dataArr => resolve(role))
						.catch(err => reject(err));
				}else{
					for(i=0;i<l;i++){
						promiseArr.push(Models.role_source.create({
							role_id:role.id,
							source_id:sourceArr[i]
						},{transaction:t}));	
					}
					Promise.all(promiseArr)
							.then(dataArr => resolve(role))
							.catch(err => reject(err));
						
				}
			}else{
				resolve(role)
			}
		// getRole().then(role => {
			
		// }).catch(err => reject(err));
	})
	
}