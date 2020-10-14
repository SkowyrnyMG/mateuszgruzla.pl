import React, { useState, useEffect, useRef } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Disqus } from 'gatsby-plugin-disqus';
import Img from 'gatsby-image';

import Layout from 'utils/layout';
import SEO from 'utils/seo';
import GridView from 'utils/grid-view';
import MdxRenderer from 'components/organisms/post-page/mdx-renderer/mdx-renderer';
import { useImg } from 'hooks/useImg';

import Devider from 'components/modules/devider/devider';
import FbIcon from 'assets/svg/fb-icon.svg';
import TwitterIcon from 'assets/svg/twitter-icon.svg';

import TableOfContent from 'components/organisms/post-page/table-of-content/table-of-content';
import PostPageArticleHeader from 'components/organisms/post-page/article-header/post-page-article-header';
import RecentPosts from 'components/modules/recent-posts/recent-posts';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${({ theme: { base } }) => base.mq.bigPhoneBreak} {
    padding-top: 4em;
  }
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
  font-size: ${({ theme: { base } }) => base.fontSize.ms};
  svg {
    height: 4rem;
    min-height: 35px;
    width: 4rem;
    min-width: 35px;
    fill: ${({ theme: { base } }) => base.accent.secondary};
  }

  > * {
    margin-right: 3rem;
  }
`;

const PostNavWrapper = styled.div`
  margin-bottom: 8rem;
  display: grid;
  grid-template-columns: minmax(130px, 30rem) 1fr [mobile] 1fr minmax(130px, 30rem);
  grid-column-gap: 1rem;
  align-items: flex-start;
  width: 100%;

  * {
    margin: 0;
  }
`;

const NavButton = styled(Link)`
  position: relative;
  width: 30rem;
  min-width: 130px;
  margin: 0;
  display: grid;
  grid-template-rows: minmax(63px, 15rem) minmax(min-content, 5rem);
  color: ${({ theme: { color } }) => color.header};
  font-size: ${({ theme: { base } }) => base.fontSize.s};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s;

  &:first-of-type {
    grid-column: 1 / 2;
    justify-self: start;
  }

  &:last-of-type {
    grid-column: 4 / 5;
    justify-self: end;
  }

  &:first-of-type::before,
  &:last-of-type::before {
    content: '';
    position: absolute;
    padding: 0.5rem 1rem;
    background-color: ${({ theme: { base } }) => base.accent.secondary};
    z-index: 9999;
  }

  &:first-of-type::before {
    content: 'prev';
    top: 0;
    left: 0;
    border-top-left-radius: 5px;
  }

  &:last-of-type::before {
    content: 'next';
    top: 0;
    right: 0;
    border-top-right-radius: 5px;
  }

  p {
    position: relative;
    margin-top: 0.5em;
    font-size: ${({ theme: { base } }) => base.fontSize.s};
    font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
    height: 100%;
    display: block;
    transition: color 0.25s;
  }

  :hover {
    transform: translateY(-5px);
    p {
      color: ${({ theme: { base } }) => base.accent.secondary};
    }
  }

  ${({ theme: { base } }) => base.mq.tablet} {
    &:first-of-type {
      grid-column: 1 / 3;
    }

    &:last-of-type {
      grid-column: 3 / 5;
    }
  }
`;

const StyledButtonImg = styled(Img)`
  border-radius: 5px;
`;

const BlogPost = ({ data, pageContext }) => {
  const {
    mdx: {
      frontmatter: { title, date, description, tags, image },
      body,
      timeToRead,
      slug,
      id,
    },
    site: {
      siteMetadata: {
        author: { name },
      },
    },
  } = data;

  const { defaultImg } = useImg();

  // Here we are creating table of content regarding heading tags in MDX body, scrollTo animation logic is implemented in table-of-content.js file
  const [headings, setHeadings] = useState('');
  const PostBodyDOM = useRef(null);
  const TableOfContentDOM = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      const allHeadings = PostBodyDOM.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
      allHeadings.forEach((heading, index) => heading.setAttribute('id', `heading-index-${index}`));
      setHeadings(allHeadings);
    }, 0);
  }, []);

  const baseBlogUrl = 'https://mateuszgruzla.pl/blog/';

  const disqusConfig = {
    url: `${baseBlogUrl + slug}`,
    identifier: id,
    title,
  };

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
                <StyledButtonImg fluid={pageContext.previous.frontmatter.image ? pageContext.previous.frontmatter.image.childImageSharp.fluid : defaultImg} />
                <p>{pageContext.previous.frontmatter.title}</p>
              </NavButton>
            )}

            {pageContext.next && (
              <NavButton to={`/blog/${pageContext.next.slug}`}>
                <StyledButtonImg fluid={pageContext.next.frontmatter.image ? pageContext.next.frontmatter.image.childImageSharp.fluid : defaultImg} />
                <p>{pageContext.next.frontmatter.title}</p>
              </NavButton>
            )}
          </PostNavWrapper>
          <RecentPosts />
          <Disqus config={disqusConfig} />
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
