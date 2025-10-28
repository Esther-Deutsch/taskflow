
import express from "express";
import { createBoard, deleteBoard, getBoardById, getBoards, updateBoard } from "../controllers/boardController"

const router = express.Router();

router.get("/getAllBoards", getBoards)
router.get("/getBoardById/:id", getBoardById)
router.post("/newBoard", createBoard)
router.put("/updateBoard/:id", updateBoard)
router.delete("/deleteBoard/:id", deleteBoard)

export default router;