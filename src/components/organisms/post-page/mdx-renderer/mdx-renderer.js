import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import CodeBlock from 'components/modules/code-block/code-block';

const components = {
  pre: CodeBlock,
};

const StyledArticle = styled.article`
  line-height: 1.8;

  a {
    color: ${({theme: {base}}) => base.accent.secondary};
    text-decoration: underline;
    font-weight: ${({theme: {base}}) => base.fontWeight.bold};
  }

  p {
    margin-bottom: 2rem;
    font-size: ${({ theme: { base } }) => base.fontSize.m};
  }

  h2 {
    margin-top: 5rem;
    margin-bottom: 2rem;
    font-size: ${({ theme: { base } }) => base.fontSize.postBigHeading} !important;
  }

  h3,
  h4,
  h5,
  h6 {
    margin: 2rem 0;
    font-size: ${({ theme: { base } }) => base.fontSize.ml};
  }

  ul,
  ol {
    margin-bottom: 2rem;
    margin-left: 4rem;
    font-size: ${({ theme: { base } }) => base.fontSize.m};
  }

  blockquote {
    margin: 5rem 0;
    padding: 2rem;
    font-style: italic;
    background: ${({ theme: { color } }) => color.secondary};
    border-radius: 0.5rem;

    p {
      margin-bottom: 0;
    }
  }

  /* p span is outer box of all images in MDX */
  p span {
    margin: 5rem 0;
    border-radius: 0.5rem;

    img {
      border-radius: 0.5rem;
    }
  }

  pre {
    position: relative;
    margin: 5rem 0;
    line-height: 1;
    padding: 2rem;
    width: 70rem;
    border-radius: 0.5rem;
    font-size: 15px;
    overflow-x: scroll !important;

    ::-webkit-scrollbar {
      width: 1.5rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme: { color } }) => color.contentFaded};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme: { base } }) => base.accent.secondary};
    }

    ${({theme: {base}}) => base.mq.bigTablet} {
      width: 88vw;
    }
  }

  pre[class*='language-']::before {
    width: fit-content;
    border-radius: 0 0 0.25rem 0.25rem;
    font-size: 12px;
    letter-spacing: 0.025rem;
    padding: 0.1rem 0.5rem;
    position: absolute;
    left: 1rem;
    text-align: left;
    text-transform: uppercase;
    top: 0;
  }

  pre[class*='language-javascript']::before {
    content: 'js';
    background: #f7df1e;
    color: black;
  }

  pre[class*='language-node']::before {
    content: 'node';
    background: #8bbf3d;
    color: black;
  }

  pre[class*='language-scss']::before {
    content: 'scss';
    background: #c96195;
    color: black;
  }

  pre[class*='language-css']::before {
    content: 'css';
    background: #2aa3d9;
    color: white;
  }

  pre[class*='language-html']::before {
    content: 'html';
    background: #e96228;
    color: black;
  }

  pre[class*='language-gatsby']::before {
    content: 'gatsby';
    background: #663399;
    color: white;
  }

  pre[class*='language-shell']::before {
    content: 'shell';
    background: #efefef;
    color: black;
  }
`;

const MdxRenderer = ({ children }) => {
  return (
    <StyledArticle>
      <MDXProvider components={components}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </StyledArticle>
  );
};
export default MdxRenderer;
