import React from 'react';
import styled from 'styled-components';

import Header from 'components/atoms/header';

const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const HeaderFirstLine = styled.span`
  display: block;
  font-size: 17rem;
  letter-spacing: 5px;
  color: ${({ theme: { base } }) => base.accent.secondary};
`;
const HeaderSecondLine = styled.span`
  display: flex;
  justify-content: center;
  margin-top: -5rem;
  font-size: 4.6rem;
  font-weight: ${({ theme: { base } }) => base.fontWeight.thin};
`;

const ContactPageHeader = () => (
  <Header>
    <StyledHeading>
      <HeaderFirstLine>CONTACT</HeaderFirstLine>
      <HeaderSecondLine>I AM WAITING FOR YOUR MESSAGE!</HeaderSecondLine>
    </StyledHeading>
  </Header>
);

export default ContactPageHeader;
