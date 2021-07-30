const mongoose = require('mongoose')

const Schema = mongoose.Schema


const Key  = new Schema({
    id : {type : String, unique:[ true]},
    name : { type : String,unique:[ true, 'name already exists'], required:[true, ' this field is required']},
    key : { type: String, unique:[ true, 'key already exists'],  required : [true, ' this field is required']},
})

key = mongoose.model("Key", Key)
module.exports =  {key}