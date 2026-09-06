import mongoose from "mongoose";
import env from "../config/env.js";


async function connectDB() {
    try{
        await mongoose.connect(env.mongo_URI)
        console.log('MongoDB Connected Successfully')
    }catch(err){
        console.log(err.message)
    }
}

export default connectDB
