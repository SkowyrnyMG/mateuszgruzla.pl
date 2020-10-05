import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useIcon } from 'hooks/useIcon';

import Skillbox from 'components/organisms/home-page/technology/skillbox';
import OtherTechCarousel from 'components/organisms/home-page/technology/other-tech-carousel';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 30rem;
  margin-bottom: 12.5rem;
  margin-top: -10rem;
`;

const StyledHeading = styled.h2`
  margin-top: 7rem;
`;

const pathAppear = (trigger, animTarget, duration, delay, direction = 'to bottom') => {
  gsap.fromTo(
    animTarget,
    {
      backgroundImage: `linear-gradient(${direction}, transparent 100%, #B2BECD 100%)`,
    },
    {
      backgroundImage: `linear-gradient(${direction}, transparent 0%, #B2BECD 0%)`,
      duration,
      delay,
      ease: 'power4',
      scrollTrigger: {
        trigger,
        start: 'top 70%',
      },
    },
  );
};

const boxAppear = (trigger, animTarget, duration, delay) => {
  gsap.from(animTarget, {
    autoAlpha: 0,
    rotate: '45',
    duration,
    ease: 'power2',
    delay,
    scrollTrigger: {
      trigger,
      start: 'top 70%',
    },
  });
};

const skillAppear = (trigger, animTarget, duration, delay) => {
  gsap.from(animTarget, {
    autoAlpha: 0,
    duration,
    delay,
    ease: 'power2',
    scrollTrigger: {
      trigger,
      start: 'top 70%',
      end: 'bottom 30%',
    },
  });
};

const HomePageTechnology = () => {
  const { gsapIcon, gatsbyIcon, javascriptIcon, jestIcon, reactIcon } = useIcon();

  const wrapper = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const skillboxWrapper = wrapper.current;
    const skillbox = skillboxWrapper.querySelectorAll('.skillbox');
    const pathLine = skillboxWrapper.querySelectorAll('.pathLine');
    const checkpoint = skillboxWrapper.querySelectorAll('.checkpoint');
    const skill = skillboxWrapper.querySelectorAll('.skill');

    skillbox.forEach((wrap, index) => {
      const pathOrder = index === 0 ? 0 : index * 2;
      const elseOrder = index === 0 ? 0 : index;

      boxAppear(skillbox[elseOrder], checkpoint[elseOrder], 0.5, 0.25);
      pathAppear(skillbox[elseOrder], pathLine[pathOrder + 1], 0.5, 0.75);
      pathAppear(skillbox[elseOrder], pathLine[pathOrder], 0.5, 0.75, 'to left');
      skillAppear(skillbox[elseOrder], skill[elseOrder], 0.5, 0.75);
    });
  });
  return (
    <Wrapper ref={wrapper}>
      <Skillbox title='Javascript' techIcon={javascriptIcon}>
        I feel comfortable with ES6+. I can use arrow functions, destructuring, template strings, const + let, array.flat(), modules, etc.
      </Skillbox>
      <Skillbox side='right' title='React' techIcon={reactIcon}>
        CRA, Hooks, Function/Class components, Prop-types, props, handle events and forms, styled-components, module-styles, actions, reducers, global state etc. are no scarry for
        me
      </Skillbox>
      <Skillbox title='Gatsby' techIcon={gatsbyIcon}>
        Generate pages from md files or CMS, implementing vary Gatsby plugins, creating templates, using “magic images”, creating graplql queries, etc.
      </Skillbox>
      <Skillbox side='right' title='Jest' techIcon={jestIcon}>
        I can do simple unit and integration tests
      </Skillbox>
      <Skillbox title='GSAP3' techIcon={gsapIcon}>
        This is my favorite animation library. I can use timelines, scrolltrigers etc. to put some live into my webapps
      </Skillbox>
      <StyledHeading>other tools</StyledHeading>
      <OtherTechCarousel />
    </Wrapper>
  );
};

export default HomePageTechnology;
