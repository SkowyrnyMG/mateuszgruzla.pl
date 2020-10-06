import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.div.attrs(() => ({
  className: 'displays-container',
}))`
  position: relative;
  width: 100%;
  flex-basis: 50%;

  > * {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 0;
  }

  * {
    margin-top: 0;
  }

  ${({ theme: { base } }) => base.mq.bigTablet} {
    margin-bottom: 2rem;
    padding-top: 30rem;
    flex-basis: 100%;
    order: 1;
  }
`;

const BigScreenDevice = styled.div`
  transform: ${({ side }) => `translate(${side === 'left' ? '-70%, -60%' : '-30%, -60%'})`};
`;

const BigScreenDisplay = styled.div`
  position: relative;
  padding: 1rem 1rem 1rem;
  width: 42rem;
  height: 25rem;
  border: 0.5rem solid ${({ theme: { base }, side }) => (side === 'left' ? base.accent.secondary : base.accent.primary)};
  border-radius: 1.5rem;
  background: black;
  box-shadow: ${({ theme: { base } }) => base.shadow.darkSmall};
`;

const BigScreenStand = styled.div`
  position: relative;
  width: 8rem;
  height: 7rem;
  background-image: ${({ theme: { base }, side }) => `linear-gradient(to bottom, ${side === 'left' ? base.accent.secondary : base.accent.primary}, #000)`};
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 150%;
    height: 0.5rem;
    background-color: ${({ theme: { base }, side }) => (side === 'left' ? base.accent.secondary : base.accent.primary)};
    transform: translateX(-50%);
  }
`;

const TabletDevice = styled.div`
  transform: ${({ side }) => `translate(${side === 'left' ? '10%, -10%' : '-110%, -10%'})`};
`;

const TabletDisplay = styled.div`
  width: 21.7rem;
  height: 16.3rem;
  background: #000;
  border: 5px solid ${({ theme: { base }, side }) => (side === 'left' ? base.accent.secondary : base.accent.primary)};
  border-radius: 1.5rem;
  box-shadow: ${({ theme: { base } }) => base.shadow.darkSmall};
  overflow: hidden;
`;

const MobileDevice = styled.div`
  transform: ${({ side }) => `translate(${side === 'left' ? '-15%, 55%' : '-85%, 55%'})`};
`;

const MobileDisplay = styled.div`
  width: 7rem;
  height: 13rem;
  background: #000;
  border: 5px solid ${({ theme: { base }, side }) => (side === 'left' ? base.accent.secondary : base.accent.primary)};
  border-radius: 1.5rem;
  box-shadow: ${({ theme: { base } }) => base.shadow.darkSmall};
  overflow: hidden;
`;

const DevicesDisplays = ({ side, bigScreen, tabletDevice, mobileDevice }) => {
  return (
    <Wrapper>
      <BigScreenDevice side={side}>
        <BigScreenDisplay side={side}>
          <Img fluid={bigScreen} />
        </BigScreenDisplay>
        <BigScreenStand side={side} />
      </BigScreenDevice>

      <TabletDevice side={side}>
        <TabletDisplay side={side}>
          <Img fluid={tabletDevice} />
        </TabletDisplay>
      </TabletDevice>

      <MobileDevice side={side}>
        <MobileDisplay side={side}>
          <Img fluid={mobileDevice} />
        </MobileDisplay>
      </MobileDevice>
    </Wrapper>
  );
};

export default DevicesDisplays;
