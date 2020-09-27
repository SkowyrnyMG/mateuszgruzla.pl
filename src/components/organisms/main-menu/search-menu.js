import React from 'react';
import styled from 'styled-components';
import SearchComponent from 'components/organisms/algolia-search/search-component/search-component';

import Button from 'components/atoms/button';

const algoliaIndices = [{ name: 'blog' }];

const Wrapper = styled.div`
  margin: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${({ theme: { color } }) => color.fadedBg};
  z-index: 9999;
  pointer-events: auto;
`;

const SearchMenu = ({ isSearchOpen, setIsSearchOpen }) => (
  <>
    {isSearchOpen === true && (
      <Wrapper>
        <h3>he serach menu works</h3>
        <SearchComponent indices={algoliaIndices} />
        <Button btncolor={({ theme: { base } }) => base.accent.tertiary} btnType='button' handleClick={setIsSearchOpen}>
          Close
        </Button>
      </Wrapper>
    )}
  </>
);

export default SearchMenu;
