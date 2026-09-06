//Now we connect the HTTP endpoint to the controller.
// 1) Inside your taskRoutes.js file, you create a mini-application using express.Router():
// 2) When you import that router and write app.use("/tasks", taskRoutes), 
//    Express prefixes every route in that router with "/tasks":

import express from "express"  // importing express obviously 
import taskController from "../controllers/taskController.js"  
import asyncHandler from "../utils/asyncHandler.js"
import AppError from "../utils/AppError.js"


const router = express.Router()  //creating router using express

// post endpoint
router.post("/", asyncHandler(taskController.createTask));  //building endpoint using router which will be 
// attached as the endpoint prefix to the main api 

// get endpoint 
router.get("/",asyncHandler(taskController.getTask))
// 1) first we are creating a router endpoint which will be attached to the main api as a suffix while sending the taskRoutes.js file
// 2) then creating a get end point and using asyncHandler instead of async which will handle the try catch error or
//    It catches a rejected Promise and forwards the error to Express using next(error).
// 3) then we are calling getTask from taskcontroller where we build the business logic for the getTask

export default router;