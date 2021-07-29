'use strict';

var http = require('http');
const express = require('express')
const app = express()
var serverPort = process.env.PORT  || 8080;

// Create the app:

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
});

