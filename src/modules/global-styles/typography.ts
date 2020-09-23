import { css } from 'styled-components';

export const typographyStyles = css`
  /* typography */
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    width: 100%;
    min-width: 320px;
    font-family: ${(props) => props.theme.typography.bodyFontFamily};
    font-size: ${(props) => props.theme.typography.globalFontSize};
    font-weight: ${(props) => props.theme.typography.globalWeightNormal};
    line-height: ${(props) => props.theme.typography.globalLineHeight};
    color: ${(props) => props.theme.typography.bodyFontColor};
    background: ${(props) => props.theme.typography.bodyBackground};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    color: ${(props) => props.theme.typography.headersFontColor};
    font-family: ${(props) => props.theme.typography.headersFontFamily};
    font-weight: ${(props) => props.theme.typography.headersFontWeight};
    line-height: 1.2;
  }

  h1,
  .h1 {
    margin: 0 0 39px;
    padding: 0;
    font-size: 18px;
    font-weight: 900;
    text-align: center;
  }

  h2,
  .h2 {
    margin: 0 0 26px;
    padding: 0;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.9px;
  }

  h3,
  .h3 {
    margin: 0 0 1em;
    padding: 0;
    font-size: 1.8rem;
  }

  h4,
  .h4 {
    margin: 0 0 1em;
    padding: 0;
    font-size: 1.6rem;
  }

  h5,
  .h5 {
    margin: 0 0 1em;
    padding: 0;
    font-size: 1.6rem;
  }

  h6,
  .h6 {
    margin: 0 0 1em;
    padding: 0;
    font-family: ${(props) => props.theme.typography.bodyFontFamily};
  }

  p {
    margin: 0 0 1em;
  }

  a {
    color: inherit;
    transition: all 0.25s;
    text-decoration: underline;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      text-decoration: none;
      color: inherit;
    }
  }

  img {
    border: 0;
    display: inline;
    height: auto;
    max-width: 100%;
    vertical-align: top;
  }

  .text-uppercase {
    text-transform: uppercase;
  }
  .text-justify {
    text-align: justify;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
  }

  .color-blue {
    color: ${(props) => props.theme.colors.blue};
  }
  .color-red {
    color: ${(props) => props.theme.colors.red};
  }
`;
