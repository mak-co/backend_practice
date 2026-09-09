import express from "express"
import authRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser";
import taskRoutes from  "./routes/task.routes.js"
const app = express();

app.use(express.json())

// its a middleware which "For incoming requests, run cookie-parser before my routes."
app.use(cookieParser())

app.use("/auth",authRoutes)

app.use("/task",taskRoutes)

export default app;