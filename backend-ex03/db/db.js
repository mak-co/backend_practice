import mongoose from "mongoose";

async function connectDB(){

    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:'ex03'  // creating a new database folder(laymen)
        })
        console.log("MongoDB connected successfully")
    }catch(err){
        console.log(err.message)
        process.exit(1)
    }
}

export default connectDB