import React from 'react';
import styled from 'styled-components';

import Header from 'components/atoms/header';

const StyledHeading = styled.h1`
  text-align: center;
`;

const FirstLine = styled.span`
  display: block;
  font-size: 29rem;
  color: ${({ theme: { base } }) => base.accent.secondary};
`;
const SecondLine = styled.span`
  display: block;
  margin-top: -9rem;
  font-size: 4.5rem;
  font-weight: ${({ theme: { base } }) => base.fontWeight.thin};
  text-transform: lowercase;
`;

const BlogPageHeader = () => (
  <Header>
    <StyledHeading>
      <FirstLine>BLOG</FirstLine>
      <SecondLine>I have always something to say</SecondLine>
    </StyledHeading>
  </Header>
);

export default BlogPageHeader;
