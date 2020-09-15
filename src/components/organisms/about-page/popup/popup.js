import React from 'react';
import styled from 'styled-components';

import { routes } from 'utils/routes';

import Button from 'components/atoms/button';
import LogoIcon from 'assets/svg/logo-icon.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100000;
  width: 100%;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
`;

const PopupBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7rem 6rem;
  width: 93rem;
  min-height: 54rem;
  border-radius: 0.5rem;
  background: ${({ theme: { color } }) => color.secondary};
`;

const Content = styled.div`
  flex-basis: 68%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
`;

const StyledHeading = styled.h3`
  font-size: 6.4rem;
  margin-bottom: 2rem;
`;

const StyledParagraph = styled.p`
  margin-bottom: 6rem;
`;

const StyledLogo = styled(LogoIcon)`
  width: 19.6rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background: ${({ theme: { base } }) => base.accent.tertiary};
  cursor: pointer;

  ::after,
  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 2px;
    background: ${({ theme: { color } }) => color.header};
  }

  ::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  ::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const Popup = () => (
  <Wrapper>
    <PopupBox>
      <CloseButton />
      <Content>
        <StyledHeading>OPEN TO WORK</StyledHeading>
        <StyledParagraph>
          If your Company is looking for creative, open minded, passionate Frontend developer, which is just about to start his coding career then you are in right place! I am
          ready to start my path as Javascript/React/Gatsby dev. I would like to be part of a team which would help me to develop my skills even further to become better porgrammer
          and person.
        </StyledParagraph>
        <Button path={routes.contact} btnType='inner'>
          CONTACT WITH ME!
        </Button>
      </Content>
      <StyledLogo />
    </PopupBox>
  </Wrapper>
);

export default Popup;
