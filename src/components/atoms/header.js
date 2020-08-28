import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  min-height: 58rem;
`;

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

export default Header;
