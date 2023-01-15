import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should renders learn react link", () => {
    const { getByText } = render(<App />);
    expect(getByText("Click Me!")).toBeDefined();
  });
});
