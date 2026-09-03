//Now we connect the HTTP endpoint to the controller.

import express from "express"
import taskController from "../controllers/taskController.js"  
import asyncHandler from "../utils/asyncHandler.js"
import AppError from "../utils/AppError.js"


const router = express.Router()


router.post("/", asyncHandler(taskController.createTask));


export default router;