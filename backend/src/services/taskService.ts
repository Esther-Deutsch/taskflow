import { Task } from "@prisma/client";
import prisma from "../config/client";

export const getAll = async () => {
  const tasks = prisma.task.findMany();
  return tasks;
};

export const getByBoard = async (board: number) => {
  const tasks = await prisma.task.findMany({
    where: { boardId: board },
  });
  return tasks;
};

export const add = async (task: Task) => {
  const newTask = await prisma.task.create({ data: task });
  return newTask;
};

export const update= async (taskId: number, newTask: Partial<Task>) => {
  const updated = await prisma.task.update({
    where: { id: taskId },
    data: newTask,
  });
  return updated;
};

export const deleteById = async (taskId: number) => {
  const task = await prisma.task.delete({ where: {id: taskId} });
  return task;
};
