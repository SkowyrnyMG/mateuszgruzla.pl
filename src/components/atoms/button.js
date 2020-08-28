import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  position: relative;
  margin-top: 2rem;
  padding: 2rem 4rem;
  font-family: inherit;
  font-size: 20px;
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
  color: ${({ theme: { base } }) => base.accent.tertiary};
  text-transform: uppercase;
  background: none;
  border: 1px solid currentColor;
  border-radius: 5px;
  cursor: pointer;

  :hover div {
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
  }

  :hover {
    color: ${({ theme: { color } }) => color.bg} !important;
  }
`;

const EffectBox = styled.div`
  margin-top: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: ${({ theme: { base } }) => base.accent.tertiary};
  transform: translate(-10%, -50%) scaleX(0.2) scaleY(0.6);
  transform-origin: left;
  transition: all 0.25s;
  z-index: 5;
`;

const ButtonText = styled.span`
  position: relative;
  transition: color 0.25s;
  z-index: 10;
`;

const Button = ({ children }) => (
  <Wrapper>
    <ButtonText>{children}</ButtonText>
    <EffectBox />
  </Wrapper>
);

export default Button;
