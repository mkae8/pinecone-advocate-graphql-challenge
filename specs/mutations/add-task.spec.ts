import { addTask } from "@/graphql/resolvers/mutations/add-task";
import { GraphQLResolveInfo } from "graphql";

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
    const result = await addTask!(
      {},
      { taskName: "Hello", isDone: false, priority: 1 },
      {},
      {} as GraphQLResolveInfo
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
      await addTask!(
        {},
        { taskName: "Hello", isDone: false, priority: 1 },
        {},
        {} as GraphQLResolveInfo
      );
    } catch (error) {
      expect(error).toEqual(new Error("Can not add the task"));
    }
  });
});