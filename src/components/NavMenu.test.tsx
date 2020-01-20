import React from "react";
import { render } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { MemoryRouter } from "react-router-dom";

describe("NavMenu", () => {
  it("renders a navigation menu", () => {
    const component = render(
      <MemoryRouter>
        <NavMenu />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
