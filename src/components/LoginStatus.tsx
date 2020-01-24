import React from "react";
import { User, LoadingState } from "../slices/userSlice";
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

/* istanbul ignore next */
const mapStateToProps = (
  {
    user: { user, loadingState }
  }: { user: { user: User; loadingState: LoadingState } },
  { loginURI, logoutURI }: { loginURI: string; logoutURI: string }
) => ({
  isLoggedIn: !!user,
  name: user?.username,
  loadingState,
  loginURI,
  logoutURI
});

export default connect(mapStateToProps)(LoginStatus);
