import React from "react";
import { shallow } from "enzyme";
import NavigationBar from "./NavigationBar";

describe("NavigationBar", () => {
  it("renders a navigation menu", () => {
    const component = shallow(<NavigationBar />);
    expect(component).toMatchInlineSnapshot(`
      <nav>
        <Styled(ul)>
          <Styled(li)>
            <Styled(Link)
              to="/"
            >
              Home
            </Styled(Link)>
          </Styled(li)>
          <Styled(li)>
            <Connect(LoginStatus)
              loginURI="/login"
              logoutURI="/logout"
            />
          </Styled(li)>
        </Styled(ul)>
      </nav>
    `);
  });
});
