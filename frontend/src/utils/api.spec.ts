import { get, post } from "./api";
import { setupServer } from "msw/node";
import { describe, beforeAll, it, expect, afterEach, afterAll } from "vitest";

import { http, HttpResponse } from 'msw'
import { waitFor } from "@testing-library/react";
const handlers = [
  http.get("/success", () => {
    return HttpResponse.json({ message: "some-response" })
  }),
  http.post("/success", () => {
    return HttpResponse.json({ message: "some-response", body: "some-body" }
    );
  }),
  http.get("/not-found", () => {
    return new HttpResponse('Not found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }),
  http.post("/not-found", () => {
    return new HttpResponse('Not found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }),
]

describe("API Utils", () => {
  const server = setupServer(...handlers);

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
      const result = await get("/success");

      expect(result).toEqual({ message: "some-response" });
    });

    it("should throw error if response status is not 200", async () => {
      waitFor(async () => await expect(get("/not-found")).rejects.toThrow(
        "HTTP Error: 404",
      ));
    });
  });

  describe("POST", () => {
    it("should return JSON response when request is successful", async () => {
      const result = await post("/success", { input: "some-request" });

      expect(result).toEqual({
        message: "some-response",
        body: "some-body",
      });
    });

    it("should throw error if response status is not within acceptedResponseCodes", async () => {
      waitFor(async () => await expect(post("/not-found", { input: "some-request" })).rejects.toThrow(
        "HTTP Error: 404",
      ));
    });
  });
});
