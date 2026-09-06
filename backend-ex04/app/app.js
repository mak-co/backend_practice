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

app.use(requestLogger)  // Note - we use Morgan for this &
// morgan is basically a pre-built request-logging middleware.

app.use("/tasks",taskRoutes)
// Note - is Express's built-in way of doing Route Modularization.
// Instead of writing all your HTTP endpoints directly on the main 
// app object in one massive file, it attaches a dedicated router file 
// (taskRoutes) to a specific URL path prefix ("/tasks").

app.use(errorMiddleWare)

export default app