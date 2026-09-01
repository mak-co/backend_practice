//instead of using an in-memory tasks array and manual validation, now 
//we are going to replace that array with MongoDB + Mongoose

//step 1 - Install the package Mongoose(Mongoose is an Object Data Modeling
// (ODM) library for MongoDB and Node.js that manages data 
// relationships, provides schema validation,and translates 
// between code objects and database documents)
// by npm i mongoose
//step 2 - Connect Node to MongoDB
import mongoose from "mongoose"

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}



export default connectDB