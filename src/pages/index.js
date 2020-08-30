import React from 'react';
import styled from 'styled-components';

import SEO from 'utils/seo';
import Layout from 'utils/layout';

import Devider from 'components/modules/devider/devider';
import HomePageHeader from 'components/organisms/home-page/header/home-page-header';
import HomePageAbout from 'components/organisms/home-page/about/home-page-about';
import HomePageTechnology from 'components/organisms/home-page/technology/home-page-technology';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = ({ location }) => {
  return (
    <Layout location={location} title='Home'>
      <SEO title='Home' />
      <Wrapper>
        <HomePageHeader />
        <Devider title='bio.' highlightEnd='2' highlightColor={({ theme }) => theme.base.accent.primary} />
        <HomePageAbout />
        <Devider title='technology.' highlightEnd='4' highlightColor={({ theme }) => theme.base.accent.secondary} />
        <HomePageTechnology />
      </Wrapper>
    </Layout>
  );
};

export default Home;
