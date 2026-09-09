import jwt from "jsonwebtoken"
import env from "../config/env.js"



export function generateToken(user,res){
    const token = jwt.sign(
    {userId:user._id},
    env.JWT_SECRET,
    {expiresIn:'1h'}    
    )

    res.cookie("token", token, {
         httpOnly: true, // Prevents client-side JS from reading the cookie (stops XSS)
         secure: env.JWT_ENV === "producton", // Use HTTPS in production
         sameSite: "strict", // Protects against CSRF attacks
         maxAge: 3600000, // 1 hour in millisecond for cookies not for token
     });

}