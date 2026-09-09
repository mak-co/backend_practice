import mongoose from "mongoose"
import Task from "../models/Task.js"
import { authenticate } from "../middleware/auth.middleware.js"

export const createTask =async(req,res)=>{
    const {title,description,status,priority}=req.body

    
    const task = await Task.create(
        {
          ...req.body,
          user:req.user._id
        }
    )

    res.status(201).json({
        success:true,
        message:"Task created successfully"
    }
    )
}