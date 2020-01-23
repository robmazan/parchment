import React from "react";
import slice, { UserState, LoadingState, User } from "../slices/userSlice";
import { connect } from "react-redux";

interface OwnProps {
  name?: string;
  loadingState: LoadingState;
  isLoggedIn: boolean;
  loginURI: string;
  logoutURI: string;
}

export const LoginStatus: React.FC<OwnProps> = ({
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
      <div className="login-status--small">
        <a href={logoutURI} className="login-status__link--small">
          Logout
        </a>
      </div>
    );
  } else {
    return (
      <div className="login-status">
        <div className="login-status__name">{name}</div>
        <a href={loginURI} className="login-status__link">
          Login
        </a>
      </div>
    );
  }
};

interface StateProps {
  user: UserState;
}

/* istanbul ignore next */
const mapStateToProps = (state: StateProps) => ({
  isLoggedIn: !!state.user.user,
  name: state.user.user?.username,
  loadingState: state.user.loadingState
});

export default connect(mapStateToProps)(LoginStatus);
