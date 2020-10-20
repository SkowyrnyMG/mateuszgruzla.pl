import React from 'react';
import styled from 'styled-components';

import { ThemeContextProvider } from 'context/theme-context';

import RootStylesWrapper from 'utils/root-styles-wrapper';
import MainMenu from 'components/organisms/main-menu/main-menu';
import Footer from 'components/organisms/footer/footer';
import CookiesBar from 'components/modules/cookies-bar/cookies-bar';

const Main = styled.main`
  margin-top: 12rem;
`;

const Layout = ({ children, location }) => {
  return (
    <ThemeContextProvider>
      <RootStylesWrapper>
        <MainMenu location={location} />
        <Main>{children}</Main>
        <Footer />
        <CookiesBar />
      </RootStylesWrapper>
    </ThemeContextProvider>
  );
};

export default Layout;
