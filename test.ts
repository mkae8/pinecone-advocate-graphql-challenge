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
//       })
//       .mockRejectedValueOnce({}),
//   },
// }));

// describe("Delete Task", () => {
//   it("should delete task success", async () => {
//     const result = await deleteTodo(
//       { _id: "1" }
//     );
//     expect(result).toEqual({
//       _id: "123",
//       taskName: "Hello",
//       isDone: false,
//       priority: 1,

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
