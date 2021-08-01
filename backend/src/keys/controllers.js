'use strict';

// this file contains the logic, reponsible for creating , removing and getting keys

const utils = require('../common/writer.js');

const keyService = require("./services");

exports.getKeys = function getKeys (req, res, next) {
    // getKeys is a function to get already 
    // generate keys from database

    keyService.getKeys()
      .then(function (response) {
        console.log(response)
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};

exports.createKeys = function getKeys (req, res, next) {
    // createKeys is a function to create 
    // keys in the database
     keyService.createKey(req.body.key)
    .then(function (response) {
      utils.writeJson(res, response, response.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

exports.deleteKeys = function deleteKeys (req, res, next) {
  // deleteKeys is a function to delete 
  // keys in the database
  console.log(req.params.id)
  keyService.deleteKey(req.params.id)
  
  .then(function (response) {
    utils.writeJson(res, response, 204);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};


