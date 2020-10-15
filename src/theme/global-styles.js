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

    ${({ theme: { base } }) => base.mq.desktop} {
      font-size: 55%;
    }
    ${({ theme: { base } }) => base.mq.bigTablet} {
      font-size: 50%;
    }
    ${({ theme: { base } }) => base.mq.tablet} {
      font-size: 45%;
    }
    ${({ theme: { base } }) => base.mq.smallTablet} {
      font-size: 40%;
    }
    ${({ theme: { base } }) => base.mq.bigPhoneBreak} {
      font-size: 30%;
    }

    ${({ theme: { base } }) => base.mq.bigPhone} {
      font-size: 25%;
    }

    ${({ theme: { base } }) => base.mq.smallPhone} {
      font-size: 20%;
    }


  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 1.8rem;
    line-height: 1.4;
    color: ${({ theme: { color } }) => color.content};
    background: ${({ theme: { color } }) => color.bg};
    overflow-x: hidden;

    transition: all .5s;


    > div {
      margin-top: 0;
    }
  }

  footer {
    background: ${({ theme: { color } }) => color.secondary};
  }

  input,
  textarea {
    padding-left: 2rem;
    height: 50px;
    width: 30rem;
    font-size: 20px;
    font-family: inherit;
    color: ${({ theme: { color } }) => color.content};
    border: 1px solid ${({ theme: { color } }) => color.content};
    background: ${({ theme: { color } }) => color.input};
    border-radius: 5px;

    ::placeholder {
      color: ${({ theme: { color } }) => color.content};
    }

  }

  textarea {
    min-height: 25rem;
  }

  input:placeholder-shown + div,
  textarea:placeholder-shown + div {
    opacity: 0;
    background-color: transparent;
    transform: translateY(100%);
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

  h1 {
    font-family: 'Changa One', cursive !important;
    text-transform: uppercase;
    opacity: 0;
  }

  h1,
  h2 {
    font-size: 9.6rem;
  }

  h3 {
    font-size: 28.5px;
  }

  h4 {
    font-size: 24px;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    color: ${({ theme: { color } }) => color.content};
  }

  p {
    line-height: 1.6;
    font-size: 18px;
  }


`;

export default GlobalStyles;
