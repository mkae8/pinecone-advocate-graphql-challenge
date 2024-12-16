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