import React from 'react';
import styled from 'styled-components';

import Layout from 'utils/layout';
import SEO from 'utils/seo';

import Devider from 'components/modules/devider/devider';
import AboutPageHeader from 'components/organisms/about-page/header/about-page-header';
import AboutPageStory from 'components/organisms/about-page/story/about-page-story';
import BottomSite from 'components/organisms/about-page/bottom-site/bottomSite';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const About = () => (
  <Layout>
    <SEO title='About' />
    <Wrapper>
      <AboutPageHeader />
      <Devider title='mystory.' highlightEnd='2' highlightColor={({ theme: { base } }) => base.accent.secondary} />
      <AboutPageStory />
      <BottomSite />
    </Wrapper>
  </Layout>
);

export default About;
