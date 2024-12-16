import { taskModel } from "@/models/task";


export const addTask = async (
_: unknown, { taskName, isDone, priority }: { taskName: string; isDone: boolean; priority: number; }) => {
  try {
    const newTask = await taskModel.create({
      taskName,
      isDone,
      priority,
    });
    return newTask;
  } catch (error) {
    throw new Error("Can not add the task");
  }
};
 