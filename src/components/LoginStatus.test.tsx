import React from "react";
import { shallow } from "enzyme";
import { LoginStatus } from "./LoginStatus";

describe("LoginStatus", () => {
  it("renders login link for not logged in user", () => {
    const component = shallow(
      <LoginStatus
        loginURI="/login"
        logoutURI="/logout"
        isLoggedIn={false}
        name=""
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders logout link for logged in user", () => {
    const component = shallow(
      <LoginStatus
        loginURI="/login"
        logoutURI="/logout"
        isLoggedIn={true}
        name="Test User"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
