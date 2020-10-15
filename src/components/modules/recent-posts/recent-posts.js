import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { useLastPosts } from 'hooks/useLastPosts';
import { useImg } from 'hooks/useImg';

import ApproveIcon from 'assets/svg/approve-icon.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content;
  grid-auto-rows: minmax(min-content, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  align-items: start;
  justify-items: center;
  border-top: 1px solid ${({ theme: { color } }) => color.contentFaded};

  ${({ theme: { base } }) => base.mq.bigTablet} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
  }
`;

const StyledInfo = styled.span`
  grid-column: 1 / -1;
  justify-self: start;
  display: flex;
  align-items: center;
  margin: 1em 0;
  font-size: ${({ theme: { base } }) => base.fontSize.ms};
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};

  svg {
    margin-right: 0.5em;
    fill: ${({ theme: { base } }) => base.accent.tertiary};
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
`;

const StyledButtonImg = styled(Img)`
  border-radius: 5px;

  * {
    margin-top: 0;
  }
`;

const RecentPosts = () => {
  const { defaultImg } = useImg();
  const lastPosts = useLastPosts();
  return (
    <Wrapper>
      <StyledInfo>
        <ApproveIcon />
        see also
      </StyledInfo>
      {lastPosts ? (
        lastPosts.map(({ node: { id, slug, frontmatter: { title, image } } }) => (
          <NavButton key={id} to={`/blog/${slug}`}>
            <StyledButtonImg fluid={image ? image.childImageSharp.fluid : defaultImg} />
            <p>{title}</p>
          </NavButton>
        ))
      ) : (
        <span>Sorry, there&lsquo;s nothing here yet!</span>
      )}
    </Wrapper>
  );
};

export default RecentPosts;
