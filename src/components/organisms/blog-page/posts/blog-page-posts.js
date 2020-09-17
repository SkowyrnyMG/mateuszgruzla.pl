import React from 'react';
import styled from 'styled-components';

import Post from 'components/modules/post/post';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 7.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 5rem;

  > *:nth-child(4n + 1) {
    grid-column: 1 / -1;
  }
`;

const BlogPagePosts = ({ posts }) => (
  <Wrapper>
    {posts.map((post) => {
      const { node } = post;
      return <Post title={node.frontmatter.title} excerpt={node.frontmatter.description} key={node.id} />;
    })}
  </Wrapper>
);

export default BlogPagePosts;
