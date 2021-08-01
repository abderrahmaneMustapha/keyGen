"use strict";
const Models = require('./models')
var uuid = require('uuid');

exports.createKey =  (key)=>{
 
  return new Promise( async function (resolve, reject) {
    var result = []
    try{
      result =  await Models.key.create({id : uuid.v1(), name : key, key:uuid.v4()})
    }
    catch(error){
      if (error.message.indexOf("duplicate") > 0)
      resolve({"error" : "a record with the same name already exists", "code": 409});
      else
      resolve({"error" : "cant create a new record", "code":  424});
    }  
    
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

exports.getKeys =  (query)=>{
  return new Promise( async function (resolve, reject) {
    let result = []
    if( typeof query !== 'undefined'){
      query = " "
    }
    console.log("query: ", query)
    if (query.length > 1 )
    result = await Models.key.find({ name : query}).select('-_id -__v').sort({createdAt: "descending"});
    else 
    result = await Models.key.find({}).select('-_id -__v').sort({createdAt: "descending"});
    if (Object.keys(result).length > 0) {
      resolve(result);
    } else {
      resolve();
    }
  
  })
}