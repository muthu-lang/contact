const errorHandler=(err,req,res,next)=>{
    res.status(401).json({message:err.message,stack:err.stack})
}

module.exports=errorHandler