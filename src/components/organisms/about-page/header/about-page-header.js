import React, { useState } from 'react';
import styled from 'styled-components';

import Header from 'components/atoms/header';
import Popup from 'components/organisms/about-page/popup/popup';

const Content = styled.h1`
  margin-right: 5rem;
  margin-top: 5rem;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ContentFirstLine = styled.span`
  font-size: 9.6rem;
`;
const ContentSecondLine = styled.span`
  margin-top: -3rem;
  font-size: 5rem;
`;
const ContentThirdLine = styled.span`
  margin-top: -2rem;
  font-size: 4.3rem;
`;
const ContentFourthLine = styled.span`
  margin-right: -1rem;
  margin-top: -10rem;
  font-size: 26.25rem;
`;

const Hightlight = styled.span`
  color: ${({ theme: { base } }) => base.accent.primary};
`;

const CTAWrapper = styled.div`
  margin-left: 5rem;
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const CTA = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: inherit;
  width: 36rem;
  height: 36rem;
  background: none;
  border: 5px solid ${({ theme: { color } }) => color.content};
  transition: transform 0.25s;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 93%;
    height: 93%;
    background: none;
    border: 3px dashed ${({ theme: { color } }) => color.content};
    transform: translate(-50%, -50%);
    transition: transform 0.25s;
  }

  span {
    font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
  }

  span:first-child {
    /* font-size: ${({ theme: { base } }) => base.fontSize.m}; */
    font-size: 1.8rem;
    color: ${({ theme: { base } }) => base.accent.tertiary};
  }

  span:nth-child(2) {
    /* font-size: ${({ theme: { base } }) => base.fontSize.big}; */
    font-size: 4.6rem;
    color: ${({ theme: { color } }) => color.header};
  }

  :hover {
    transform: scale(1.03);
  }

  :hover::before {
    transform: translate(-50%, -50%) scale(0.95);
  }
`;

const AboutPageHeader = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupActive(true);
  };

  const handleClosePopup = () => {
    setIsPopupActive(false);
  };

  return (
    <Header>
      <Content>
        <ContentFirstLine>HI, THERE!</ContentFirstLine>
        <ContentSecondLine>
          I AM <Hightlight>FRONTEND DEV</Hightlight>
        </ContentSecondLine>
        <ContentThirdLine>
          PROUD TO BE <Hightlight>WORKING</Hightlight>
        </ContentThirdLine>
        <ContentFourthLine>
          <Hightlight>FOR</Hightlight>
        </ContentFourthLine>{' '}
      </Content>
      <CTAWrapper>
        <CTA onClick={handleOpenPopup}>
          <span>CLICK TO PLACE</span>
          <span>
            LOGO <br />
            OF <br /> YOUR COMPANY!{' '}
          </span>
        </CTA>
      </CTAWrapper>
      <Popup isPopupActive={isPopupActive} handleClosePopup={handleClosePopup} />
    </Header>
  );
};

export default AboutPageHeader;
