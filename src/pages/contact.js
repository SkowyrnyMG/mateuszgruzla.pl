import React from 'react';
import styled from 'styled-components';

import Layout from 'utils/layout';
import SEO from 'utils/seo';
import GridView from 'utils/grid-view';

import Devider from 'components/modules/devider/devider';
import ContactSection from 'components/organisms/contact-page/contact-section/contact-section';
import ContactPageHeader from 'components/organisms/contact-page/header/contact-page-header';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Contact = ({ location }) => (
  <Layout location={location}>
    <SEO title='Contact' />
    <Wrapper>
      <GridView>
        <ContactPageHeader />
        <Devider highlightEnd='4' title='textme.' />
        <ContactSection />
      </GridView>
    </Wrapper>
  </Layout>
);

export default Contact;
