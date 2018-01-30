/**
 * created by yuxiaojing on 2017-7-28
 * 
 */

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config.js');

let db = {};

let sequelize = new Sequelize(config.mySql.database,
  config.mySql.user,
  config.mySql.password, 
  config.dbConfig );

let source = __dirname ;

fs
  .readdirSync(__dirname)
  .filter(function(file){
    return (file.indexOf('.') !== 0) && (file !== "index.js")
  })
  .forEach(function(file){

    let model = sequelize["import"](path.join(source,file)); 
    model.sync(); //同步模型
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


