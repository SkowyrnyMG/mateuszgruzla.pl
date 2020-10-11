import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

import LeftArrow from 'assets/svg/left-arrow.svg';
import RightArrow from 'assets/svg/right-arrow.svg';

const Wrapper = styled.div`
  bottom: 6rem;
  margin: 10rem auto 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  a {
    padding: 1.5rem 2rem;
    color: ${({ theme: { color } }) => color.content};
    border: 1px dashed ${({ theme: { base } }) => base.accent.primary};
    :focus,
    :active {
      border: 2px dashed ${({ theme: { base } }) => base.accent.primary} !important;
    }

    a:not(:first-child) {
      border-left: none;
    }
  }
`;

const StyledIndexNav = styled.nav`
  border-radius: 5rem;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    fill: ${({ theme: { base } }) => base.accent.primary};
    transform: translate(-50%, -50%);
  }
`;

const PrevButton = styled(Link)`
  position: relative;
  border: none !important;
  /* border-right: 2px dashed ${({ theme: { base } }) => base.accent.primary} !important; */
  pointer-events: ${({ pagenumber }) => (pagenumber === 1 ? `none` : ` auto`)};
  color: ${({ pagenumber, theme }) => (pagenumber === 1 ? `gray` : theme.color.active)};

  ${({ theme: { base } }) => base.mq.bigPhoneBreak} {
    margin-right: .3em;
  }
`;
const NextButton = styled(Link)`
  position: relative;
  border: none !important;
  /* border-left: 2px dashed ${({ theme: { base } }) => base.accent.primary} !important; */
  pointer-events: ${({ pagenumber, numberofpages }) => (pagenumber === numberofpages ? `none` : ` auto`)};
  color: ${({ pagenumber, numberofpages, theme }) => (pagenumber === numberofpages ? `gray` : theme.color.active)};
  ${({ theme: { base } }) => base.mq.bigPhoneBreak} {
    margin-left: .3em;
  }
`;

const CurrentLink = styled(Link)`
  pointer-events: none;
  background-color: ${({ theme: { base } }) => base.accent.primary} !important;
  color: ${({ theme: { color } }) => color.bg} !important;
`;

const BlogPageIndex = ({ pageContext }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext;

  return (
    <Wrapper>
      <StyledIndexNav>
        <PrevButton pagenumber={humanPageNumber} numberofpages={numberOfPages} to={previousPagePath}>
          <LeftArrow />
        </PrevButton>

        {/* Link to current page - 2 */}
        {humanPageNumber - 2 > 0 && <Link to={`/blog/${humanPageNumber - 2 === 1 ? '' : humanPageNumber - 2}`}>{humanPageNumber - 2}</Link>}

        {/* Link to previous page */}
        {humanPageNumber - 1 > 0 && <Link to={previousPagePath}>{humanPageNumber - 1}</Link>}

        {/* Current Page */}
        <CurrentLink to={`/blog/${humanPageNumber}`}>{humanPageNumber}</CurrentLink>

        {/* Link to next page */}
        {humanPageNumber + 1 < numberOfPages + 1 && <Link to={nextPagePath}>{humanPageNumber + 1}</Link>}

        {/* Link to current page + 2 */}
        {humanPageNumber + 2 < numberOfPages && <Link to={`/blog/${humanPageNumber + 2 === numberOfPages ? '' : humanPageNumber + 2}`}>{humanPageNumber + 2}</Link>}

        <NextButton pagenumber={humanPageNumber} numberofpages={numberOfPages} to={nextPagePath}>
          <RightArrow />
        </NextButton>
      </StyledIndexNav>
    </Wrapper>
  );
};

export default BlogPageIndex;
