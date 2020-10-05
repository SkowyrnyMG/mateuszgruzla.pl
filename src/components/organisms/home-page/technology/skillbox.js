import React from 'react';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.div.attrs(() => ({ className: 'skillbox' }))`
  display: flex;
  flex-direction: ${({ side }) => (side === 'right' ? 'row-reverse' : 'row')};
`;

const Path = styled.div`
  margin-top: -3rem;
  position: relative;
  flex-basis: 45%;
`;

const Checkpoint = styled.div.attrs(() => ({ className: 'checkpoint' }))`
  position: absolute;
  top: calc(50% + 30px);
  left: 50%;
  width: 40px;
  height: 40px;
  background: ${({ theme: { base }, side }) => (side === 'right' ? base.accent.secondary : base.accent.primary)};
  border-radius: 5px;
  transform: translateX(-50%) rotate(-135deg);
  z-index: 5;
`;

const PathLine = styled.div.attrs(() => ({ className: 'pathLine' }))`
  position: absolute;
  left: 50%;
  transform-origin: bottom left;
  z-index: 1;
  /* background: ${({ theme: { color } }) => color.content}; */
`;

const HorizontalLine = styled(PathLine)`
  top: calc(50% + 40px);
  transform: ${({ side }) => (side === 'right' ? 'rotate(0)' : 'rotate(180deg)')};
  height: 1px;
  width: 50%;
`;

const VerticalLine = styled(PathLine)`
  width: 1px;
  height: calc(50% + 40px);
`;

const Skill = styled.div.attrs(() => ({ className: 'skill' }))`
  display: flex;
  justify-content: center;
  justify-content: ${({ side }) => (side === 'right' ? 'flex-start' : 'flex-end')};
  position: relative;
  padding: 2rem;
  margin-top: 80px;
  flex-basis: 55%;
  min-height: 200px;
  background: ${({ theme: { color } }) => color.secondary};
  z-index: 2;
  border-radius: 5px;
`;
const IconWrapper = styled.div`
  margin-top: 0;
  position: absolute;
  width: 100px;
  height: 100px;
  top: -20px;

  ${({ side }) =>
    side === 'right'
      ? css`
          right: -20px;
        `
      : css`
          left: -20px;
        `}

  * {
    margin-top: 0;
  }
`;

const Content = styled.div`
  flex-basis: 85%;
  padding: 2rem;
`;

const Skillbox = ({ side, title, children, techIcon }) => (
  <Wrapper side={side}>
    <Skill side={side}>
      <IconWrapper side={side}>
        <Img fluid={techIcon} />
      </IconWrapper>
      <Content>
        <h4>{title}</h4>
        <p>{children}</p>
      </Content>
    </Skill>
    <Path>
      <Checkpoint side={side} />
      <HorizontalLine side={side} />
      <VerticalLine />
    </Path>
  </Wrapper>
);

export default Skillbox;
