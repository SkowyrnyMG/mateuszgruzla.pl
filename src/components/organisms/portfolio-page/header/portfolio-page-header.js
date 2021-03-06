import React from 'react';
import styled from 'styled-components';

import Header from 'components/atoms/header';
import ColorText from 'components/atoms/color-text';

const StyledHeading = styled.h1`
  letter-spacing: 5px;
  ${({ theme: { base } }) => base.mq.bigPhone} {
    letter-spacing: 2px;
  }
`;

const FirstHeadingLine = styled.span`
  font-size: 15rem;
  display: flex;
  justify-content: center;
`;

const SecondHeadingLine = styled.span`
  display: flex;
  justify-content: center;
  margin-top: -4rem;
  font-size: 4.6rem;
  text-transform: lowercase;
  letter-spacing: 2.5px;
  font-weight: ${({ theme: { base } }) => base.fontWeight.thin};

  ${({ theme: { base } }) => base.mq.bigPhone} {
    letter-spacing: 1.3px;
  }
`;

const PortfolioPageHeader = () => (
  <Header>
    <StyledHeading>
      <FirstHeadingLine>
        <ColorText colorText={({ theme: { base } }) => base.accent.secondary}>PORT</ColorText>FOLIO
      </FirstHeadingLine>
      <SecondHeadingLine>projects freelance contributions</SecondHeadingLine>
    </StyledHeading>
  </Header>
);

export default PortfolioPageHeader;
