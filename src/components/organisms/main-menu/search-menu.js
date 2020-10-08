import React from 'react';
import styled from 'styled-components';
import SearchComponent from 'components/organisms/algolia-search/search-component/search-component';

import Button from 'components/atoms/button';

const algoliaIndices = [{ name: 'blog' }];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: fixed;
  padding: 5rem;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme: { color } }) => color.fadedBg};
  opacity: ${({ isSearchOpen }) => (isSearchOpen ? 1 : 0)};
  visibility: ${({ isSearchOpen }) => (isSearchOpen ? 'visible' : 'hidden')};
  transform: ${({ isSearchOpen }) => (isSearchOpen ? 'translateY(0)' : 'translateY(-100%)')};
  transition: all 0.75s;
  pointer-events: ${({ isSearchOpen }) => (isSearchOpen ? 'auto' : 'none')};
  z-index: 9999;
`;

const SearchArea = styled.div`
  width: 60%;

  ${({ theme: { base } }) => base.mq.smallTablet} {
    width: 90%;
  }
`;

const SearchMenu = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <Wrapper isSearchOpen={isSearchOpen}>
      <SearchArea>
        <SearchComponent indices={algoliaIndices} />
        <Button btncolor={({ theme: { base } }) => base.accent.tertiary} btnType='button' handleClick={setIsSearchOpen}>
          Close
        </Button>
      </SearchArea>
    </Wrapper>
  );
};

export default SearchMenu;
