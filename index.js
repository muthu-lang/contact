const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const contact=require('./Routes/contactRoute')
const userRoute=require('./Routes/userRoute')
const errorHandler=require('./middleware/errorHandler')
const cookieparser=require('cookie-parser')


  

app.use(cookieparser())
app.use(express.json())
app.use('/api/contacts',contact)
app.use('/api/users',userRoute)

app.use('/',(req,res)=>{
    res.json('same server connected')
})



app.use(errorHandler)
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('database connected')
    }).catch((msg) => {
        console.log(msg)
    })
const port = process.env.PORT || 5001
app.listen(port, () => {
    console.log(`server started ${port}`)
})
