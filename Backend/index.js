
const express=require('express')

const app=express()

require('dotenv').config()
app.use(express.json()) // allow us to parse incoming request :req.body

const connectDB=require('./DB/connectdb')
connectDB() 


const authroutes=require('./Routes/authRoute')

app.use('/api/auth',authroutes)

const PORT=process.env.PORT || 4000
app.listen(PORT,(req,res)=>{

    console.log(`server created at port no. ${PORT}`)
})


app.get('/',(req,res)=>{
    res.send('hello world')
})