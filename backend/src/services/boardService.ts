import { Board } from "@prisma/client";
import prisma from "../config/client";

export const getAll = async () => {
  const boards = prisma.board.findMany();
  return boards;
};

export const getById = async (boardId: number) => {
  const board = await prisma.board.findUnique({
    where: { id: boardId },
  });
  return board;
};

export const add = async (boad: Board) => {
  const newBoard = await prisma.board.create({ data: boad });
  return newBoard;
};

export const update= async (boardId: number, newBoard: Partial<Board>) => {
  const updated = await prisma.board.update({
    where: { id: boardId },
    data: newBoard,
  });
  return updated;
};

export const deleteById = async (boardId: number) => {
  const boad = await prisma.board.delete({ where: {id: boardId} });
  return boad;
};
