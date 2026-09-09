import mongoose from "mongoose";
import env from "../config/env.js";

async function connectDB(){
    try{
       await mongoose.connect(env.MONGO_URI,{
            dbName:"TaskManager"
        })
        console.log("MongoDB is connected")
    }catch(error){
        console.log(error.message)
    }
}


export default connectDB