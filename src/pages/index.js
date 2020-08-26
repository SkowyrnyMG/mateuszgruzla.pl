import React from 'react';
import styled from 'styled-components';

import SEO from 'utils/seo';
import Layout from 'utils/layout';

const Wrapper = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: 'Changa One', cursive;
    text-transform: uppercase;
    /* font-size: 2.5rem; */
  }
`;

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location} title='Strona w budowie'>
      <SEO title='Home' />
      <Wrapper>
        <h1>Home page</h1>
      </Wrapper>
    </Layout>
  );
};

export default BlogIndex;
