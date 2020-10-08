import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cookies from 'js-cookie';

import { ThemeContext } from 'context/theme-context';

import LightThemeIcon from 'assets/svg/light-theme-icon.svg';
import DarkThemeIcon from 'assets/svg/dark-theme-icon.svg';
import SearchIcon from 'assets/svg/search-icon.svg';
import MenuIcon from 'assets/svg/menu-icon.svg';

const Wrapper = styled.div`
  display: flex;
  pointer-events: auto;
  z-index: 20000;
`;

const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  width: 7rem;
  height: 7rem;
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
  }

  * {
    fill: ${({ theme: { color } }) => color.content};
    transition: 0.25s fill !important;
  }

  &:first-of-type {
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
    width: 3.9em;
    height: 3.9em;

    svg {
      height: 1.7em;
      width: 1.7em;
    }
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

const StyledMenuIcon = styled(MenuIcon)`
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: all 0.5s !important;
`;

const FloatingNav = ({ toggleMenu, toggleSearch, isMenuOpen }) => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    setIsDarkTheme((state) => !state);
    Cookies.set('theme', !isDarkTheme === true ? 'dark' : 'light');
  };
  return (
    <Wrapper>
      <StyledButton onClick={handleToggleTheme}>
        <ThemeIconsWrapper isDarkTheme={isDarkTheme}>
          <LightThemeIcon />
          <DarkThemeIcon />
        </ThemeIconsWrapper>
      </StyledButton>
      <StyledButton onClick={toggleSearch}>
        <SearchIcon />
      </StyledButton>
      <StyledButton onClick={toggleMenu}>
        <StyledMenuIcon isMenuOpen={isMenuOpen} />
      </StyledButton>
    </Wrapper>
  );
};

FloatingNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default FloatingNav;
