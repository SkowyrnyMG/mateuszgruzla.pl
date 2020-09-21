import React, { useState, useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import gsap from 'gsap';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Layout from 'utils/layout';
import SEO from 'utils/seo';

import Devider from 'components/modules/devider/devider';
import TableOfContent from 'components/organisms/post-page/table-of-content/table-of-content';
import PostPageArticleHeader from 'components/organisms/post-page/article-header/post-page-article-header';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainPostHeading = styled.h1`
  margin-bottom: 7rem;
  padding-bottom: 7rem;
  font-family: ${({ theme: { base } }) => base.fontFamily.main} !important;
  text-transform: none;
`;

const StyledPostBody = styled.div`
  display: flex;
  height: 100%;
`;

const PostBodyContainer = styled.div`
  flex-basis: 70rem;
`;

const TableOfContentWrapper = styled.div`
  position: relative !important;
  display: block;
  flex-basis: calc(100% - 70rem);
`;

const BlogPost = ({ data, pageContext }) => {
  const {
    mdx: {
      frontmatter: { title, date, description },
      body,
      timeToRead,
    },
    site: {
      siteMetadata: {
        author: { name },
      },
    },
  } = data;

  // Here we are creating table of content regarding heading tags in MDX body, croll animation logic is implemented in table-of-content.js file
  const [headings, setHeadings] = useState('');
  const PostBodyDOM = useRef(null);
  const TableOfContentDOM = useRef(null);
  useEffect(() => {
    const allHeadings = PostBodyDOM.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    allHeadings.forEach((heading, index) => heading.setAttribute('id', `heading-index-${index}`));
    setHeadings(allHeadings);
  }, []);

  return (
    <Layout>
      <SEO title='blogpost' />
      <Wrapper>
        <MainPostHeading>{title}</MainPostHeading>
        <Devider title=' ' />
        {/* <p>{description}</p> */}
        <StyledPostBody>
          <PostBodyContainer ref={PostBodyDOM}>
            <PostPageArticleHeader description={description} author={name} publishDate={date} timeToRead={timeToRead} />
            <MDXRenderer>{body}</MDXRenderer>
          </PostBodyContainer>
          <TableOfContentWrapper ref={TableOfContentDOM}>
            <TableOfContent headings={headings} />
          </TableOfContentWrapper>
        </StyledPostBody>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }

    mdx(slug: { eq: $slug }) {
      id
      slug
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      body
      timeToRead
    }
  }
`;

export default BlogPost;
