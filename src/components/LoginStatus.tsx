import React from "react";
import { User } from "../slices/userSlice";
import { connect } from "react-redux";

import userSlice from "../slices/userSlice";
import { Dispatch, AnyAction } from "@reduxjs/redux-toolkit";

interface OwnProps {
  name?: String;
  loginURI: string;
  logoutURI: string;
}

interface DispatchProps {
  fetchUser?: () => void;
}

export type Props = OwnProps & DispatchProps;

const LoginStatus: React.FC<Props> = props => {
  if (props.name) {
    return (
      <>
        {props.name}
        <a className="login-status__link" href={props.logoutURI}>
          Logout
        </a>
      </>
    );
  } else {
    return (
      <>
        <i onClick={props.fetchUser}>KLATTY</i>
        <a className="login-status__link" href={props.loginURI}>
          Login
        </a>
      </>
    );
  }
};

interface StateProps {
  user: User;
}

const mapStateToProps = (state: StateProps) => ({
  name: state.user ? state.user.firstname + " " + state.user.lastname : ""
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  fetchUser: (): void => {
    fetch("/api/user")
      .then(resp => {
        return resp.json();
      })
      .then(resp => {
        dispatch(userSlice.actions.receiveUser(resp));
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginStatus);
