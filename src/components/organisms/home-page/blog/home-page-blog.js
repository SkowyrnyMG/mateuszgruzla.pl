import React from 'react';
import styled from 'styled-components';

import { routes } from 'utils/routes';

import Post from 'components/modules/post/post';
import BigButton from 'components/atoms/big-button';

const Wrapper = styled.div`
  display: grid;
  margin-bottom: 12rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  width: 100%;
  justify-items: center;
`;

const StyledBigButton = styled(BigButton)`
  margin-top: 10rem;
`;

const HomePageBlog = () => (
  <Wrapper>
    <Post
      title='First test post'
      excerpt='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium temporibus explicabo commodi suscipit deleniti molestiae error nobis eligendi voluptatum magni.'
      tags={['JavaScript']}
    />
    <Post
      title='Second test post'
      excerpt='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium temporibus explicabo commodi suscipit deleniti molestiae error nobis eligendiror nobis eligendi voluptatum magni.'
      tags={['JavaScript', 'React']}
    />
    <Post title='Third test post' excerpt='Lorem ipsum dolor sit amet consectetur adtatum magni.' tags={['Gatsby', 'DatoCms']} />
    <Post
      title='Fourth test post'
      excerpt='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium temporibus explicabo commodi suscipit deleniti molestiae error atum magni.'
      tags={['JavaScript']}
    />

    <StyledBigButton path={routes.blog} btnColor={({ theme: { base } }) => base.accent.secondary}>
      GO TO BLOG PAGE
    </StyledBigButton>
  </Wrapper>
);

export default HomePageBlog;
