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
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    line-height: 1.4;
    color: ${({ theme: { color } }) => color.content};
    background: ${({ theme: { color } }) => color.bg};

    transition: all .5s;


    > div {
      margin-top: 0;
    }
  }

  * + * {
    margin-top: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1.%;
    color: ${({ theme: { color } }) => color.header};
    transition: all .5s;

    + * {
      margin-top: 0.5rem;
    }
  }

  h1,
  h2 {
    font-size: 9.6rem;
  }

  h3 {
    font-size: 2.85rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
