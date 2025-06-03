import { Schema, model } from 'mongoose';

export interface ITodo {
  title: string;
  completed: boolean;
}

const todoSchema = new Schema<ITodo>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const Todo = model<ITodo>('Todo', todoSchema);