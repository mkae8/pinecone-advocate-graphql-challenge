import { Schema, model, models } from "mongoose";

export type Task = {
  _id: string;
  taskName: string;
  isDone: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
};

const taskSchema = new Schema<Task>(
  {
    taskName: { type: String, required: true },
    isDone: { type: Boolean, default: false },
    priority: { type: Number, required: true },
    // createdAt: { type: Date, required: true, default: Date.now },
    // updatedAt: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);
export const taskModel = models.Task || model<Task>("Task", taskSchema);
 