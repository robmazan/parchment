/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LoginStatus from "./components/LoginStatus";
import Home from "./components/Home";
import * as theme from "./theme";

const AppWrapper = styled.div`
  text-align: center;
  min-height: 100vh;
  background-color: ${theme.colorPalette.blueCharcoal};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AppSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => (
  <AppWrapper>
    <header>
      <NavigationBar>
        <Link to="/" css={theme.linkClass}>
          Home
        </Link>
        <LoginStatus loginURI="/login" logoutURI="/logout" />
      </NavigationBar>
    </header>
    <AppSection>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </AppSection>
  </AppWrapper>
);

export default App;
