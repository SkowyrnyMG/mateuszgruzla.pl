import React, { useState, useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Layout from 'utils/layout';
import SEO from 'utils/seo';

import Devider from 'components/modules/devider/devider';

const MainPostHeading = styled.h1`
  margin-bottom: 7rem;
  padding-bottom: 7rem;
  font-family: ${({ theme: { base } }) => base.fontFamily.main} !important;
  text-transform: none;
`;

const StyledPostBody = styled.div`
  display: flex;
`;

const PostBodyContainer = styled.div`
  flex-basis: 70rem;
`;

const TableOfContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: calc(100% - 70rem);
`;

const TableOfContent = styled.aside`
  padding: 2rem;
  min-width: 35rem;
  height: fit-content;
  background: ${({ theme: { color } }) => color.secondary};
`;

const BlogPost = ({ data, pageContext }) => {
  const {
    mdx: {
      frontmatter: { title, date, description },
      body,
    },
  } = data;

  const [headings, setHeadings] = useState('');
  const PostBodyDOM = useRef(null);
  const TableOfContentDOM = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    const allHeadings = PostBodyDOM.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    allHeadings.forEach((heading, index) => heading.setAttribute('id', `heading-index-${index}`));
    // const headingsList = [...allHeadings].map(({ textContent, tagName }) => {
    //   return <span key={textContent}>tagName</span>;
    // });
    // setHeadings(allHeadings);

    const TOCButtons = TableOfContentDOM.current.querySelectorAll('button');

    [...TOCButtons].forEach((content) =>
      content.addEventListener('click', (e) => {
        console.log(e.target);
        gsap.to(window, { duration: 1, scrollTo: `#${e.target.className}` });
      }),
    );
    console.log(TableOfContentDOM.current);

    return () =>
      [...TOCButtons].forEach((content) =>
        content.removeEventListener('click', (e) => {
          gsap.to(window, { duration: 1, scrollTo: `#${e.target.className}` });
        }),
      );
  });

  // const handleTOCClick = ({ headingId }) => {
  //   gsap.registerPlugin(ScrollToPlugin);
  //   gsap.to(window, { duration: 2, scrollTo: `#${headingId}` });
  // };
  return (
    <Layout>
      <SEO title='blogpost' />
      <article>
        <MainPostHeading>{title}</MainPostHeading>
        <Devider title=' ' />
        <p>{description}</p>
        <StyledPostBody>
          <PostBodyContainer ref={PostBodyDOM}>
            <MDXRenderer>{body}</MDXRenderer>
          </PostBodyContainer>
          <TableOfContentWrapper>
            <TableOfContent ref={TableOfContentDOM}>
              {[...headings].map(({ textContent, tagName, id }) => {
                return (
                  <button className={id} key={textContent}>
                    {textContent}
                  </button>
                );
              })}
            </TableOfContent>
          </TableOfContentWrapper>
        </StyledPostBody>
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
