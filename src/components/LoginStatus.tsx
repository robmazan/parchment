import React from "react";
import { LoadingState, UserState } from "../slices/userSlice";
import { connect } from "react-redux";

export const LoginStatus: React.FC<{
  isLoggedIn: boolean;
  logoutURI: string;
  loginURI: string;
  name?: string;
  loadingState: LoadingState;
}> = ({ isLoggedIn, logoutURI, loginURI, name, loadingState }) => {
  if (
    loadingState === LoadingState.NONE ||
    loadingState === LoadingState.PENDING
  ) {
    return <div className="login-status login-status--loading">Loading...</div>;
  } else if (isLoggedIn) {
    return (
      <div className="login-status login-status--small">
        <div className="login-status__name">{name}</div>
        <a
          href={logoutURI}
          className="login-status__link login-status__link--small"
        >
          Logout
        </a>
      </div>
    );
  } else {
    return (
      <div className="login-status">
        <a href={loginURI} className="login-status__link">
          Login
        </a>
      </div>
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
