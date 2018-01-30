/**
 *created by yuxiaojing on 2017-7-28
 * 入口文件
 */

'use strict';

const Hapi = require('hapi')
const plugins = require('./plugins.js')
const routes = require('./routes')
const models = require('./proxy/models')
const Fast = require('./routes/fast.js')
const Validate = require('./proxy/logic/validate.js')

const server = new Hapi.Server({ debug: { request: ['error','log'] } })

let validate = function (decoded, request, callback) {
    Validate.validateToken(decoded.id).then(data => {
        request.user = data;
        return callback(null, true)

    }).catch(err => {
        return callback(err, false)
    });
};

server.connection({ port: 8000, host: 'localhost' })

server.log(['error', 'database', 'read','log'])

server.register(plugins,(err) => {

    if(err){
      console.log(err);
    }
    server.auth.strategy('jwt', 'jwt',
    { key:Fast.jwtCert,          // Never Share your secret key 
      validateFunc: validate,            // validate function defined above 
      verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm 
    });
 
    server.auth.default('jwt');

    server.route(routes);

    server.start( (err) => {
       if (err) {
            console.log(err);
        } else {
            console.log('Server running at:', server.info.uri);
        }
    });
});




let initDb = function(){
	let sequelize = models.sequelize;

	sequelize.sync({force:false}).then(function() {
		console.log("connection successed");
        //向user表中插入root账号
        if(models.user){
            models.user.upsert({
                user_name:'root',
                password:'root',
                description:'超级管理员',
                level:0
            });
        }
        
	}).catch((err) => {
		console.log("connection failed due to error: %s",err)
	});
}

initDb();