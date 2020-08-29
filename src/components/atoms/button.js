import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  position: relative;
  margin-top: 2rem;
  padding: ${({ isLink }) => (isLink === 'true' ? '2rem 0' : '2rem 4rem')};
  font-family: inherit;
  font-size: 20px;
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
  color: ${({ btnColor }) => btnColor};
  text-transform: uppercase;
  background: none;
  border: 1px solid ${({ btnColor }) => btnColor};
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ btnColor }) => btnColor};
    transform-origin: 100% 0;
    transform: scale3d(0, 1, 1);
    transition: transform 300ms;
  }

  :hover::before {
    transform-origin: 0 100%;
    transform: scale3d(1, 1, 1);
  }

  :hover {
    color: ${({ theme: { color } }) => color.bg} !important;
  }
`;

const ButtonText = styled.span`
  position: relative;
  transition: color 0.25s;
  z-index: 10;
`;

const StyledLink = styled(Link)`
  padding: 2rem 4rem;
  height: 100%;
  width: 100%;
  color: inherit;
`;

const Button = ({ children, btnColor, isLink, path }) => (
  <Wrapper btnColor={btnColor} isLink={isLink}>
    {isLink === 'true' ? (
      <StyledLink to={path}>
        <ButtonText>{children}</ButtonText>
      </StyledLink>
    ) : (
      <ButtonText>{children}</ButtonText>
    )}
  </Wrapper>
);

Button.defaultProps = {
  children: 'Click me',
  btnColor: ({ theme }) => theme.base.accent.primary,
};

Button.propTypes = {
  children: PropTypes.string,
  btnColor: PropTypes.func,
};

export default Button;
