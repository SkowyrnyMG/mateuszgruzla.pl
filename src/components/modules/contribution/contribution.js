import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7.5rem;
  padding: 2rem 3rem;
  font-size: ${({ theme: { base } }) => base.fontSize.m};
  background: ${({ theme: { color } }) => color.menu};
  border-radius: 0.5rem;

  ${({ theme: { base } }) => base.mq.bigTablet} {
    flex-direction: column;
  }
`;

const StyledImg = styled(Img)`
  flex-basis: 60%;
  margin-right: 5rem;
  ${({ theme: { base } }) => base.mq.bigTablet} {
    width: 40%;
  }
`;

const Contribution = ({ children, companyLogo, link }) => {
  const animationWrapper = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animationContainer = animationWrapper.current;

    gsap.set(animationContainer, { autoAlpha: 0, transform: 'translateX(-50px)' });

    gsap.to(animationContainer, {
      scrollTrigger: {
        trigger: animationContainer,
        start: '20% 80%',
        end: '80% 20%',
        toggleActions: 'play reverse play reverse',
      },
      duration: 0.75,
      autoAlpha: 1,
      transform: 'translateX(0)',
      ease: 'power2',
    });
  });

  return (
    <Wrapper href={link} target='_blank' rel='noreferrer' ref={animationWrapper}>
      <StyledImg fluid={companyLogo} />
      <p>{children}</p>
    </Wrapper>
  );
};

Contribution.propTypes = {
  companyLogo: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]).isRequired,
  link: PropTypes.string.isRequired,
};

export default Contribution;
