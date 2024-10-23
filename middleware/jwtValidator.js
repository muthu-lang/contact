const jwt=require('jsonwebtoken')

const validate=(req,res,next)=>{
    const token=req.cookies.token

    const verify=jwt.verify(token,process.env.JWT_SECRET)
    if(verify)
    {
        req.user=verify
        next()
    }
    else
    {
        res.json('login again')
        
    }
}

module.exports=validate