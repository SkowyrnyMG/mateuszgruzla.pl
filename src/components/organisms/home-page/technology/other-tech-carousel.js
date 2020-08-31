import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import gsap from 'gsap';

import { useIcon } from 'hooks/useIcon';

const Wrapper = styled.div`
  position: relative;
  height: 11rem;
  width: 100%;
  overflow: hidden;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100px, -50%);
  width: 1800px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

const ImgBox = styled.div.attrs(() => ({ className: 'carousel-icon' }))`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 0;
  min-height: 10rem;
  min-width: 10rem;

  * {
    margin-top: 0;
  }
`;

const OtherTechCarousel = () => {
  const { cssIcon, figmaIcon, firebaseIcon, gitIcon, githubIcon, graphqlIcon, htmlIcon, netlifyIcon, sassIcon } = useIcon();
  const iconArr = [htmlIcon, cssIcon, sassIcon, gitIcon, githubIcon, netlifyIcon, figmaIcon, graphqlIcon, firebaseIcon];

  const wrapper = useRef(null);
  useEffect(() => {
    gsap.set('.carousel-icon', { x: (i) => i * 200 });

    gsap.to('.carousel-icon', {
      duration: 20,
      ease: 'none',
      x: '+=1800',
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 1800),
      },
      repeat: -1,
    });
  });

  return (
    <Wrapper>
      <IconContainer ref={wrapper}>
        {iconArr.map((icon) => {
          return (
            <ImgBox key={JSON.stringify(icon)}>
              <Img fluid={icon} />
            </ImgBox>
          );
        })}
      </IconContainer>
    </Wrapper>
  );
};

export default OtherTechCarousel;
