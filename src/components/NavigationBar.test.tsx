import React from "react";
import { render } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { MemoryRouter } from "react-router-dom";

describe("NavigationBar", () => {
  it("renders a navigation menu", () => {
    const component = render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
