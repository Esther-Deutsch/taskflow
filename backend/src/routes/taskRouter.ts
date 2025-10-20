
import express from "express";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/taskController"

const router = express.Router();

router.get("/getAllTasks", getTasks)
router.get("/getBoardTasks/:id", getTasks)
router.post("/newTask", createTask)
router.put("/updateTask/:id", updateTask)
router.delete("/deleteTask/:id", deleteTask)

export default router;