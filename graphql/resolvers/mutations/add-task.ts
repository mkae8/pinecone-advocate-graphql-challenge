import { taskModel } from "@/models/task";

export const addTask = async (
  _: unknown,
  {
    taskName,
    priority,
    isDone,
  }: { taskName: string; priority: number; isDone: boolean }
) => {
  try {
    const newTask = await taskModel.create({
      taskName,
      priority,
      isDone,
    });
    return newTask;
  } catch (error) {
    throw new Error("Can not add the task");
  }
};
