const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'All feilds are required']
    },
    password:{
        type:String,
        required:[true,'All feilds are required']
    },
    email:{
        type:String,
        required:[true,'All feilds are required'],
        unique:true
    },
})


module.exports=mongoose.model('user',userSchema)