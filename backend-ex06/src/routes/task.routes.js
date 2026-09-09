import express from "express";
import { createTask } from "../controllers/task.controllers.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router =express.Router();

// create Task
router.post("/createtask",authenticate,createTask)

export default router