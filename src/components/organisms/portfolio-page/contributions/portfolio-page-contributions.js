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
        I’ve contributed to <b>livesession SDK plugin</b>. I’ve figured out how to install and run their package on Angular apps. It is nothing big tho, but everytime when I think
        about this it makes me really proud of myself. <br />
        If you don’t know what <b>livesession</b> is, then you really have to visit their <b>webpage</b>. Their software will help you to keep eye on your client needs and
        interests.
      </Contribution>
    </Wrapper>
  );
};

export default PortfolioPageContributions;
