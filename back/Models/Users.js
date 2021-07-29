const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    phoneno: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date
    },
    password: {
        type: String,
        required:true,
        default: ""
    },
    name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    mywallet:{
        type:String,
        default:""
    }
})

const mydbvar = mongoose.connection.useDb("FinBookUser")
const User = mydbvar.model("Users", UserSchema);

module.exports = User;