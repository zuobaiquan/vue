/**
 * created by yuxiaojing on 2017/7/28
 * 项目插件列表
 */

'use strict';

const Good = require('good');
const Inert = require('inert');
const Vision = require('vision');
const Pack = require('../package');
const HapiSwagger = require('hapi-swagger');
const HapiAuthJwt2 = require('hapi-auth-jwt2');
// const HapiSwaggeredUi = require('hapi-swaggered-ui');

// cons = require');

// 文档插件
const Documentation = {
	'register': HapiSwagger,
    'options': {
	    info: {
	            'title': 'Test API Documentation',
	            'version': Pack.version
	        },
        tags:[{
            name:'admin',
            description:'后台接口'
        },{
            name:'public',
            description:'公共接口'
        },{
            name:'user',
            description:'用户'
        },{
            name:'source',
            description:'资源／菜单'
        },{
            name:'roles',
            description:'角色'
        }],
        grouping:'tags',
	    lang:'zh-cn'
	}
}

//日志插件
const Logs = {
    'register': Good,
    'options': {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}

const plugins = [Inert, Vision, Documentation, Logs, HapiAuthJwt2 ]

module.exports = plugins

