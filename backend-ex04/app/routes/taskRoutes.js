//Now we connect the HTTP endpoint to the controller.

import express from "express"
import taskController from "../controllers/taskController.js"  

const router = express.Router()

router.post("/",taskController.createTask)

export default router;