import { Request, Response } from "express";
import { getAll, getByBoard, add, update, deleteById } from "../services/taskService";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const boardId = req.params.boardId ?? req.query.boardId;
    const tasks = boardId ? await getByBoard(Number(boardId)) : await getAll();
    return res.status(200).json(tasks);
  } catch (err: any) {
    return res.status(500).json({ error: err.message ?? "Server error" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, boardId } = req.body;
    if (!title || !status || boardId === undefined) {
      return res.status(400).json({ error: "title, status and boardId are required" });
    }

    const taskData = {
      title,
      description: description ?? null,
      status,
      boardId: Number(boardId),
    };

    // cast to any because service signature expects Task; adjust service type if needed
    const newTask = await add(taskData as any);
    return res.status(201).json(newTask);
  } catch (err: any) {
    return res.status(500).json({ error: err.message ?? "Server error" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = Number(req.params.id);
    if (Number.isNaN(taskId)) {
      return res.status(400).json({ error: "Invalid task id" });
    }
    const updated = await update(taskId, req.body as any);
    return res.status(200).json(updated);
  } catch (err: any) {
    // אם אין רשומה prisma זורק שגיאה — ניתן להמיר ל־404 אם רוצים
    return res.status(500).json({ error: err.message ?? "Server error" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = Number(req.params.id);
    if (Number.isNaN(taskId)) {
      return res.status(400).json({ error: "Invalid task id" });
    }
    await deleteById(taskId);
    return res.status(204).end();
  } catch (err: any) {
    return res.status(500).json({ error: err.message ?? "Server error" });
  }
};
