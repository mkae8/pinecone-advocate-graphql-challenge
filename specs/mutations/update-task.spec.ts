import { updateTask } from "@/graphql/resolvers/mutations/update-task";
import { GraphQLResolveInfo } from "graphql";

jest.mock("../../models/Task", () => ({
  taskModel: {
    findOneAndUpdate: jest
      .fn()
      .mockResolvedValueOnce({
        _id: "1",
        taskName: "Hello",
        isDone: false,
        priority: 2,
        updatedAt: new Date(),
      })
      .mockRejectedValueOnce({}),
  },
}));

describe("Update Task", () => {
  it("Should successfully update ", async () => {
    const result = await updateTask!(
      {},
      { _id: "1", taskName: "Hello", isDone: false, priority: 1 },
      {},
      {} as GraphQLResolveInfo
    );
    expect(result).toEqual({
      _id: "1",
      taskName: "Hello",
      isDone: false,
      priority: 2,
      updatedAt: expect.any(Date),
    });
  });
  it("should failed to update task", async () => {
    try {
      await updateTask!(
        {},
        { _id: "1", taskName: "Hello", isDone: false, priority: 2 },
        {},
        {} as GraphQLResolveInfo
      );
    } catch (error) {
      expect(error).toEqual(new Error("Can't update the task"));
    }
  });
})