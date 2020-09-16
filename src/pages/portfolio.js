import React from 'react';
import styled from 'styled-components';

import Layout from 'utils/layout';
import SEO from 'utils/seo';

import Devider from 'components/modules/devider/devider';
import PortfolioPageHeader from 'components/organisms/portfolio-page/header/portfolio-page-header';
import PortfolioPageProjects from 'components/organisms/portfolio-page/projects/portfolio-page-projects';
import PortfolioPageContributions from 'components/organisms/portfolio-page/contributions/portfolio-page-contributions';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Portfolio = () => (
  <Layout>
    <SEO title='Portfolio' />
    <Wrapper>
      <PortfolioPageHeader />
      <Devider title='projects' highlightEnd='3' highlightColor={({ theme: { base } }) => base.accent.primary} />
      <PortfolioPageProjects />
      <Devider title='contributions' highlightEnd='4' highlightColor={({ theme: { base } }) => base.accent.secondary} />
      <PortfolioPageContributions />
    </Wrapper>
  </Layout>
);

export default Portfolio;
