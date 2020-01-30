/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import * as theme from "../theme";

export const NavigationBar: React.FC = ({ children }) => (
  <nav>
    <ul css={theme.navigationMenuClass}>
      {React.Children.map(children, child => (
        <li css={theme.navigationItemClass}>{child}</li>
      ))}
    </ul>
  </nav>
);

export default NavigationBar;
