// connect to the database
const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/keygen"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection
// error
db.on('error', console.error.bind("connection error"))
db.on("open", ()=> {
  console.log("MongoDB database connection established successfully");
});

module.exports = db