import { Schema, Model,model, Types } from "mongoose";

const User = new Schema({
    userID : { type: Types.ObjectId} ,
    name : { type: String , required: true } ,
    email: { type: String , required: true } ,
    createdOn: { type: Date, default: Date.now },
    status : { type: Number , default: 0} // Status specifies whether the user is authenticated or not eg: 1- User access is restricted , 0- Full user access , 
})


export default model("Users" , User);