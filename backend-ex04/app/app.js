// Note - app.js will configure Express or
//here is my Express application
//server.js will actually start listening or 
// start this application on port 3000
//it helps in testing

import express from "express"
import taskRoutes from "./routes/taskRoutes.js"

const app = express()


app.use(express.json())

app.use("/tasks",taskRoutes)


export default app