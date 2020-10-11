import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Wrapper = styled.div`
  font-size: ${({ theme: { base } }) => base.fontSize.m};

  grid-column: ${({ fullWidth }) => (fullWidth ? '1 / -1' : 'auto')};

  * {
    transition: all 0s !important;
  }
`;

const StyledContentHeading = styled.h3`
  margin-bottom: 3rem;
`;

const Content = ({ title, children, fullWidth }) => {
  const animationWrapper = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animationContainer = animationWrapper.current;

    gsap.set([...animationContainer.children], { autoAlpha: 0, transform: 'translateY(100px)' });

    gsap.to([...animationContainer.children], {
      scrollTrigger: {
        trigger: animationContainer,
        start: '10% 90%',
        end: '90% 20%',
        toggleActions: 'play reverse play reverse',
      },
      duration: 0.75,
      transform: 'translateY(0)',
      autoAlpha: 1,
      stagger: 0.25,
    });
  });
  return (
    <Wrapper ref={animationWrapper} fullWidth={fullWidth}>
      <StyledContentHeading>{title}</StyledContentHeading>
      <p>{children}</p>
    </Wrapper>
  );
};

export default Content;
