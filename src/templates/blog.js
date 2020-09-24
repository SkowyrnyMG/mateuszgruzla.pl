import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from 'utils/layout';
import SEO from 'utils/seo';
import GridView from 'utils/grid-view';

import Devider from 'components/modules/devider/devider';
import BlogPageHeader from 'components/organisms/blog-page/header/blog-page-header';
import BlogPagePosts from 'components/organisms/blog-page/posts/blog-page-posts';
import BlogPageIndex from 'components/organisms/blog-page/index/blog-page-index';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Blog = ({ data, pageContext }) => {
  const {
    allMdx: { posts },
  } = data;

  return (
    <Layout>
      <SEO title='Blog' />
      <Wrapper>
        <GridView>
          <BlogPageHeader />
          <Devider highlightEnd='3' highlightColor={({ theme: { base } }) => base.accent.primary} title='posts.' />
          <BlogPagePosts posts={posts} />
          <BlogPageIndex pageContext={pageContext} />
        </GridView>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(skip: $skip, limit: $limit, sort: { order: DESC, fields: frontmatter___date }) {
      posts: edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          slug
          id
        }
      }
    }
  }
`;

export default Blog;
