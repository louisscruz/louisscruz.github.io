import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    line-height: 1.15;
  }
  html, body, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-family: Verdana, sans-serif;
    font-size: 18px;
    font-weight: 300;
  }
  h1, h2 {
    font-family: Garamond, serif;
  }
  h1 {
    font-size: 62px;
  }
  h2 {
    font-size: 48px;
  }
  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
`;

export default GlobalStyles;
