import express from "express";
import { createTask, getTask,getById } from "../controllers/task.controllers.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router =express.Router();

// create Task
router.post("/createtask",authenticate,authorizeRoles("ADMIN"),createTask)

router.get("/getTask",authenticate,authorizeRoles("ADMIN"),getTask)

router.get("/:id",authenticate,getById)

export default router