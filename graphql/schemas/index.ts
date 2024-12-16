import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    getAllTasks: [Task]
    helloQuery: String
    getDoneTaskLists: [Task]
  }

  type Mutation {
    addTask(taskName: String!, priority: Int!, isDone: Boolean!): Task
    sayHello(name: String!): String
    updateTask(
      _id: String!
      taskName: String
      priority: Int
      isDone: Boolean
    ): Task
    deleteTask(_id: String!): String
  }

  type Task {
    _id: String!
    taskName: String
    priority: Int
    isDone: Boolean
  }
`;
