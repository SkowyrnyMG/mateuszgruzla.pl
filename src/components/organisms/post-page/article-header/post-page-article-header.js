import React from 'react';
import styled from 'styled-components';
import LogoIcon from 'assets/svg/logo-icon.svg';
import Img from 'gatsby-image';

import { useImg } from 'hooks/useImg';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 45rem min-content;
  width: 100%;
  min-height: 60rem;
  background: ${({ theme: { color } }) => color.secondary};
  border-radius: 0 0 0.5rem 0.5rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(min-content, 1fr));
  grid-template-rows: repeat(3, min-content);
  grid-row-gap: 2rem;
  justify-content: start;
  align-items: center;
  padding: 3rem;
  font-size: ${({ theme: { base } }) => base.fontSize.ms};
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
`;

const StyledImg = styled(Img)`
  grid-column: 1 / -1;
  height: 100%;
  margin: 0;
  padding: 0;

  * {
    margin: 0;
    padding: 0;
  }
`;

const StyledDescription = styled.p`
  grid-column: 1 / 4;
  font-size: ${({ theme: { base } }) => base.fontSize.m};
  font-weight: ${({ theme: { base } }) => base.fontWeight.regular};
`;

const TimeToRead = styled.span`
  grid-column: 4 / -1;
  justify-self: end;
  align-self: start;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1 / -1;
`;

const StyledAuthorLogo = styled(LogoIcon)`
  margin-right: 1rem;
  width: 3rem;
  height: 4rem;
`;

const PublishDate = styled.span`
  grid-column: 1 / 3;
`;

const Tags = styled.div`
  grid-column: 3 / -1;
  justify-self: end;
  display: flex;

  > * {
    margin: 0;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

const Tag = styled.span`
  padding: 0.25rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { color } }) => color.bg};
  background: ${({ theme: { base } }) => base.accent.secondary};
  border-radius: 0.5rem;
`;

const PostPageArticleHeader = ({ postImg, description, timeToRead, author, publishDate, tags }) => {
  const { defaultImg } = useImg();

  return (
    // tags needs to be implemented
    <Wrapper>
      <StyledImg fluid={postImg ? postImg.childImageSharp.fluid : defaultImg} />
      <ContentWrapper>
        <StyledDescription>{description}</StyledDescription>
        <TimeToRead>Time to read {timeToRead} min.</TimeToRead>
        <AuthorInfo>
          <StyledAuthorLogo />
          <span>By {author}</span>
        </AuthorInfo>
        <PublishDate>Published {publishDate}</PublishDate>
        <Tags>{tags ? tags.map((tag) => <Tag key={tag}>{tag}</Tag>) : 'news'}</Tags>
      </ContentWrapper>
    </Wrapper>
  );
};

export default PostPageArticleHeader;
