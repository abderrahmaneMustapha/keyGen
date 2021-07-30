"use strict";
const Models = require('./models')
var uuid = require('uuid');

exports.createKey =  ()=>{

  return new Promise( async function (resolve, reject) {
    let result = new Models.key({id : uuid.v1(), name : "new key", key:uuid.v4()})
    result.save()
    if (Object.keys(result).length > 0) {
      resolve(result[Object.keys(result)]);
    } else {
      resolve();
    }
  
  })
}

exports.deleteKey =  ()=>{

  return new Promise( async function (resolve, reject) {
    let result = await Models.key.deleteOne({'name': 'new key'});
    if (Object.keys(result).length > 0) {
      resolve(result[Object.keys(result)]);
    } else {
      resolve();
    }
  
  })
}

exports.getKeys =  ()=>{
  return new Promise( async function (resolve, reject) {
    let result = await Models.key.find({}).select('-_id -__v');
    if (Object.keys(result).length > 0) {
      resolve(result);
    } else {
      resolve();
    }
  
  })
}