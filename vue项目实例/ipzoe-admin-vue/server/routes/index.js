/**	
 * created by yuxiaojing on 2017-7-28
 * 路由模块
 */

'use strict';

const fs = require('fs');
// const path = require('path');
const Joi = require('joi');
const Boom = require('boom');
const Models = require('../proxy/models');

let routeArr = [];

module.exports = (function(){
    fs
      .readdirSync(__dirname)
      .filter(function(file){
        return (file.indexOf('.') !== 0) && (file !== "index.js") && (file !== "fast.js")
      })
      .forEach(function(file){
        let model = require('./' +file);
        routeArr = routeArr.concat(model); 
      });
    return routeArr;
})();