import React from 'react';
import styled from 'styled-components';

import { ThemeContextProvider } from 'context/theme-context';

import RootStylesWrapper from 'utils/root-styles-wrapper';
import GridView from 'utils/grid-view';
import MainMenu from 'components/main-menu/main-menu';

const TemporaryMain = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <ThemeContextProvider>
      <RootStylesWrapper>
        <MainMenu />
        <GridView>
          <TemporaryMain>{children}</TemporaryMain>
        </GridView>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </footer>
      </RootStylesWrapper>
    </ThemeContextProvider>
    // <div
    //   style={{
    //     marginLeft: `auto`,
    //     marginRight: `auto`,
    //     maxWidth: rhythm(24),
    //     padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    //   }}
    // >
    // </div>
  );
};

export default Layout;
