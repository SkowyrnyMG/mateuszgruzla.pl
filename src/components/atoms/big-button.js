import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledBtnText = styled.span`
  padding: 2rem 3rem;
  font-size: ${({ theme: { base } }) => base.fontSize.massive};
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
  color: ${({ btnColor }) => btnColor};
  border: 2px solid ${({ btnColor }) => btnColor};
  border-radius: 0.5rem;
  transition: all 0.25s;

  :hover {
    color: ${({ theme: { color } }) => color.bg};
    background: ${({ btnColor }) => btnColor};
  }
`;

const StyledLink = styled(Link)`
  grid-column: 1 / -1;
  text-align: center;
`;

const BigButton = ({ children, btnColor, path }) => (
  <StyledLink to={path}>
    <StyledBtnText btnColor={btnColor}>{children}</StyledBtnText>
  </StyledLink>
);

export default BigButton;
