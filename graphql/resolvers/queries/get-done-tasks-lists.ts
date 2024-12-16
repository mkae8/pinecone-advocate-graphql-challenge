import { taskModel } from "@/models/task";
import { QueryResolvers } from "@/generated";

export const getDoneTaskLists =
  async () => {
    try {
      return await taskModel.find({ isDone: true });
    } catch (error) {
      throw new Error("Can't get finished task lists");
    }
  };