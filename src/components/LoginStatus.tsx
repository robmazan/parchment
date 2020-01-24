import React from "react";
import { UserState, LoadingState } from "../slices/userSlice";
import { connect } from "react-redux";

interface LoginStatusProps {
  name?: string;
  loadingState: LoadingState;
  isLoggedIn: boolean;
  loginURI: string;
  logoutURI: string;
}

export const LoginStatus: React.FC<LoginStatusProps> = ({
  isLoggedIn,
  logoutURI,
  loginURI,
  name,
  loadingState
}) => {
  if (
    loadingState === LoadingState.NONE ||
    loadingState === LoadingState.PENDING
  ) {
    return (
      <div className="login-status">
        <span className="login-status--loading">Loading...</span>
      </div>
    );
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
const mapStateToProps: (
  state: {
    user: UserState;
  },
  ownProps: {
    loginURI: string;
    logoutURI: string;
  }
) => LoginStatusProps = ({ user: state }, ownProps) => ({
  isLoggedIn: !!state.user,
  name: state.user?.username,
  loadingState: state.loadingState,
  ...ownProps
});

export default connect(mapStateToProps)(LoginStatus);
