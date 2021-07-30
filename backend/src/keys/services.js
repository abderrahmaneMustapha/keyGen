"use strict";
const Models = require('./models')
var uuid = require('uuid');

exports.createKey =  (key)=>{

  return new Promise( async function (resolve, reject) {
    let result = new Models.key({id : uuid.v1(), name : key, key:uuid.v4()})
    result.save()
    if (Object.keys(result).length > 0) {
      resolve(result[Object.keys(result)]);
    } else {
      resolve();
    }
  
  })
}

exports.deleteKey =  (id)=>{

  return new Promise( async function (resolve, reject) {
    let result = await Models.key.deleteOne({'id': id});
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