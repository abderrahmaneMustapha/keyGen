// connect to the database
const mongoose = require('mongoose');
const uri = "mmongodb+srv://abdou:abdou@nodetuts.ue0yy.mongodb.net/keygen?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection
// error
db.on('error', console.error.bind("connection error"))
db.on("open", ()=> {
  console.log("MongoDB database connection established successfully");
});

module.exports = db