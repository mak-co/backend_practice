import { hash } from "bcrypt"
import express from "express"
import bcrypt from "bcrypt"
import User from "../models/User.js"
import { generateToken } from "../utils/utils.generateToken.js"

export const register = async (req,res)=>{
    try{
        const {userName,email,password}=req.body

    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "userName,email & password are required",
      });
    }
      const hashedPassword = await bcrypt.hash(password, 10);

    
      // create User
      const user = await User.create({
        userName,
        email,
        password: hashedPassword,
      });

      await generateToken(user,res)

   
      res.status(201).json({
        success: true,
        message: "New user created successfully",
        user:user
      });
    
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}


// login we already have logged in when registeratin complete as 
// login means our cookies or u can say the user have the token
export async function login(req,res){
  const {email,userName,password}=req.body

  if(!email || !userName || !password){
    return res.status(401).json({
      success:false,
      message:"Email, username & password required"
    })
  }




  console.log(email,userName,password)

}