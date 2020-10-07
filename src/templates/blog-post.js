import React, { useState, useEffect, useRef } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from 'utils/layout';
import SEO from 'utils/seo';
import GridView from 'utils/grid-view';
import MdxRenderer from 'components/organisms/post-page/mdx-renderer/mdx-renderer';

import Devider from 'components/modules/devider/devider';
import FbIcon from 'assets/svg/fb-icon.svg';
import TwitterIcon from 'assets/svg/twitter-icon.svg';
import LeftNavIcon from 'assets/svg/left-post-arrow.svg';
import RightNavIcon from 'assets/svg/right-post-arrow.svg';

import TableOfContent from 'components/organisms/post-page/table-of-content/table-of-content';
import PostPageArticleHeader from 'components/organisms/post-page/article-header/post-page-article-header';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledPostBody = styled.div`
  margin-bottom: 5rem;
  display: flex;
  height: 100%;
  line-height: 1.6;
  border-bottom: 1px solid ${({ theme: { color } }) => color.secondary};

  ${({ theme: { base } }) => base.mq.bigTablet} {
    flex-direction: column-reverse;
  }
`;

const PostBodyContainer = styled.div`
  flex-basis: 70rem;
`;

const TableOfContentWrapper = styled.div`
  padding-bottom: 5rem;
  position: relative !important;
  display: block;
  flex-basis: calc(100% - 70rem);
`;

const ShareWrapper = styled.aside`
  margin: 5rem 0 9rem;
  display: flex;
  align-items: center;

  svg {
    height: 4rem;
    width: 4rem;
    fill: ${({ theme: { base } }) => base.accent.secondary};
  }

  > * {
    margin-right: 3rem;
  }
`;

const PostNavWrapper = styled.div`
  margin-bottom: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  * {
    margin: 0;
  }
`;

const NavButton = styled(Link)`
  width: 12rem;
  margin: 0;
  display: flex;
  align-items: flex-start;
  color: ${({ theme: { color } }) => color.header};
  font-size: ${({ theme: { base } }) => base.fontSize.ml};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.25s;

  p {
    height: 100%;
    position: relative;
    display: block;
    transition: color 0.25s;
  }

  svg {
    transform: translateY(8px);
    transition: color 0.2s;
    margin: -0.4rem 0.3rem 0;
  }

  :hover * {
    color: ${({ theme: { base } }) => base.accent.secondary};
    fill: currentColor;
  }
`;

const BlogPost = ({ data, pageContext }) => {
  const {
    mdx: {
      frontmatter: { title, date, description, tags, image },
      body,
      timeToRead,
    },
    site: {
      siteMetadata: {
        author: { name },
      },
    },
  } = data;

  // Here we are creating table of content regarding heading tags in MDX body, scrollTo animation logic is implemented in table-of-content.js file
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
      <SEO title={title} />
      <Wrapper>
        <GridView>
          <Devider title={title} />
          <StyledPostBody>
            <PostBodyContainer ref={PostBodyDOM}>
              <PostPageArticleHeader postImg={image} description={description} author={name} publishDate={date} timeToRead={timeToRead} tags={tags} />
              <MdxRenderer>{body}</MdxRenderer>
            </PostBodyContainer>
            <TableOfContentWrapper ref={TableOfContentDOM}>
              <TableOfContent headings={headings} />
            </TableOfContentWrapper>
          </StyledPostBody>
          <ShareWrapper>
            <span>Share</span>
            <a href='https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/mateusz.gruzla.3/'>
              <FbIcon />
            </a>
            <a href='https://twitter.com/home?status=https://twitter.com/GruzlaMateusz'>
              <TwitterIcon />
            </a>
          </ShareWrapper>

          <PostNavWrapper>
            {pageContext.previous && (
              <NavButton to={`/blog/${pageContext.previous.slug}`}>
                <LeftNavIcon /> <p>prev post</p>
              </NavButton>
            )}
            &nbsp;
            {pageContext.next && (
              <NavButton to={`/blog/${pageContext.next.slug}`}>
                <p>next post</p>
                <RightNavIcon />
              </NavButton>
            )}
          </PostNavWrapper>
        </GridView>
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
        tags
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
      timeToRead
    }
  }
`;

export default BlogPost;
