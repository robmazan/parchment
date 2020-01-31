/** @jsx jsx */
import { jsx } from "@emotion/core";
import { LoadingState, UserState } from "../slices/userSlice";
import { connect } from "react-redux";
import * as theme from "../theme";

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
    return <div css={theme.text.alternate}>Loading...</div>;
  } else if (isLoggedIn) {
    return (
      <div css={[theme.text.alternate, theme.lineHeight[90]]}>
        <div>{name}</div>
        <a href={logoutURI} css={theme.link.small}>
          Logout
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <a href={loginURI} css={theme.link.normal}>
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

export const ConnectedLoginStatus = connect(mapStateToProps)(LoginStatus);

export default ConnectedLoginStatus;
