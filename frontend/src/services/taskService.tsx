import apiClient from "./apiClient";
import { Task } from "../types/task";

export const TaskService = {
  getAll: async (): Promise<Task[]> => {
    const res = await apiClient.get("/tasks/getAllTasks");
    return res.data;
  },

  getById: async (id: number): Promise<Task> => {
    const res = await apiClient.get(`/tasks/${id}`);
    return res.data;
  },

  create: async (task: Partial<Task>): Promise<Task> => {
    const res = await apiClient.post("/tasks", task);
    return res.data;
  },

  update: async (id: number, updates: Partial<Task>): Promise<Task> => {
    const res = await apiClient.put(`/tasks/${id}`, updates);
    return res.data;
  },

  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`/tasks/${id}`);
  },
};