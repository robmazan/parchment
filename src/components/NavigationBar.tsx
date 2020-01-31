/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import * as theme from "../theme";
import { css } from "@emotion/core";

const navigationMenuClass = css`
  ${[theme.margin[50], theme.padding[0]]};
  list-style-type: none;
  display: flex;
`;

export const NavigationBar: React.FC = ({ children }) => (
  <nav>
    <ul css={navigationMenuClass}>
      {React.Children.map(children, child => (
        <li css={theme.margin[30]}>{child}</li>
      ))}
    </ul>
  </nav>
);

export default NavigationBar;
