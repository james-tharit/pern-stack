import GreetingService from "../greeting";
import * as api from "../../utils/api";

const mockResolved = "Hello from unit test!!";

describe("Greeting service", () => {
  const greetingService = new GreetingService();
  let spy: jest.SpyInstance<
    Promise<unknown>,
    [path: string, acceptedResponseCodes: api.HttpStatus[]]
  >;

  beforeEach(() => {
    spy = jest.spyOn(api, "get");
    spy.mockResolvedValue({ status: mockResolved });
  });

  it("should return greeting message", async () => {
    const message = await greetingService.getGreetingMessage();
    expect(message).toEqual(mockResolved);
  });
});
