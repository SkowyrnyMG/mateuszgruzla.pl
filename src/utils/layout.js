import React from 'react';
import styled from 'styled-components';

import { ThemeContextProvider } from 'context/theme-context';

import RootStylesWrapper from 'utils/root-styles-wrapper';
import GridView from 'utils/grid-view';
import MainMenu from 'components/organisms/main-menu/main-menu';
import Footer from 'components/organisms/footer/footer';

const TemporaryMain = styled.main`
  margin-top: 12rem;
  min-height: 100vh;
  width: 100%;
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
        <Footer />
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
