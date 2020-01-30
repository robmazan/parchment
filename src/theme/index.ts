import { css } from "@emotion/core";

export enum colorPalette {
  athenaBlue = "#61dafb",
  blueCharcoal = "#282c34"
}

export const linkClass = css`
  color: ${colorPalette.athenaBlue};
`;

export const smallLinkClass = css`
  font-size: 0.8em;
`;

export const twoLinesWrapperClass = css`
  line-height: 0.9em;
`;

export const navigationMenuClass = css`
  background-color: ${colorPalette.blueCharcoal};
  list-style-type: none;
  padding-inline-start: 0;
  display: flex;
  justify-content: center;
  margin-block-end: 0;
  margin-block-start: 0;
  padding: 1em;
`;

export const navigationItemClass = css`
  margin: 0.3em;
`;
