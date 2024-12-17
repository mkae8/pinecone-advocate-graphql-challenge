import { deleteTask } from "@/graphql/resolvers/mutations/delete-task";

jest.mock("../../models/task", () => ({
  taskModel: {
    findByIdAndDelete: jest
      .fn()
      .mockResolvedValueOnce({ _id: "123" })
      .mockRejectedValueOnce({}),
  },
}));

describe("Delete task", () => {
  it("success", async () => {
    const result = await deleteTask(null, { _id: "123" });
    expect(result).toEqual({ _id: "123" });
  });
  it("failed", async () => {
    try {
      await deleteTask(null, { _id: "123" });
    } catch (error) {
      expect(error).toEqual(new Error("Can't delete the task"));
    }
  });
});
