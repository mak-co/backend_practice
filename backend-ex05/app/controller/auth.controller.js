import bcrypt from "bcrypt";
import User from "../models/User.js";
import env from "../config/env.js"



// for jwt token
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  const { userName, email, password } = req.body;

  // check required fields
  if (!userName || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "userName,email and password are required",
    });
  }

  // check if user already exist
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create User
  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

export const login = async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
   return res.status(400).json({
      success: false,
      meassage: "userName,Email & password are required",
    });
  }

  const existingUser = await User.findOne({ userName, email });

  if (!existingUser) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password,
  );

  
if(!isPasswordCorrect){
    res.status(401).json({
        success:false,
        message:"Invalid email or password"
    })
}



const token = jwt.sign(
  {
    userId: existingUser._id,
  },
  env.JWT_SECRET,
  {
    expiresIn: env.JWT_EXPIRES_IN,
  },
);

res.cookie("token", token, {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

res.status(200).json({
    success:true,
    message:"Login successfully",
    user:{
        id:existingUser._id,
        userName:existingUser.userName,
        email:existingUser.email
    }
})

}


export const getMe = async (req,res)=>{
  res.status(200).json({
    success:true,
    user:{
      id:req.user._id,
      userName: req.user.userName,
      email: req.user.email
    }
  })
}


//logout

export const logout = async(req,res)=>{
  res.clearCookie("token");
  res.status(200).json({
    success:true,
    message:"Logout successfully"
  })
}

