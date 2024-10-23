const users=require('../models/userModel')
const asynHandler=require('express-async-handler')
const bcrypt=require('bcrypt')
const { Error } = require('mongoose')

const jwt=require('jsonwebtoken')

const singnup=asynHandler(async(req,res)=>{
    const{name,email,password}=req.body
    if(!name||!email||!password){
        res.status(400)
        throw new Error('Enter all the feilds')
    }
    const user=await users.findOne({email})
    if(user){
        res.status(401).json("Email already taken")
    }
    else{
        const hashedpassword=await bcrypt.hash(password,10)
        const newuser= await users.create({name,password:hashedpassword,email})

        res.status(201).json({
            name:newuser.name,email:newuser.email
        })
    }
})


// const demo=asynHandler(async(req,res)=>{
//     const token=req.cookies.token

//     if(token)
//     {
//         res.json('token is valid')
//     }
//     else{
//         res.json('token is invalid')
//     }
// })


const login=asynHandler(async(req,res)=>{
const {email,password}=req.body
if(!email||!password){
    res.status(400)
    throw new Error('Enter all the fields')
}
const user=await users .findOne({email})
if(!user){
    return res.status(400).json('user no found')
}
const verify=await bcrypt.compare(password,user.password)
if(verify)
{
    // res.cookie('token','ab123',{maxAge:'20000'})

    const token=jwt.sign({
        name:user.name,id:user._id
    },process.env.JWT_SECRET,{expiresIn:'1h'})
    res.cookie('token',token)
    res.status(200).json('login successfully')
}
else{
    res.status(400).json('Invalid Credentials')
}
})

module.exports={singnup,login}