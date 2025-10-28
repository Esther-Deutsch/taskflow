import { Board } from "./board";

export enum Status {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: Status;
  boardId: number;
  board?: Board;
}

export interface CreateTask {
  title: string;
  description?: string;
  status?: Status;
  boardId: number;
}

export type UpdateTask = Partial<CreateTask>;

