import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 58rem;
`;

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

export default Header;
