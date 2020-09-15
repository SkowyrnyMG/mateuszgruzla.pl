import React from 'react';
import styled from 'styled-components';

import { routes } from 'utils/routes';

import BigButton from 'components/atoms/big-button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 9rem;
`;

const StyledHeading = styled.h3`
  margin-bottom: 9rem;
`;

const StyledBigButton = styled(BigButton)`
  margin: 9rem 0;
`;

const BottomSite = () => (
  <Wrapper>
    <StyledHeading>Check out my blog if you want to be up to date!</StyledHeading>
    <StyledBigButton path={routes.blog} btnColor={({ theme: { base } }) => base.accent.secondary}>
      GO TO BLOG PAGE
    </StyledBigButton>
  </Wrapper>
);

export default BottomSite;
