import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

const TemporaryMain = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(rebeccapurple, black);
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <TemporaryMain>{children}</TemporaryMain>
    // <div
    //   style={{
    //     marginLeft: `auto`,
    //     marginRight: `auto`,
    //     maxWidth: rhythm(24),
    //     padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    //   }}
    // >
    //   {/* <footer>
    //     © {new Date().getFullYear()}, Built with
    //     {` `}
    //     <a href="https://www.gatsbyjs.org">Gatsby</a>
    //   </footer> */}
    // </div>
  );
};

export default Layout;
