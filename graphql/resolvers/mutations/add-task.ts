import { taskModel } from "@/models/task";
import { MutationResolvers } from "@/generated";

export const addTask = async (
_: unknown, { taskName, isDone, priority }: { taskName: string; isDone: boolean; priority: number; }, p0: {}, p1: unknown) => {
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
 