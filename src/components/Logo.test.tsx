import React from "react";
import { shallow } from "enzyme";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders without any issue", () => {
    const component = shallow(<Logo />);
    expect(component).toMatchInlineSnapshot(`
      <Styled(img)
        alt="logo"
        src="logo.svg"
      />
    `);
  });
});
