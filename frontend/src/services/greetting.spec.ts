import GreetingService from "./greeting";
import { get } from "../utils/api";

const mockResolved = "Hello from unit test!!";
jest.mock("../utils/api");
describe("Greeting service", () => {
  const greetingService = new GreetingService();

  it("should return greeting message", async () => {
    jest.mocked(get).mockResolvedValue({ status: mockResolved });
    const message = await greetingService.getGreetingMessage();
    expect(message).toEqual(mockResolved);
  });
});
