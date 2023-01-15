import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { shallow } from "enzyme";

describe("App", () => {
  it("should renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("Click Me!");
    expect(linkElement).toBeInTheDocument();
  });

  it("should change click me to ok", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("a")).toHaveLength(1);
  });
});
