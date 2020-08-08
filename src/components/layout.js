import React from 'react';
import styled from 'styled-components';

import GlobalStyles from '../theme/globalStyles';

const TemporaryMain = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: radial-gradient(rebeccapurple, black);
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <>
      <GlobalStyles />
      <TemporaryMain>{children}</TemporaryMain>
    </>
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
