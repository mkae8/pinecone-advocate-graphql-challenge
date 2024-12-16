import { getDoneTaskLists } from "../../graphql/resolvers/queries/get-done-tasks-lists";
import { GraphQLResolveInfo } from "graphql";

jest.mock("../../models/task", () => ({
  taskModel: {
    find: jest
      .fn()
      .mockResolvedValueOnce([
        {
          _id: "1",
          taskName: "Task 1",
          isDone: true,
          priority: 2,
          createdAt: expect.any(Date),
        },
      ])
      .mockRejectedValueOnce(new Error("Can't get finished task lists")), 
  },
}));

describe("getDoneTaskLists", () => {
  it("should return all finished tasks successfully", async () => {
    const result = await getDoneTaskLists(); 
    expect(result).toEqual([
      {
        _id: "1",
        taskName: "Task 1",
        isDone: true,
        priority: 2,
        createdAt: expect.any(Date),
      },
    ]);
  });

  it("should not get finished tasks if the query fails", async () => {
    try {
      await getDoneTaskLists();
    } catch (error) {
      expect(error).toEqual(new Error("Can't get finished task lists"));
    }
  });
});
