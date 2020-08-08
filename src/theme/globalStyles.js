import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    /* font-size: 10px; */
  }
  body {
    /* font-size: 1.6rem; */
  }
`;

export default GlobalStyles;
