const mongoose=require('mongoose')
const contactModel=mongoose.Schema({

  userId:{
type:mongoose.Schema.Types.ObjectId,
required:true,
ref:'users'
  },
  
  name:{
      type:String,
      required:[true,'All fields are required']  
    },
    phone:{
        type:String,
        required:[true,'All feilds are required'],
        unique:true
    }
})

module.exports=mongoose.model('contact',contactModel)