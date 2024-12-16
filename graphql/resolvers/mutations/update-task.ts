
import { taskModel } from "@/models/task";

export const updateTask = async (
_: unknown, { _id, priority, isDone, taskName }: { _id: string; priority: number; isDone: boolean; taskName: string; }, p0: {}, p1: unknown) => {
  try {
    const updatedTask = await taskModel.findOneAndUpdate(
      { _id },
      {
        taskName,
        isDone,
        priority,
        updatedAt: new Date(),
      }
    );
   
    return updatedTask;
  } catch (error) {
    throw new Error("Can't update the task");
  }
};
 