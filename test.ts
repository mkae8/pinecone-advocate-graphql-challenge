
// import { taskModel } from "@/models/task";

// export const deleteTask = async (
//   _: unknown,
//   { _id } :{_id:string}
// ) => {
//   try {
//     return await taskModel.findByIdAndDelete(_id);
//   } catch (error) {
//     throw new Error("Can't delete task ");
//   }
// };


// import { deleteTask } from "@/graphql/resolvers/mutations/delete-task";
// jest.mock("../../models/todo.model", () => ({
//   Todomodel: {
//     findByIdAndDelete: jest
//       .fn()
//       .mockReturnValueOnce({
//         _id: "123",
//         taskName: "Hello",
//         isDone: false,
//         priority: 1,
//         createdAt: expect.any(Date),
//       })
//       .mockRejectedValueOnce({}),
//   },
// }));

// describe("Delete Todo", () => {
//   it("should delete todo", async () => {
//     const result = await deleteTodo(
//       { _id: "1" } 
//     );
//     expect(result).toEqual({
//       _id: "123",
//       taskName: "Hello",
//       isDone: false,
//       priority: 1,
//       createdAt: expect.any(Date),
//     });
//   });
//   it("should can't delete the task", async () => {
//     try {
//       await deleteTask({ _id: "1" });
//     } catch (error) {
//       expect(error).toEqual(new Error("can't delete the task"));
//     }
//   });
// });

import { addTask } from "@/graphql/resolvers/mutations/add-task";

jest.mock("../../models/task", () => ({
  taskModel: {
    create: jest
      .fn()
      .mockReturnValueOnce({
        _id: "123",
        taskName: "Hello",
        isDone: false,
        priority: 1,
        createdAt: new Date(),
      })
      .mockRejectedValueOnce({}),
  },
}));
describe("Add Task Mutation", () => {
  it("Should successfully create task", async () => {
    const result = await addTask(
      null,
      { taskName: "Hello", isDone: false, priority: 1 },
    );

    expect(result).toEqual({
      _id: "123",
      taskName: "Hello",
      isDone: false,
      priority: 1,
      createdAt: expect.any(Date),
    });
  });
  it("Should unsuccessfully create task", async () => {
    try {
      await addTask(
        null,
        { taskName: "Hello", isDone: false, priority: 1 },
      );
    } catch (error) {
      expect(error).toEqual(new Error("Can not add the task"));
    }
  });
});

 