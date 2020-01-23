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
      <div
        className="login-status"
      >
        <div
          className="login-status__name"
        />
        <a
          className="login-status__link"
          href="/login"
        >
          Login
        </a>
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
      <div
        className="login-status login-status--small"
      >
        <div
          className="login-status__name"
        >
          Test User
        </div>
        <a
          className="login-status__link login-status__link--small"
          href="/logout"
        >
          Logout
        </a>
      </div>
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
    expect(component).toMatchInlineSnapshot(`
      <div
        className="login-status login-status--loading"
      >
        Loading...
      </div>
    `);
  });
});
