const { string, required } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String,required: true},
    email: {type: String,  required: true,unique: true},
    number: {type: Number, required:true}
},{timestamps: true});

module.exports = mongoose.model("user",userSchema);