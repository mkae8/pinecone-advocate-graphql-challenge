import { taskModel } from "@/models/task";

export const updateTask = async(_:unknown, {_id, taskName, priority, isDone}: {_id: string, taskName: string, priority: number, isDone: boolean}) =>{
  try {
    const updatedTask = await taskModel.findOneAndUpdate({_id} ,{taskName,priority,isDone, updatedAt: new Date() })
    return updatedTask
  } catch (error) {
    throw new Error("Can't update the task");
  }
}