import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 12rem;
  width: 100%;
  z-index: 10;
  grid-column: 1 / -1 !important;

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0%;
    right: 0%;
    border-bottom: 1px solid ${({ theme: { color } }) => color.content};
    transform: scaleX(1);
    z-index: -1;
  }
`;

const StyledHeading = styled.h2`
  text-align: left;
  margin: 0 calc((100% - 1180px) / 2) -5.4rem;
  line-height: 1.2;
`;

const Highlight = styled.span`
  color: ${({ highlightColor }) => highlightColor};
`;

const AnimationWrapper = styled.span`
  overflow: hidden;
  display: inline-block;

  > span {
    display: inline-block;
    transform: translateY(100%);
  }
`;

const Devider = ({ highlightEnd, highlightColor, title }) => {
  const titleArr = title.split('');
  const titleOutput = titleArr.reduce((acc, current, index) => {
    const key = current + index;
    acc.push(
      index < Number(highlightEnd) ? (
        <Highlight key={key} highlightColor={highlightColor}>
          {current}
        </Highlight>
      ) : (
        <span key={key}>{current}</span>
      ),
    );
    return acc;
  }, []);

  const animationWrapper = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animationWrapperContainer = animationWrapper.current;
    const animationTarget = animationWrapperContainer.querySelector('.devider-animation-target');

    gsap.to(animationTarget, {
      scrollTrigger: {
        trigger: animationWrapperContainer,
        start: '10% 85%',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
      },
      duration: 1,
      transform: 'translateY(0)',
      ease: 'power4.out',
    });
  });
  return (
    <Wrapper>
      <StyledHeading highlightColor={highlightColor}>
        <AnimationWrapper ref={animationWrapper}>
          <span className='devider-animation-target'>{titleOutput.map((eachLetter) => eachLetter)}</span>
        </AnimationWrapper>
      </StyledHeading>
    </Wrapper>
  );
};

export default Devider;
