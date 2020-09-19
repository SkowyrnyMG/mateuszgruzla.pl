import React from 'react';
import styled from 'styled-components';

import Layout from 'utils/layout';
import SEO from 'utils/seo';

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

const Contact = () => (
  <Layout>
    <SEO title='Contact' />

    <Wrapper>
      <ContactPageHeader />
      <Devider highlightEnd='7' highlightColor={({ theme: { base } }) => base.accent.primary} title='messageme.' />
      <ContactSection />
    </Wrapper>
  </Layout>
);

export default Contact;
