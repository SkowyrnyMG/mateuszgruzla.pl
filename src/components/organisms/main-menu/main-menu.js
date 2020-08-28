import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { routes } from 'utils/routes';

import FloatingNav from 'components/organisms/main-menu/floating-nav';
import NavList from 'components/modules/nav-list/nav-list';
import SocialList from 'components/modules/social-list/social-list';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  right: 1.8rem;
  top: 3rem;
  z-index: 99999;
  pointer-events: none;
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75rem;
  min-height: 34rem;
  background: ${({ theme: { color } }) => color.secondary};
  border-radius: 2rem;
  box-shadow: ${({ theme: { base } }) => base.shadow.darkSmall};
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: all 0.5s;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    `};
`;

const NavContentWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 3rem;
  width: 100%;

  > * {
    margin-top: 0;
  }
`;

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { privacyPolicy } = routes;

  return (
    <Wrapper>
      <FloatingNav toggleMenu={() => setIsMenuOpen((state) => !state)} />
      <StyledNav isMenuOpen={isMenuOpen}>
        <NavContentWrapper>
          <NavList />
          <SocialList />
        </NavContentWrapper>
        <Link to={privacyPolicy}>Privacy Policy</Link>
      </StyledNav>
    </Wrapper>
  );
};

export default MainMenu;
