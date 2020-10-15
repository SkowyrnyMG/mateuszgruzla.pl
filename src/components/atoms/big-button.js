import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StyledBtnText = styled.span`
  padding: 2rem 3rem;
  font-size: ${({ theme: { base } }) => base.fontSize.massive};
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
  color: ${({ btnColor }) => btnColor};
  border: 2px solid ${({ btnColor }) => btnColor};
  border-radius: 0.5rem;
  box-shadow: ${({ theme: { base } }) => base.shadow.contrast};
  transition: all 0.25s;

  :hover {
    color: ${({ theme: { color } }) => color.bg};
    background: ${({ btnColor }) => btnColor};
  }
`;

const StyledLink = styled(Link)`
  grid-column: 1 / -1;
  text-align: center;
`;

const BigButton = ({ children, btnColor, path }) => {
  const animationWrapper = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animationContainer = animationWrapper.current;
    const animatedButton = animationContainer.querySelector('span');

    gsap.set(animatedButton, { autoAlpha: 0 });

    gsap.to(animatedButton, {
      scrollTrigger: {
        trigger: animationContainer,
        start: 'top 80%',
        end: 'bottom 10%',
        toggleActions: 'play reverse play reverse',
      },
      duration: 0.5,
      autoAlpha: 1,
    });
  });
  return (
    <StyledLink to={path} ref={animationWrapper}>
      <StyledBtnText btnColor={btnColor}>{children}</StyledBtnText>
    </StyledLink>
  );
};

BigButton.propTypes = {
  btnColor: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default BigButton;
