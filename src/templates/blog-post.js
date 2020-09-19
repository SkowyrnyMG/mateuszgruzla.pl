import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from 'utils/layout';
import SEO from 'utils/seo';

import Devider from 'components/modules/devider/devider';

const MainPostHeading = styled.h1`
  margin-bottom: 7rem;
  padding-bottom: 7rem;
  font-family: ${({ theme: { base } }) => base.fontFamily.main} !important;
  text-transform: none;
`;

const BlogPost = ({ data, pageContext }) => {
  const {
    mdx: {
      frontmatter: { title, date, description },
      body,
    },
  } = data;
  return (
    <Layout>
      <SEO title='blogpost' />
      <article>
        <MainPostHeading>{title}</MainPostHeading>
        <Devider title=' ' />
        <p>{description}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    mdx(slug: { eq: $slug }) {
      id
      slug
      frontmatter {
        title
        date
        description
      }
      body
    }
  }
`;

export default BlogPost;
