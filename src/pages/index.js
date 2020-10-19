import React from 'react';
import styled from 'styled-components';

import SEO from 'utils/seo';
import Layout from 'utils/layout';

import GridView from 'utils/grid-view';

import Devider from 'components/modules/devider/devider';
import HomePageHeader from 'components/organisms/home-page/header/home-page-header';
import HomePageAbout from 'components/organisms/home-page/about/home-page-about';
import HomePageTechnology from 'components/organisms/home-page/technology/home-page-technology';
import HomePageProjects from 'components/organisms/home-page/projects/home-page-projects';
import HomePageBlog from 'components/organisms/home-page/blog/home-page-blog';

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
        <GridView>
          <HomePageHeader />
          <Devider title='bio.' highlightEnd='2' />
          <HomePageAbout />
          <Devider title='stack.' highlightEnd='3' highlightColor={({ theme }) => theme.base.accent.secondary} />
          <HomePageTechnology />
          <Devider title='projects.' highlightEnd='3' />
          <HomePageProjects />
          <Devider title='lastposts.' highlightEnd='4' highlightColor={({ theme }) => theme.base.accent.secondary} />
          <HomePageBlog />
        </GridView>
      </Wrapper>
    </Layout>
  );
};

export default Home;
