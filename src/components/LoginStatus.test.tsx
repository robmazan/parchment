import React from "react";
import { shallow } from "enzyme";
import { LoginStatus } from "./LoginStatus";
import { LoadingState } from "../slices/userSlice";

describe("LoginStatus", () => {
  it("renders login link for not logged in user", () => {
    const component = shallow(
      <LoginStatus
        loginURI="/login"
        logoutURI="/logout"
        isLoggedIn={false}
        name=""
        loadingState={LoadingState.FAILURE}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <div>
        "Login"
      </div>
    `);
  });

  it("renders logout link for logged in user", () => {
    const component = shallow(
      <LoginStatus
        loginURI="/login"
        logoutURI="/logout"
        isLoggedIn={true}
        name="Test User"
        loadingState={LoadingState.SUCCESS}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <div>
        Test User
      </div>
      "Logout"
    `);
  });

  it("renders loading state", () => {
    const component = shallow(
      <LoginStatus
        loginURI="/login"
        logoutURI="/logout"
        isLoggedIn={false}
        name=""
        loadingState={LoadingState.PENDING}
      />
    );
    expect(component).toMatchInlineSnapshot(`"Loading..."`);
  });
});
