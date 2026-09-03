// Note - app.js will configure Express or
//here is my Express application
//server.js will actually start listening or 
// start this application on port 3000
//it helps in testing

import express from "express"
import taskRoutes from "./routes/taskRoutes.js"
import errorMiddleWare from "./middlewares/errorMiddleware.js"
import requestLogger from "./middlewares/requestLogger.js"

const app = express()

app.use(express.json())

app.use(requestLogger)

app.use("/tasks",taskRoutes)

app.use(errorMiddleWare)

export default app