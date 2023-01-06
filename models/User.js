const mongoose = require("mongoose")

const User = new mongoose.Schema({
    userID: { type: mongoose.Types.ObjectId} ,
    name : { type: String , required: true } ,
    email: { type: String , required: true } ,
    createdOn: { type: Date, default: Date.now },
    status : { type: Number , default: 0} // Status specifies whether the user is authenticated or not eg: 1- User access is restricted , 0- Full user access , 
})


module.exports = mongoose.model("Users" , User);