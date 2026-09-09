import jwt, { decode } from "jsonwebtoken"
import User from "../models/User.js";
import env from "../config/env.js";

export const authenticate =async(req,res,next)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(400).json({
            success: false,
            message: "authentication required"
        })
    }

    try{
        const decoded = jwt.verify(
            token,
            env.JWT_SECRET
        )
        
        const user = await User.findById(decoded.userId)

        if(!user){
            return res.status(401).json({
                success:false,
                message:"User no longer exists"
            })  
        }

        req.user=user
        next()


    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Invalid or expired token",
            message: error.message
        })
    }

    
}   
