import React from 'react';
import styled from 'styled-components';

import FloatingNav from 'components/main-menu/floating-nav';

const Wrapper = styled.div`
  position: fixed;
  right: 1.8rem;
  top: 3rem;
`;

const MainMenu = () => (
  <Wrapper>
    <FloatingNav />
    <nav>
      <ul>{/* <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Content</li> */}</ul>
    </nav>
  </Wrapper>
);

export default MainMenu;
