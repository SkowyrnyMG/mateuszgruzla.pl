import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import FloatingNav from 'components/main-menu/floating-nav';
import FacebookIcon from 'assets/svg/fb-icon.svg';
import LinkedinIcon from 'assets/svg/linkedin-icon.svg';
import TwitterIcon from 'assets/svg/twitter-icon.svg';
import GithubIcon from 'assets/svg/gh.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  right: 1.8rem;
  top: 3rem;
  z-index: 99999;
`;

const StyledNav = styled.nav`
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

const NavContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;

  > * {
    margin-top: 0;
  }
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2.5rem;
  grid-column-gap: 4rem;
  justify-items: center;
  align-items: center;
`;

const StyledListItem = styled.li`
  margin: 0;
  list-style: none;
`;

const StyledHeading = styled.h4`
  margin-bottom: 2rem;
  text-align: center;
`;

const SocialMediaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2.5rem;
  grid-column-gap: 3rem;
  justify-items: center;
  align-items: center;
  svg {
    margin-top: 0;
    width: 4rem;
    height: 4rem;
    fill: ${({ theme: { color } }) => color.content};
  }
`;

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <FloatingNav toggleMenu={() => setIsMenuOpen((state) => !state)} />
      <StyledNav isMenuOpen={isMenuOpen}>
        <NavContentWrapper>
          <div>
            <StyledHeading>Site Map</StyledHeading>
            <StyledList>
              <StyledListItem>Home</StyledListItem>
              <StyledListItem>About</StyledListItem>
              <StyledListItem>Portfolio</StyledListItem>
              <StyledListItem>Blog</StyledListItem>
              <StyledListItem>Content</StyledListItem>
            </StyledList>
          </div>
          <div>
            <StyledHeading>Reach me on</StyledHeading>
            <SocialMediaWrapper>
              <FacebookIcon />
              <LinkedinIcon />
              <GithubIcon />
              <TwitterIcon />
            </SocialMediaWrapper>
          </div>
        </NavContentWrapper>
        <p>Privacy Policy</p>
      </StyledNav>
    </Wrapper>
  );
};

export default MainMenu;
