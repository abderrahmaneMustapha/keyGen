'use strict';


//============= packages
var http = require('http');
const express = require('express')
var cors = require('cors')

//============

//==== files
const keysRouter = require('../keys/routes')
//=====

//==== db connection
require('./middlewares/mongoose')
//====

//====
var serverPort = process.env.PORT  || 8080;
const app = express()
app.use(cors())
//====

//app routes
app.use('/api/keys/', keysRouter)
//

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
});

