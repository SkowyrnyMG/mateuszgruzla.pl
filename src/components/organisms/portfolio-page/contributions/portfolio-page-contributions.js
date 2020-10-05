import React from 'react';
import styled from 'styled-components';

import { useImg } from 'hooks/useImg';

import Contribution from 'components/modules/contribution/contribution';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;

const PortfolioPageContributions = () => {
  const { livesessionLogo } = useImg();
  return (
    <Wrapper>
      <Contribution companyLogo={livesessionLogo} link='https://www.npmjs.com/package/@livesession/sdk' />
    </Wrapper>
  );
};

export default PortfolioPageContributions;
