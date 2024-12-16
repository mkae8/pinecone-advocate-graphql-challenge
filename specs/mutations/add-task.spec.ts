import { addTask } from "@/graphql/resolvers/mutations/add-task";

jest.mock("../../models/task", () => ({
  taskModel: {
    create: jest
      .fn()
      .mockResolvedValueOnce({
        _id: "123",
        taskName: "Hello",
        priority: 1,
        isDone: false,
        createdAt: new Date(),
      })
      .mockRejectedValueOnce({}),
  },
}));

describe("Add task mutation", () => {
  it("should successfully create task", async () => {
    const result = await addTask(null, {
      taskName: "Hello",
      priority: 1,
      isDone: false,
    });

    expect(result).toEqual({
      _id: "123",
      taskName: "Hello",
      priority: 1,
      isDone: false,
      createdAt: expect.any(Date),
    });
  });
  it("Should unsuccessfully create task", async () => {
    try {
      await addTask(null, { taskName: "Hello", priority: 1, isDone: false });
    } catch (error) {
      expect(error).toEqual(new Error("Can not add the task"));
    }
  });
});
