import { sayHello } from "./mutations/say-hello";
import { helloQuery } from "./queries/hello-query";
import { addTask } from "./mutations/add-task";
import { updateTask } from "./mutations/update-task";
import { getAllTasks } from "./queries/get-all-tasks";
import { getDoneTasksLists } from "./queries/get-done-tasks-lists";

export const resolvers = {
  Query: {
    helloQuery,
    getAllTasks,
    getDoneTasksLists,
  },
  Mutation: {
    sayHello,
    addTask,
    updateTask,
  },
};