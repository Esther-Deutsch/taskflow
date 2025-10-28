import { Task } from "./task";
import { User } from "./user";

export interface Board {
  id: number;
  name: string;
  ownerId: number;
  owner?: User;
  tasks: Task[];
}

export interface CreateBoard {
  name: string;
  ownerId: number;
}

export type UpdateBoard = Partial<CreateBoard>;