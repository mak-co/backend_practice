import app from "./app/app.js"
import env from "./app/confiq/env.js";
import connectDB from "./app/confiq/db.js";

const PORT =process.env.PORT || 5000;


const startServer = async()=>{
    await connectDB();
     
    app.listen(env.PORT,()=>{
    console.log(`Ex04-Server is running on Port: ${PORT}`)
})
}

startServer();
