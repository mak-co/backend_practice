import env from "./src/config/env.js"
import app from "./src/app.js"
import connectDB from "./src/database/connectDb.js"


async function startServer(){
  await connectDB()

  
app.listen(env.PORT, () => {
  console.log(`Server is running on Port ${env.PORT}`);
});
}

startServer();
