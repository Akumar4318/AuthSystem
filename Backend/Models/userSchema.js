

const mongoose=require('mongoose')


// timestamp enabels the createat and updateat in the schema

const userSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    lastLogin:{
        type:Date,
        default:Date.now

    },
    isVarified:{
        type:Boolean,
        default:false,

    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,
     
},{timestamps:true})



module.exports=mongoose.model("user",userSchema)