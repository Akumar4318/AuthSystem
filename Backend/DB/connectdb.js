
const mongoose=require('mongoose')

require('dotenv').config()
const connectDB=async()=>{

    mongoose.connect(process.env.DATABASE_URL)
    .then(
        console.log("DB CONNECTED SUCESSFULLY")
    ).catch((error)=>{
        console.error(error)
        console.log("db not connectd")
        process.exit(1) // failure o status code is sucess
    })
  
}

module.exports=connectDB