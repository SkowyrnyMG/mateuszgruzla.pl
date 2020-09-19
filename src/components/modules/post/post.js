import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { useImg } from 'hooks/useImg';

const StyledLink = styled(Link)`
  margin-top: 0;
  display: grid;
  grid-template-rows: minmax(20rem, 30rem) minmax(3.5rem, min-content) minmax(7.5rem, min-content) 3rem 1rem;
  grid-gap: 2rem;
  width: 100%;
  min-height: 54rem;
  font-size: ${({ theme: { base } }) => base.fontSize.m};
  background: ${({ theme: { color } }) => color.secondary};
  border-radius: 5px;
  box-shadow: ${({ theme: { base } }) => base.shadow.darkSmall};
  overflow: hidden;

  * {
    margin-top: 0;
  }
`;

const StyledImg = styled(Img)``;

const StyledHeading = styled.h3`
  margin: 0 3.5rem;
`;

const Excerpt = styled.div`
  margin: 0 3.5rem;
`;

const TagBox = styled.div`
  margin: 0 3.5rem;
`;

const Tag = styled.span`
  padding: 0.2rem 1rem;
  color: ${({ theme: { color } }) => color.bg};
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
  background-color: ${({ theme: { base } }) => base.accent.primary};
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Post = ({ postImg, title, excerpt, tags, slug }) => {
  const { defaultImg } = useImg();
  return (
    <StyledLink to={`/blog/${slug}`}>
      {/* img */}
      {/* <StyledImg fluid={postImg ? postImg : defaultImg} /> */}
      <StyledImg fluid={defaultImg} />
      <StyledHeading>{title}</StyledHeading>
      <Excerpt>{excerpt}</Excerpt>
      {/* <TagBox>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagBox> */}
    </StyledLink>
  );
};

export default Post;
