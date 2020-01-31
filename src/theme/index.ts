import * as colors from "./colors";
import { css } from "@emotion/core";

export const fontSize = {
  s: css`
    font-size: 0.8em;
  `,
  m: css`
    font-size: 1.1em;
  `,
  l: css`
    font-size: 1.5em;
  `,
  xl: css`
    font-size: 2em;
  `
};

export const link = {
  normal: css`
    color: ${colors.athenaBlue};
  `,
  small: css`
    color: ${colors.athenaBlue};
    ${fontSize.s};
  `
};

export const text = {
  normal: css`
    color: ${colors.white};
  `,
  alternate: css`
    color: ${colors.athenaBlue};
  `
};

export const container = {
  primary: css`
    text-align: center;
    min-height: 100vh;
    background-color: ${colors.blueCharcoal};
    ${text.normal};
  `,
  flex: css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
};

export const lineHeight = {
  90: css`
    line-height: 0.9em;
  `
};

export const margin = {
  0: css`
    margin: 0;
  `,
  30: css`
    margin: 0.3em;
  `,
  50: css`
    margin: 0.5em;
  `
};

export const padding = {
  0: css`
    padding: 0;
  `,
  30: css`
    padding: 0.3em;
  `,
  50: css`
    padding: 0.5em;
  `
};
