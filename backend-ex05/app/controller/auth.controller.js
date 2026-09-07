import bcrypt from "bcrypt"
import User from "../models/User.js"

export const register = async(req,res)=>{
    const {userName,email,password}=req.body;

// check required fields
    if(!userName || !email|| !password){
        return res.status(400).json({
            success:false,
            message:"userName,email and password are required"
        })
    }


// check if user already exist
    const existingUser = await  User.findOne({email});

    if(existingUser){
        return res.status(400).json({
            success:false,
            message:"User already exists"
        })
    }

// Hash Password
const hashedPassword = await bcrypt.hash(password,10)

// create User
const user = await User.create({
    userName,email,
    password: hashedPassword
})

res.status(201).json({
    success:true,
    message:"User registered successfully",
    user:{
        id:user._id,
        name:user.name,
        email:user.email
    }
})
}

export const login = async (req,res)=>{
    const {userName,email,password}= req.body

    if(!userName || !email || !password){
        res.status(400).json({
            success:false,
            meassage:"userName,Email & password are required"
        })
    }


    
}

