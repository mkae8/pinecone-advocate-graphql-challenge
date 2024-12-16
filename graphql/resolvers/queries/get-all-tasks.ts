import { taskModel } from "@/models/task";

export const getAllTasks = async (p0?: {}, p1?: unknown) => {
  try {
    return await taskModel.find();
  } catch (error) {
    throw new Error("Can't get all tasks");
  }
};