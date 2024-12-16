import { getAllTasks } from "@/graphql/resolvers/queries/get-all-tasks";

jest.mock("../../models/task", () => ({
  taskModel: {
    find: jest
      .fn()
      .mockResolvedValueOnce([
        {
          _id: "1",
          taskName: "Task 1",
          isDone: false,
          priority: 2,
        },
      ])
      .mockRejectedValueOnce({}),
  },
}));

describe("getAllTasks", () => {
  it("should return all tasks successfully", async () => {
    const result = await getAllTasks();
    expect(result).toEqual([
      {
        _id: "1",
        taskName: "Task 1",
        isDone: false,
        priority: 2,
      },
    ]);
  });
  it("should can't get all tasks", async () => {
    try {
      await getAllTasks();
    } catch (error) {
      expect(error).toEqual(new Error("Can't get all tasks"));
    }
  });
});
