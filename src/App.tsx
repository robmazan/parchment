/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LoginStatus from "./components/LoginStatus";
import Home from "./components/Home";
import * as theme from "./theme";

const App: React.FC = () => (
  <div css={[theme.container.primary, theme.container.flex]}>
    <header>
      <NavigationBar>
        <Link to="/" css={theme.link.normal}>
          Home
        </Link>
        <LoginStatus loginURI="/login" logoutURI="/logout" />
      </NavigationBar>
    </header>
    <section css={theme.container.flex}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </section>
  </div>
);

export default App;
