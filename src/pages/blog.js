import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from 'utils/layout';
import SEO from 'utils/seo';

import Devider from 'components/modules/devider/devider';
import BlogPageHeader from 'components/organisms/blog-page/header/blog-page-header';
import BlogPagePosts from 'components/organisms/blog-page/posts/blog-page-posts';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Blog = ({ data }) => {
  const {
    allMdx: { posts },
  } = data;

  return (
    <Layout>
      <SEO title='Blog' />
      <Wrapper>
        <BlogPageHeader />
        <Devider highlightEnd='3' highlightColor={({ theme: { base } }) => base.accent.primary} title='posts.' />
        <BlogPagePosts posts={posts} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      posts: edges {
        node {
          frontmatter {
            title
            description
          }
          slug
          id
        }
      }
    }
  }
`;

export default Blog;
