import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("renders without any issue", () => {
    const component = shallow(<App />);
    expect(component).toMatchInlineSnapshot(`
      <Styled(div)>
        <header>
          <NavigationBar>
            "Home"
            <Connect(LoginStatus)
              loginURI="/login"
              logoutURI="/logout"
            />
          </NavigationBar>
        </header>
        <Styled(section)>
          <Switch>
            <Route
              component={[Function]}
              exact={true}
              path="/"
            />
          </Switch>
        </Styled(section)>
      </Styled(div)>
    `);
  });
});
