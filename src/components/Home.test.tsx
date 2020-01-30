import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  it("renders without any issue", () => {
    const component = shallow(<Home />);
    expect(component).toMatchInlineSnapshot(`
      <Fragment>
        <Logo />
        <p>
          Edit 
          <code>
            src/App.tsx
          </code>
           and save to reload.
        </p>
        "Learn React"
      </Fragment>
    `);
  });
});
