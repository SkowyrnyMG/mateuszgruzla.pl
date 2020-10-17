import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Layout from 'utils/layout';
import GridView from 'utils/grid-view';
import SEO from 'utils/seo';
import Devider from 'components/modules/devider/devider';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  * {
    margin-bottom: 3rem;
  }
`;

const Success = () => {
  const [timer, setTimer] = useState(6);

  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'http://mateuszgruzla.pl';
    }, 7000);
    function countDown() {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }
    const timerID = setInterval(countDown, 1000);

    return () => {
      clearInterval(timerID);
    };
  });
  return (
    <Layout>
      <SEO title='Contact form submission success' />
      <Wrapper>
        <GridView>
          <Devider title='Success.' highlightEnd='7' highlightColor={({ theme: { base } }) => base.accent.success} />
          <InfoWrapper>
            <h4>From has been submitted!</h4>
            <p>You will be redirected to home page in {timer}</p>
          </InfoWrapper>
        </GridView>
      </Wrapper>
    </Layout>
  );
};

export default Success;
