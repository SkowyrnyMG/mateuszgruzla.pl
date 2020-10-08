import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { routes } from 'utils/routes';

import LogoSvg from 'components/atoms/logo-svg';
import Button from 'components/atoms/button';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100rem; */
  flex-direction: column;
  margin-bottom: 12.5rem;
`;

const StyledHeading = styled.h3`
  font-size: ${({ theme: { base } }) => base.fontSize.xl};
  margin-bottom: 6rem;
  transition: none;
`;

const ParagraphWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80rem;

  ${({ theme: { base } }) => base.mq.bigTablet} {
    width: 90%;
  }
  ${({ theme: { base } }) => base.mq.bigPhone} {
    flex-direction: column;
  }
`;

const StyledParagraph = styled.p`
  margin-top: 0;
  margin-bottom: 7rem;
  padding-right: 2rem;
  flex-basis: 48%;
  &:first-child {
    border-right: 1px solid ${({ theme: { color } }) => color.content.faded};
  }

  ${({ theme: { base } }) => base.mq.bigPhone} {
    border: none !important;
    text-align: justify;
  }
`;

const HomePageAbout = () => {
  const animationWrapper = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animWrap = animationWrapper.current;

    gsap.set([...animWrap.children], { autoAlpha: 1 });

    gsap.from([...animWrap.children], {
      scrollTrigger: {
        trigger: animWrap,
        start: '10% 80%',
        end: '90% 20%',
        toggleActions: 'play reverse play reverse',
      },
      duration: 0.75,
      y: '+=100',
      autoAlpha: 0,
      stagger: 0.25,
      ease: 'power4out',
    });
  });
  return (
    <Wrapper ref={animationWrapper}>
      <LogoSvg />
      <StyledHeading>I’m Mateusz Gruźla.</StyledHeading>
      <ParagraphWrapper>
        <StyledParagraph>
          The future senior developer... like I’ve mentioned above “Developer with passion and dreams” with strong accent on dreams.. Anyhow, born in 1993 and living in a small
          city in Poland called Bielawa, placed 70 kms from Wroclaw.
        </StyledParagraph>
        <StyledParagraph>
          Since June 2019 after I wrote my first lines of CSS I immediately fell in love with code and right now I spend amlost all of my free time after work on coding with short
          brakes to play with my dog or spend some time with my lovely fiance.
        </StyledParagraph>
      </ParagraphWrapper>
      <Button btnType='inner' path={routes.about} btncolor={({ theme }) => theme.base.accent.primary}>
        FULL STORY
      </Button>
    </Wrapper>
  );
};

export default HomePageAbout;
