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
      .mockRejectedValueOnce({}),
  },
}));

describe("getDoneTaskLists", () => {
  it("should return all finished tasks successfully", async () => {
    const result = await getDoneTaskLists!(
      {},
      {},
      {},
      {} as GraphQLResolveInfo
    );
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
  it("should can't get finished all tasks", async () => {
    try {
      await getDoneTaskLists!({}, {}, {}, {} as GraphQLResolveInfo);
    } catch (error) {
      expect(error).toEqual(new Error("Can't get finished task lists"));
    }
  });
});