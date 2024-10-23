const {json}=require('express') 
const contacts=require('../models/contactModel')


const getContacts=async(req,res)=>{
    try{
        const id=req.user.id
const allcontacts=await contacts.find({userId:id})
res.status(200).json(allcontacts)
    }
    catch(err){
        console.log(err)
    }
console.log('all contacts')
}

const addContacts=async(req,res)=>{
    const {name,phone}=req.body
    const id=req.user.id
    try{
        if(!name||!phone)
        {
          
            return res.status(400).json({msg:"please enter all fields"})
            
        }
        const contact=await contacts.create({name,phone,userId:id})
        res.status(201).json(contact)      
    }
    catch(err)
    {
        console.log(err)
    }

}

// const deleteContacts=async(req,res)=>{
//     const id=req.params.id
//     try{
//         const contact=await contacts.findById(id)
//         if(!contact){
//             return res.status(404).json("contact not found")
//         }
//         else{
//             await contacts.findByIdandDelete(id)
//             res.status(400).json("contact is deleted")
//         }
//     }
// }


const getSingleContacts=async(req,res)=>{
const {id}=req.params
try{
    
    const contact=await contacts.findById(id)
    if(!contact){
        return res.status(404).json("contact not found")
    }
    res.status(200).json(contact)
}
catch(err){
console.log(err)
}
}

module.exports={getContacts,addContacts,getSingleContacts}