import React from "react";
import { Link } from "react-router-dom";
import LoginStatus from "./LoginStatus";
import styled from "@emotion/styled";
import * as theme from "../theme/constants";

const NavigationBar: React.FC = props => {
  const NavitationMenu = styled.ul`
    background-color: ${theme.backgroudColor.primary};
    list-style-type: none;
    padding-inline-start: 0;
    display: flex;
    justify-content: center;
    margin-block-end: 0;
    margin-block-start: 0;
    padding: 1em;
  `;
  const NavigationItem = styled.li`
    margin: 0.3em;
  `;
  const NavigationLink = styled(Link)`
    color: ${theme.textColor.primary};
  `;
  return (
    <nav>
      <NavitationMenu>
        <NavigationItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <LoginStatus loginURI="/login" logoutURI="/logout" />
        </NavigationItem>
      </NavitationMenu>
    </nav>
  );
};

export default NavigationBar;
