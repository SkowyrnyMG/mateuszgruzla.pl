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
        I feel comfortable in writting JavaScript code in ES6+ standards. Arrow functions, destructuring, async/await, let/const, promises, array methods, module imports and many
        more will find their place in my lines of code! I can also use external NPM packages and implement them to the project basing on documentation.
      </Skillbox>
      <Skillbox side='right' title='React' techIcon={reactIcon}>
        CRA, Hooks, Function/Class components, Prop-types, props, handle events, styled-components, css-modules, actions, reducers, global state, context, WEB API, Form validation
        with Formik + Yup and many more are in my toolbox. I can easly create re-usable components with seperated logic. I can handle state of the app through useState, context and
        for bussines logic data with Redux.
      </Skillbox>
      <Skillbox title='Gatsby' techIcon={gatsbyIcon}>
        I can generate pages from MD files or CMS, implementing various Gatsby plugins, creating templates, using “magic images” for best images optimization, creating graplQL
        queries, etc.
      </Skillbox>
      <Skillbox side='right' title='Jest' techIcon={jestIcon}>
        I can do simple unit and integration tests. For React I use Jest together with the React testing library.
      </Skillbox>
      <Skillbox title='GSAP3' techIcon={gsapIcon}>
        It is my favorite animation library. I can use timelines, ScrollTrigers, ScrollTo, etc. to put some life into my web apps. I can implement GSAP into my React and Gatsby
        apps using useRef and useEffect to grab DOM elements and start the animation.
      </Skillbox>
      <StyledHeading>other tools</StyledHeading>
      <OtherTechCarousel />
    </Wrapper>
  );
};

export default HomePageTechnology;
