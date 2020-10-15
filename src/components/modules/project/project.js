import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TechList from 'components/modules/tech-list/tech-list';
import Button from 'components/atoms/button';

import DevicesDisplays from 'components/modules/project/devices-displays';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 8rem 0 10rem;
  width: 100%;

  &:last-child {
    margin-bottom: 7em;
  }

  h3,
  h4 {
    margin-bottom: 1.5em;
  }

  > * {
    margin-top: 0;
    transform: translateY(100px);
  }

  ${({ theme: { base } }) => base.mq.bigTablet} {
    flex-direction: column;
  }
`;

const Content = styled.div.attrs(() => ({
  className: 'content-container',
}))`
  flex-basis: 50%;
  order: ${({ side }) => (side === 'left' ? 1 : 0)};

  ${({ theme: { base } }) => base.mq.bigTablet} {
    flex-basis: 100%;
    margin: 5em 0;
    order: 2;
  }
`;

const ButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > * {
    margin-top: 0;
  }
`;

const Project = ({ children, title, technologies, side, bigScreen, tabletDevice, mobileDevice, projectLink, codeLink }) => {
  const animationWrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animationContainer = animationWrapper.current;
    gsap.set([...animationContainer.children], { autoAlpha: 0, ease: 'power4out' });
    gsap.to([...animationContainer.children], {
      scrollTrigger: {
        trigger: animationContainer,
        start: '20% 80%',
        end: 'bottom 10%',
        toggleActions: 'play reverse play reverse',
      },
      duration: 0.75,
      transform: 'translateY(0)',
      autoAlpha: 1,
      stagger: 0.25,
      ease: 'power2',
    });
  });

  return (
    <Wrapper ref={animationWrapper}>
      <Content side={side}>
        <h3>{title}</h3>
        <p>{children}</p>
        <h4>Stack</h4>
        <TechList technologies={technologies} />
        <ButtonWrapper>
          {projectLink && (
            <Button btnType='outer' btncolor={({ theme: { base } }) => (side === 'left' ? base.accent.secondary : base.accent.primary)} path={projectLink}>
              VIEW PROJECT
            </Button>
          )}
          {codeLink && (
            <Button btnType='outer' btncolor={({ theme: { base } }) => (side === 'left' ? base.accent.primary : base.accent.secondary)} path={codeLink}>
              CODE
            </Button>
          )}
        </ButtonWrapper>
      </Content>
      <DevicesDisplays side={side} bigScreen={bigScreen} tabletDevice={tabletDevice} mobileDevice={mobileDevice} />
    </Wrapper>
  );
};

Project.defaultProps = {
  title: 'Latest project!',
  side: 'right',
  projectLink: '',
  codeLink: '',
};

Project.propTypes = {
  title: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
  side: PropTypes.string,
  projectLink: PropTypes.string,
  codeLink: PropTypes.string,
  bigScreen: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]).isRequired,
  tabletDevice: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]).isRequired,
  mobileDevice: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]).isRequired,
};

export default Project;
