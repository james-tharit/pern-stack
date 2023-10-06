import { get, HttpStatus, post } from "./api";
import { rest } from "msw";
import { setupServer } from "msw/node";

describe("API Utils", () => {
  const server = setupServer(
    rest.get("/success", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "some-response" }));
    }),
    rest.get("/failure", (req, res, ctx) => {
      return res(ctx.status(404), ctx.json({ message: "Not found!" }));
    }),
    rest.post("/success", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ message: "some-response", body: req.body }),
      );
    }),
    rest.post("/failure", (req, res, ctx) => {
      return res(ctx.status(404), ctx.json({ message: "Not found!" }));
    }),
  );

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe("GET", () => {
    it("should return JSON response when request is successful", async () => {
      const result = await get("/success", [HttpStatus.OK]);

      expect(result).toEqual({ message: "some-response" });
    });

    it("should throw error if response status is not within acceptedResponseCodes", async () => {
      await expect(get("/failure", [HttpStatus.OK])).rejects.toThrow(
        "Not found!",
      );
    });
  });

  describe("POST", () => {
    it("should return JSON response when request is successful", async () => {
      const result = await post("/success", { input: "some-request" }, [
        HttpStatus.OK,
      ]);

      expect(result).toEqual({
        message: "some-response",
        body: { input: "some-request" },
      });
    });

    it("should throw error if response status is not within acceptedResponseCodes", async () => {
      await expect(
        post("/failure", { input: "some-request" }, [HttpStatus.OK]),
      ).rejects.toThrow("Not found!");
    });
  });
});
