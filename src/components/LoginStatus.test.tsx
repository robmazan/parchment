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
      <Styled(div)>
        <Styled(a)
          href="/login"
        >
          Login
        </Styled(a)>
      </Styled(div)>
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
      <Styled(div)>
        <div>
          Test User
        </div>
        <Styled(a)
          href="/logout"
        >
          Logout
        </Styled(a)>
      </Styled(div)>
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
      <Styled(div)>
        Loading...
      </Styled(div)>
    `);
  });
});
