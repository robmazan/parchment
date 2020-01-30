/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import Logo from "./Logo";
import * as theme from "../theme";

const Home: React.FC = () => (
  <Fragment>
    <Logo />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      css={theme.linkClass}
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </Fragment>
);

export default Home;
