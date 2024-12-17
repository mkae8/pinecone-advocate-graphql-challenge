import { taskModel } from "@/models/task";

export const deleteTask = async (_: unknown, { _id }: { _id: string }) => {
  try {
    const result = await taskModel.findByIdAndDelete(_id);
    return result;
  } catch (error) {
    throw new Error("Can't delete the task");
  }
};
