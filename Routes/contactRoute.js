const express=require('express')

const router=express.Router()

const validate=require('../middleware/jwtValidator')

const{getContacts,addContacts,getSingleContacts,deleteContacts}=require('../Controllers/contactController')


router.use(validate)
router.get('/getcontacts',getContacts)
router.get('/getcontacts/:id',getSingleContacts)
router.post('/addcontacts',addContacts)
router.post('/deletecontacts/:id',deleteContacts)

module.exports=router