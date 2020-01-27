import React from "react";
import logo from "./logo.svg";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import * as theme from "./theme/constants";

const App: React.FC = () => {
  const AppLogoSpinAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;
  const AppHeader = styled.header`
    background-color: ${theme.backgroundColor.primary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const AppLink = styled.a`
    color: ${theme.textColor.primary};
  `;
  const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${AppLogoSpinAnimation} infinite 20s linear;
    }
  `;
  return (
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <AppLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </AppLink>
    </AppHeader>
  );
};

export default App;
