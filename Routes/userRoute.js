const express=require('express')

const router=express.Router()
const{singnup,login}=require('../Controllers/userController')

router.post('/signup',singnup)
router.post('/login',login)
// router.post('/demo',demo)

module.exports=router