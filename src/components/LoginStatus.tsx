import React from "react";
import { LoadingState, UserState } from "../slices/userSlice";
import { connect } from "react-redux";
import styled from "@emotion/styled";

const textColor = "#61dafb";

export const LoginStatus: React.FC<{
  isLoggedIn: boolean;
  logoutURI: string;
  loginURI: string;
  name?: string;
  loadingState: LoadingState;
}> = ({ isLoggedIn, logoutURI, loginURI, name, loadingState }) => {
  const StatusWrapper = styled.div`
    color: ${textColor};
    line-height: ${isLoggedIn ? ".9em" : "initial"};
  `;
  const StatusLink = styled.a`
    color: ${textColor};
    font-size: ${isLoggedIn ? ".8em" : "initial"};
  `;

  if (
    loadingState === LoadingState.NONE ||
    loadingState === LoadingState.PENDING
  ) {
    return <StatusWrapper>Loading...</StatusWrapper>;
  } else if (isLoggedIn) {
    return (
      <StatusWrapper>
        <div>{name}</div>
        <StatusLink href={logoutURI}>Logout</StatusLink>
      </StatusWrapper>
    );
  } else {
    return (
      <StatusWrapper>
        <StatusLink href={loginURI}>Login</StatusLink>
      </StatusWrapper>
    );
  }
};

interface LoginStatusProps {
  loginURI: string;
  logoutURI: string;
}

/* istanbul ignore next */
const mapStateToProps = (
  { user: { user, loadingState } }: { user: UserState },
  { loginURI, logoutURI }: LoginStatusProps
) => ({
  isLoggedIn: !!user,
  name: user?.username,
  loadingState,
  loginURI,
  logoutURI
});

export default connect(mapStateToProps)(LoginStatus);
