import { taskModel } from "@/models/task";

export const updateTask = async (
  _: unknown,
  {
    _id,
    priority,
    isDone,
    taskName,
  }: {
    _id: string;
    priority?: number;
    isDone?: boolean;
    taskName?: string;
  }
) => {
  const updateFields: {
    taskName?: string;
    isDone?: boolean;
    priority?: number;
    updatedAt?: Date;
  } = {};

  if (taskName !== undefined) {
    updateFields.taskName = taskName;
  }
  if (isDone !== undefined) {
    updateFields.isDone = isDone;
  }
  if (priority !== undefined) {
    updateFields.priority = priority;
  }

  if (Object.keys(updateFields).length === 0) {
    throw new Error("Field must be filled");
  }

  updateFields.updatedAt = new Date();

  try {
    const updatedTask = await taskModel.findByIdAndUpdate(_id, updateFields, {
      new: true,
    });

    if (!updatedTask) {
      throw new Error("Task not found");
    }

    return updatedTask;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Can not update task: " + error.message);
    } 
  }
};