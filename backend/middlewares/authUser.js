import jwt from "jsonwebtoken"



const authUser =async (req,res,next)=>{
    
    const {token} = req.headers

    if (!token){
        return res.json({
            success:false,
            message:"Not authorized, Login again"
        })
    }
    try {

        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)

        if (!tokenDecode){
            return res.json({
                success:false,
                message:"Not Authorized"
            })
        }

        req.body.userId  = tokenDecode.id
        next()


    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }

}

export default authUser