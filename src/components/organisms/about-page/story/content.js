import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* width: 50rem; */
  font-size: ${({ theme: { base } }) => base.fontSize.m};

  grid-column: ${({ fullWidth }) => (fullWidth ? '1 / -1' : 'auto')};
`;

const StyledContentHeading = styled.h3`
  margin-bottom: 3rem;
`;

const Content = ({ title, children, fullWidth }) => (
  <Wrapper fullWidth={fullWidth}>
    <StyledContentHeading>{title}</StyledContentHeading>
    <p>{children}</p>
  </Wrapper>
);

export default Content;
