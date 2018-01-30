/**
 * created by yuxiaojing on 2017-8-15
 * 数据库基础操作：增删改查
 */

const Boom = require('boom');

const Models = require('../models/index.js')

module.exports = function(modelName) {

	return {
		getList:getList,
		getDetail:getDetail,
		upsertData:upsertData,
		deleteData:deleteData,
		getListSplitPage:getListSplitPage,
		createTransaction:createTransaction

	}

	/**
	 * 获取所有列表
	 * @param  {[type]} filed [字段筛选]
	 * @param  {[type]} where [description]
	 * @return {[type]}       [description]
	 */
	function getList (filed,where) {
		let options = {};
		if(filed){
			options.attributes = filed;
		}
		if(where) {
			options.where = where;
		}
		return function(request,reply) {
			Models[modelName].findAll(options).then(datas => {
		        return reply.response({data:datas});
		    }).catch(err => {
		    	let error = Boom.badImplementation(err.message);
		    	return reply(error);
		    });
		}
	}

	/**
	 * 分页获取列表，以及查询
	 * @param  {[type]} filed [字段筛选]
	 * @return {[type]}       [description]
	 */
	function getListSplitPage(filed) {
		let options = {};
		if(filed){
			options.attributes = filed;
		}
		return function(request,reply) {
			let params = request.payload,
				size = params.size || 10,
				page = params.page || 1;
			options.limit = size;
			options.offset = (page - 1) * size;
			if(params.search){
				options.where = {};
				options.where = params.search;

			}
			if(params.sort){
				options.order = [];
				for(let i in params.sort){
					if(params.sort.hasOwnProperty(i)){
						params.sort[i] = params.sort[i] || 'ASC';
						options.order.push([i,params.sort[i]]);
					}
				}
			}
			Models[modelName].findAndCountAll(options).then(datas => {
				datas.page = parseInt(page);	
			  	datas.size = parseInt(size);
			  	datas.totalPage = Math.ceil(datas.count/size);
			  	reply.response({data:datas})
			}).catch(err => {
		    	let error = Boom.badImplementation(err.message);
		    	return reply(error);
		    });
		}
	}

	function getDetail (request,reply) {
		let id = request.params.id;
	    Models[modelName].findById(id).then(datas => {
	        return reply.response({data:datas});
	    }).catch(err => {
	    	let error = Boom.badImplementation(err.message);
	    	return reply(error);
	    });
	}

	function upsertData (request,reply) {
		var data = request.payload;
	    
	    Models[modelName].upsert(data).then(datas => {
	        return reply.response({data:datas});
	    }).catch(err => {
	    	let error = Boom.badImplementation(err.message);
	    	return reply(error);
	    });
	}

	function deleteData (request,reply) {
		let id = request.params.id;
	    Models[modelName].destroy({
	        where:{
	            id:id
	        }
	    }).then(datas => {
	        return reply.response({data:datas});
	    }).catch(err => {
	    	let error = Boom.badImplementation(err.message);
	    	return reply(error);
	    });
	}

	function createTransaction(callback){
		return Models.sequelize.transaction().then(t => {
			return callback(t)
		});
	}
}
