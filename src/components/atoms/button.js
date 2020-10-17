import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperLink = styled(Link)`
  position: relative;
`;

const WrapperOuterLink = styled.a`
  position: relative;
`;

const ButtonText = styled.span`
  margin-top: 2rem;
  position: relative;
  transition: color 0.25s;
  z-index: 10;

  padding: ${({ btnType }) => (btnType === 'inner' || btnType === 'outer' ? '2rem 4rem' : '2rem 4rem')};
  font-family: inherit;
  font-size: 20px;
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
  color: ${({ btncolor }) => btncolor};
  text-transform: uppercase;
  background: none;
  border: 2px solid ${({ btncolor }) => btncolor};
  border-radius: 5px;
  box-shadow: ${({ theme: { base } }) => base.shadow.contrast};
  cursor: pointer;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 101%;
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

const Button = ({ children, btncolor, btnType, path, handleClick, btnAction, isSubmiting }) => (
  <>
    {btnType === 'inner' && (
      <WrapperLink to={path}>
        <ButtonText btnType={btnType} btncolor={btncolor}>
          {children}
        </ButtonText>
      </WrapperLink>
    )}
    {btnType === 'outer' && (
      <WrapperOuterLink href={path} target='_blank' rel='noreferrer'>
        <ButtonText btnType={btnType} btncolor={btncolor}>
          {children}
        </ButtonText>
      </WrapperOuterLink>
    )}
    {btnType === 'button' && (
      <WrapperBtn btnType={btnType} btncolor={btncolor} onClick={handleClick} type={btnAction} disabled={isSubmiting}>
        <span>{children}</span>
      </WrapperBtn>
    )}
  </>
);

Button.defaultProps = {
  children: 'Click me',
  btncolor: ({ theme }) => theme.base.accent.primary,
  path: '/',
  btnType: 'button',
  isSubmiting: false,
  btnAction: 'submit',
  handleClick: () => {
    return true;
  },
};

Button.propTypes = {
  children: PropTypes.string,
  btncolor: PropTypes.func,
  path: PropTypes.string,
  btnType: PropTypes.string,
  isSubmiting: PropTypes.bool,
  btnAction: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
