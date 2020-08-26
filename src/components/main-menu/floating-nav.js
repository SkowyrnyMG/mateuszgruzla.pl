import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from 'context/theme-context';

import LightThemeIcon from 'assets/svg/light-theme-icon.svg';
import SearchIcon from 'assets/svg/search-icon.svg';
import MenuIcon from 'assets/svg/menu-icon.svg';

const Wrapper = styled.div``;
const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  width: 7rem;
  height: 7rem;
  border: none;
  outline: none;
  background: ${({ theme: { color } }) => color.menu};
  box-shadow: 0 0 5px -1px ${({ theme: { color } }) => color.bg};
  cursor: pointer;

  transition: 0.25s transform;

  svg {
    height: 35px;
  }

  * {
    transition: 0.25s fill !important;
  }
  /* tutaj */

  &:first-of-type {
    border-bottom-left-radius: 3rem;
  }

  &:hover *,
  &:focus * {
    fill: ${({ theme: { color } }) => color.header} !important;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const FloatingNav = () => {
  const { setIsDarkTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    setIsDarkTheme((state) => !state);
  };
  return (
    <Wrapper>
      <StyledButton onClick={handleToggleTheme}>
        <LightThemeIcon />
      </StyledButton>
      <StyledButton>
        <SearchIcon />
      </StyledButton>
      <StyledButton>
        <MenuIcon />
      </StyledButton>
    </Wrapper>
  );
};

export default FloatingNav;
