

const express=require('express')
const router=express.Router()




const{SignUP,Login,Logout}=require('../Controllers/auth')


// routes

router.post('/signup',SignUP);
router.post('/login',Login);
router.post('/logout',Logout);



module.exports=router