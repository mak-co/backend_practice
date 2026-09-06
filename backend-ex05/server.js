//Exercise 5 - Authentication system
// 1) npm i bcrypt jsonwebtoken cookie-parser




import env from "./app/config/env.js";
import app from "../backend-ex05/app/app.js";
import connectDB from "./app/database/connectDb.js";

async function startServer(){
    await connectDB()

    app.listen(env.PORT,()=>{
    console.log(`Server is running on Port ${env.PORT}`)
})
}

startServer()

