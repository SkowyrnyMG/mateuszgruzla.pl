import React, { useContext } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cookies from 'js-cookie';

import { routes } from 'utils/routes';
import { ThemeContext } from 'context/theme-context';

import LightThemeIcon from 'assets/svg/light-theme-icon.svg';
import DarkThemeIcon from 'assets/svg/dark-theme-icon.svg';
import SearchIcon from 'assets/svg/search-icon.svg';
import MenuIcon from 'assets/svg/menu-icon.svg';
import HomeIcon from 'assets/svg/home-icon.svg';

const Wrapper = styled.div`
  display: flex;
  pointer-events: auto;
  z-index: 20000;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
  padding: 0 !important;
  font-size: ${({ theme: { base } }) => base.fontSize.m};
  width: 7rem;
  min-width: 56px;
  height: 7rem;
  min-height: 56px;
  border: none;
  outline: none;
  background: ${({ theme: { color } }) => color.menu};
  box-shadow: 0 0 5px -1px ${({ theme: { color } }) => color.bg};
  overflow: hidden;
  cursor: pointer;

  transition: 0.25s all;

  svg {
    height: 3.5rem;
    pointer-events: none;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
    transition: all 0.5s !important;
  }

  * {
    fill: ${({ theme: { color } }) => color.content};
    transition: 0.25s fill !important;
  }

  &:first-child {
    border-bottom-left-radius: 3rem;
  }

  &:hover *,
  &:focus * {
    fill: ${({ theme: { color } }) => color.header} !important;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }

  ${({ theme: { base } }) => base.mq.tablet} {
    font-size: ${({ theme: { base } }) => base.fontSize.s};
    svg {
      height: 1.7em;
      width: 1.7em;
    }
  }
`;

const HomePageButton = styled(StyledButton)`
  position: relative;
  pointer-events: ${({ location }) => (location.pathname === '/' ? 'none' : 'auto')};
  * {
    opacity: ${({ location }) => (location.pathname === '/' ? 0.5 : 1)};
  }
`;

const ThemeIconsWrapper = styled.div`
  position: relative;
  margin-top: 0;

  svg {
    margin-top: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    fill: ${({ theme: { color } }) => color.content};

    :nth-child(1) {
      opacity: ${({ isDarkTheme }) => (isDarkTheme === true ? 1 : 0)};
    }
    :nth-child(2) {
      opacity: ${({ isDarkTheme }) => (isDarkTheme === true ? 0 : 1)};
    }
  }
`;

const FloatingNav = ({ toggleMenu, toggleSearch, isMenuOpen, location }) => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const handleToggleTheme = () => {
    setIsDarkTheme((state) => !state);
    Cookies.set('theme', !isDarkTheme === true ? 'dark' : 'light', { expires: 365 });
  };
  return (
    <Wrapper>
      <HomePageButton as={Link} to={routes.home} location={location}>
        <HomeIcon />
      </HomePageButton>
      <StyledButton onClick={handleToggleTheme}>
        <ThemeIconsWrapper isDarkTheme={isDarkTheme}>
          <LightThemeIcon />
          <DarkThemeIcon />
        </ThemeIconsWrapper>
      </StyledButton>
      <StyledButton onClick={toggleSearch}>
        <SearchIcon />
      </StyledButton>
      <StyledButton onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <MenuIcon />
      </StyledButton>
    </Wrapper>
  );
};

FloatingNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default FloatingNav;
