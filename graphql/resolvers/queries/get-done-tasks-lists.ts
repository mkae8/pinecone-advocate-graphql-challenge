import { taskModel } from "@/models/task";
import { QueryResolvers } from "@/generated";

export const getDoneTaskLists =
  async (p0: {}, p1: {}, p2: {}, p3: unknown) => {
    try {
      return await taskModel.find({ isDone: true });
    } catch (error) {
      throw new Error("Can't get finished task lists");
    }
  };