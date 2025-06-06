
import App from "./App"
import { describe, it, expect, vi, beforeAll } from 'vitest'
import { render, waitFor } from "@testing-library/react"
import { useGreeting } from "./hook/useGreeting";

vi.mock('./hook/useGreeting')

describe("App", () => {
  beforeAll(() => {
    vi.mocked(useGreeting).mockResolvedValue({ greetingMessage: "SUCCESS" })
  })

  it("renders learn react link", () => {
    const { getByText } = render(<App />);
    expect(getByText("Vite + React")).toBeDefined();
  });

  it("renders badge", () => {
    const { getByTestId } = render(<App />);
    waitFor(() => {
      expect(getByTestId("badge")).toBeDefined();
    })
  });
});

