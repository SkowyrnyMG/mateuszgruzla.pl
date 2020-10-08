import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useImg } from 'hooks/useImg';

const StyledLink = styled(Link)`
  margin-top: 0;
  display: grid;
  grid-template-rows: minmax(20rem, 30rem) minmax(3.5rem, min-content) minmax(7.5rem, min-content) 3rem min-content 1rem;
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

  ${({ theme: { base } }) => base.mq.smallTablet} {
    grid-row-gap: 1.5em;
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
  background-color: ${({ theme: { base } }) => base.accent.secondary};
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  ${({ theme: { base } }) => base.mq.smallTablet} {
    font-size: 15px;
  }
`;

const PublishDate = styled.span`
  margin-left: auto;
  padding-right: 4rem;
`;

const Post = ({ postImg, title, excerpt, tags, slug, publishDate }) => {
  const { defaultImg } = useImg();
  const animationWrapper = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animationContainer = animationWrapper.current;

    gsap.set(animationContainer, { autoAlpha: 0, transform: 'translateY(100px)' });

    gsap.to(animationContainer, {
      scrollTrigger: {
        trigger: animationContainer,
        start: '20% 80%',
        end: '80% 20%',
        toggleActions: 'play reverse play reverse',
      },
      duration: 0.75,
      autoAlpha: 1,
      transform: 'translateY(0)',
      ease: 'power2',
    });
  });
  return (
    <StyledLink to={`/blog/${slug}`} ref={animationWrapper}>
      <StyledImg fluid={postImg ? postImg.childImageSharp.fluid : defaultImg} />
      <StyledHeading>{title}</StyledHeading>
      <Excerpt>{excerpt}</Excerpt>
      <TagBox>{tags ? tags.map((tag) => <Tag key={tag}>{tag}</Tag>) : 'news'}</TagBox>
      <PublishDate>{publishDate}</PublishDate>
    </StyledLink>
  );
};

export default Post;
