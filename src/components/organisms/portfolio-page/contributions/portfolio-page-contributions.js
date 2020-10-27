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
      <Contribution companyLogo={livesessionLogo} link='https://www.npmjs.com/package/@livesession/sdk'>
        I&apos;ve contributed to the <b>livesession SDK plugin</b>. I managed to figure out how to install and run their package on Angular apps. It is nothing big though, but
        whenever I think about it, it makes me proud. If you don’t know what <b>livesession</b> is, then you have to visit their webpage. Their software will help you keep an eye
        out on your clients needs and interests.
      </Contribution>
    </Wrapper>
  );
};

export default PortfolioPageContributions;
