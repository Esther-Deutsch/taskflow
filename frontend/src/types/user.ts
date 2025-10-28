import { Board } from "./board";

export interface User {
  id: number;
  email: string;
  password: string;
  boards: Board[];
}

export interface CreateUser {
  email: string;
  password: string;
}

export type UpdateUser = Partial<CreateUser>;