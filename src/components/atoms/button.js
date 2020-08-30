import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperLink = styled(Link)`
  position: relative;
`;

const ButtonText = styled.span`
  margin-top: 2rem;
  position: relative;
  transition: color 0.25s;
  z-index: 10;

  padding: ${({ isLink }) => (isLink === 'true' ? '2rem 4rem' : '2rem 4rem')};
  font-family: inherit;
  font-size: 20px;
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
  color: ${({ btncolor }) => btncolor};
  text-transform: uppercase;
  background: none;
  border: 1px solid ${({ btncolor }) => btncolor};
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
    background: ${({ btncolor }) => btncolor};
    transform-origin: 100% 0;
    transform: scale3d(0, 1, 1);
    transition: transform 300ms;
    z-index: -1;
  }

  :hover::before {
    transform-origin: 0 100%;
    transform: scale3d(1, 1, 1);
  }

  :hover {
    color: ${({ theme: { color } }) => color.bg} !important;
  }
`;

const WrapperBtn = ButtonText.withComponent('button');

const Button = ({ children, btncolor, isLink, path }) => (
  <>
    {isLink === 'true' ? (
      <WrapperLink to={path}>
        <ButtonText isLink={isLink} btncolor={btncolor}>
          {children}
        </ButtonText>
      </WrapperLink>
    ) : (
      <WrapperBtn isLink={isLink} btncolor={btncolor}>
        <span>{children}</span>
      </WrapperBtn>
    )}
  </>
);

Button.defaultProps = {
  children: 'Click me',
  btncolor: ({ theme }) => theme.base.accent.primary,
  path: '/',
  isLink: 'false',
};

Button.propTypes = {
  children: PropTypes.string,
  btncolor: PropTypes.func,
  path: PropTypes.string,
  isLink: PropTypes.string,
};

export default Button;
