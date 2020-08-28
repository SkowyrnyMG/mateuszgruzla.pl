import React from 'react';
import styled from 'styled-components';

import SEO from 'utils/seo';
import Layout from 'utils/layout';

import Header from 'components/atoms/header';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location} title='Strona w budowie'>
      <SEO title='Home' />
      <Wrapper>
        <Header>
          <h1>Home page</h1>
        </Header>
      </Wrapper>
    </Layout>
  );
};

export default BlogIndex;
