import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import logo from "../logo.svg";

const LogoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LogoImg = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${LogoAnimation} infinite 20s linear;
  }
`;

export const Logo: React.FC = () => {
  return <LogoImg src={logo} alt="logo" />;
};

export default Logo;
