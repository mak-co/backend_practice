import { hash } from "bcrypt";
import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../utils/utils.generateToken.js";

export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

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

    generateToken(user, res); //no need of await here
    // as it is synchronus function

    res.status(201).json({
      success: true,
      message: "New user created successfully",
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// login we already have logged in when registeratin complete as
// login means our cookies or u can say the user have the token
export async function login(req, res) {
  const { email, userName, password } = req.body;

  if (!email || !userName || !password) {
    return res.status(401).json({
      success: false,
      message: "Email, username & password required",
    });
  }

  const existingUser = User.findOne(email);

  if (!existingUser) {
    res.status(400).json({
      success: false,
      message: "user do not exits",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  if (hashedPassword !== existingUser.password) {
    return res.status(400).json({
      success: false,
      message: "email or password is incorrect",
    });
  }
  generateToken();
  res.status(400).json({
    success: true,
    message: "login Successfull",
    user: existingUser,
  });
}

//get me

export const getMe = (req, res) => {
  res.status(200).json({
    success: true,
    user: {
      id: req.user._id,
      userName: req.user.userName,
      email: req.user.email,
    },
  });
};
