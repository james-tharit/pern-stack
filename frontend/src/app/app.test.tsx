import { render } from "@testing-library/react";
import { App } from "./app";

describe("App", () => {
  it("renders learn react link", () => {
    const { getByText } = render(<App />);
    expect(getByText("Click Me!")).toBeDefined();
  });

  it("renders badge", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("badge")).toBeDefined();
  });
});
