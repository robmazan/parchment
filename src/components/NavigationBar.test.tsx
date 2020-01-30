import React from "react";
import { shallow } from "enzyme";
import NavigationBar from "./NavigationBar";

describe("NavigationBar", () => {
  it("renders a navigation menu", () => {
    const component = shallow(
      <NavigationBar>
        <span>Item</span>
      </NavigationBar>
    );
    expect(component).toMatchInlineSnapshot(`
      <nav>
        <span>
          Item
        </span>
      </nav>
    `);
  });
});
