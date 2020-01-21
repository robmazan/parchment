import React from "react";
import { User } from "../slices/userSlice";
import { connect } from "react-redux";
import { getUserFullName, getIsLoggedIn } from "../slices/userSlice";

type OwnProps = {
  name?: string;
  isLoggedIn: boolean;
  loginURI: string;
  logoutURI: string;
};

type ComponentSettings = {
  linkURI: string;
  linkText: string;
  linkClass: string;
  containerClass: string;
  nameComponent?: JSX.Element;
};

const getSettings = (props: OwnProps): ComponentSettings => {
  const { isLoggedIn, logoutURI, loginURI, name } = props;
  if (isLoggedIn) {
    return {
      linkURI: logoutURI,
      linkText: "Logout",
      linkClass: "login-status__link--small",
      containerClass: "login-status--small",
      nameComponent: <div className="login-status__name">{name}</div>
    };
  } else {
    return {
      linkURI: loginURI,
      linkText: "Login",
      linkClass: "login-status__link",
      containerClass: "login-status"
    };
  }
};

export const LoginStatus: React.FC<OwnProps> = props => {
  const {
    containerClass,
    nameComponent,
    linkClass,
    linkURI,
    linkText
  } = getSettings(props);

  return (
    <div className={containerClass}>
      {nameComponent}
      <a className={linkClass} href={linkURI}>
        {linkText}
      </a>
    </div>
  );
};

type StateProps = {
  user: User;
};

/* istanbul ignore next */
const mapStateToProps = (state: StateProps) => ({
  isLoggedIn: getIsLoggedIn(state.user),
  name: getUserFullName(state.user)
});

export default connect(mapStateToProps)(LoginStatus);
