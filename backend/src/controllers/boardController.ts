import { Request, Response } from "express";
import { getAll, getById, add, update, deleteById } from "../services/boardService";
import { error } from "console";

export const getBoards = async (req: Request, res: Response) => {
  try {
    const boards = await getAll();
    return res.status(200).json(boards);
  } catch (err: any) {
    return res.status(500).json({ error: err.message ?? "Server error" });
  }
};

export const getBoardById = async (req: Request, res: Response) => {
  try {
    const boardId = req.query.id;
    const board = await getById(Number(boardId));
    return res.status(200).json(board);
  } catch (err: any) {
    return res.status(500).json({ error: err.message ?? "Server error" });
  }
};

export const createBoard = async (req: Request, res: Response) => {
  try {
    const { name, ownerId } = req.body;
    if (!name || ownerId === undefined) {
      return res.status(400).json({ error: "name and ownerId are required" });
    }

    const boardData = {
      name,
      ownerId: Number(ownerId),
    };

    const newBoard = await add(boardData as any);
    return res.status(201).json(newBoard);
  } catch (err: any) {
    return res.status(500).json({ error: err.message ?? "Server error" });
  }
};

export const updateBoard = async (req: Request, res: Response) => {
  try {
    const boardId = Number(req.params.id);
    if (Number.isNaN(boardId)) {
      return res.status(400).json({ error: "Invalid board id" });
    }
    const updated = await update(boardId, req.body as any);
    return res.status(200).json(updated);
  } catch (err: any) {
    // אם אין רשומה prisma זורק שגיאה — ניתן להמיר ל־404 אם רוצים
    return res.status(500).json({ error: err.message ?? "Server error" });
  }
};

export const deleteBoard = async (req: Request, res: Response) => {
  try {
    const boardId = Number(req.params.id);
    if (Number.isNaN(boardId)) {
      return res.status(400).json({ error: "Invalid board id" });
    }
    await deleteById(boardId);
    return res.status(204).end();
  } catch (err: any) {
    return res.status(500).json({ error: err.message ?? "Server error" });
  }
};
