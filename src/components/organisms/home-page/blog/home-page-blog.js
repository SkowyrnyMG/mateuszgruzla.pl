import React from 'react';
import styled from 'styled-components';

import { routes } from 'utils/routes';
import { useLastPosts } from 'hooks/useLastPosts';

import Post from 'components/modules/post/post';
import BigButton from 'components/atoms/big-button';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 12rem;
`;

const StyledHeading = styled.h3`
  margin-bottom: 5rem;
`;

const PostWrapper = styled.div`
  display: grid;
  margin-bottom: 12rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  width: 100%;
  justify-items: center;
`;

const StyledBigButton = styled(BigButton)`
  margin: 12rem 0;
`;

const HomePageBlog = () => {
  const lastPosts = useLastPosts();
  return (
    <Wrapper>
      <StyledHeading>Latest posts</StyledHeading>
      <PostWrapper>
        {lastPosts ? (
          lastPosts.map(({ node: { id, slug, frontmatter: { title, description, image, tags, date } } }) => (
            <Post postImg={image} title={title} excerpt={description} tags={tags} key={id} slug={slug} publishDate={date} />
          ))
        ) : (
          <span>Sorry, there&lsquo;s nothing here yet!</span>
        )}
      </PostWrapper>
      <StyledBigButton path={routes.blog} btnColor={({ theme: { base } }) => base.accent.secondary}>
        GO TO BLOG PAGE
      </StyledBigButton>
    </Wrapper>
  );
};

export default HomePageBlog;
