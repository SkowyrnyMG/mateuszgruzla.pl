import React from 'react';
import styled from 'styled-components';

import Button from 'components/atoms/button';

const Wrapper = styled.div`
  margin: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  pointer-events: auto;
`;

const SearchMenu = ({ isSearchOpen, setIsSearchOpen }) => (
  <>
    {isSearchOpen === true && (
      <Wrapper>
        <h3>he serach menu works</h3>
        <Button btncolor={({ theme: { base } }) => base.accent.tertiary} btnType='button' handleClick={setIsSearchOpen}>
          Close
        </Button>
      </Wrapper>
    )}
  </>
);

export default SearchMenu;
