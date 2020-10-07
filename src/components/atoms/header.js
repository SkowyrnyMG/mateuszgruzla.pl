import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 58rem;

  & * {
    margin-top: 0;
  }

  ${({ theme: { base } }) => base.mq.smallTablet} {
    flex-direction: column;
  }
`;

const Header = ({ children }) => {
  const wrapper = useRef(null);

  useEffect(() => {
    const headerContainer = wrapper.current;
    const heading = headerContainer.querySelector('h1');
    gsap.set(heading, { autoAlpha: 0 });
    gsap.to(heading, { duration: 0.6, delay: 0.2, autoAlpha: 1, ease: 'power4out' });
  });
  return <StyledHeader ref={wrapper}>{children}</StyledHeader>;
};

export default Header;
