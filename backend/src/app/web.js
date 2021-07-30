'use strict';


//============= packages
var http = require('http');
const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser');

//============

//==== files
const keysRouter = require('../keys/routes')
//=====

//==== db connection
require('./middlewares/mongoose')
//====

//====
const app = express()
const serverPort = process.env.PORT  || 8080;

app.use(cors())
app.use(express.json())
//====

//app routes
app.use('/api/keys/', keysRouter)
//

// == config part (will move this to a separate folder)
require('dotenv').config()
//== end
// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
});

