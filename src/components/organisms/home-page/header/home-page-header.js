import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from 'context/theme-context';

import LogoIcon from 'assets/svg/logo-icon.svg';

import Header from 'components/atoms/header';

const HeaderFirstLine = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 15rem;
  letter-spacing: 0.8rem;

  svg {
    position: absolute;
    height: 15rem;
    top: 50%;
    left: 29.7%;
    transform: translate(-50%, -50%);
    * {
      fill: ${({ theme, isDarkTheme }) => (isDarkTheme ? theme.base.accent.primary : theme.color.header)};
    }
  }
`;

const UnvisibleLetter = styled.span`
  opacity: 0;
`;

const HeaderSecondLine = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 11rem;
  margin-top: -2rem;
  width: 100%;
  height: 11rem;
  font-size: 12rem;
  position: relative;

  span {
    display: block;
    position: relative;
    margin-top: -0.5rem;
    width: 100%;
    text-align: center;
    color: ${({ theme, isDarkTheme }) => (isDarkTheme ? theme.color.bg : theme.base.accent.primary)};
    z-index: 5;
  }
`;

const BgContainer = styled.span`
  display: block;
  position: absolute;
  width: 99%;
  height: 100%;
  background: ${({ theme, isDarkTheme }) => (isDarkTheme ? theme.base.accent.primary : theme.color.header)};
  transition: all 0.25s;
  z-index: 0;

  ${({ theme: { base } }) => base.mq.bigPhone} {
    width: 100%;
  }
`;

const HeaderThirdLine = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6.2rem;
  text-transform: lowercase;
  letter-spacing: 2px;
  ${({ theme: { base } }) => base.mq.bigTablet} {
    letter-spacing: 1px;
  }
`;

const HomePageHeader = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <Header>
      <h1>
        <HeaderFirstLine isDarkTheme={isDarkTheme}>
          <LogoIcon />
          FR<UnvisibleLetter>O</UnvisibleLetter>NTEND
        </HeaderFirstLine>
        <HeaderSecondLine isDarkTheme={isDarkTheme}>
          <BgContainer isDarkTheme={isDarkTheme}>DEVELOPER</BgContainer>
        </HeaderSecondLine>
        <HeaderThirdLine>with passion and dreams</HeaderThirdLine>
      </h1>
    </Header>
  );
};

export default HomePageHeader;
