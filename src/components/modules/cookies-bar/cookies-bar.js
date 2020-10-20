import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import gsap from 'gsap';

import { routes } from 'utils/routes';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  font-size: ${({ theme: { base } }) => base.fontSize.s} !important;
  background: ${({ theme: { color } }) => color.menu};
  transform: translateY(100%);
  p,
  a {
    font-size: inherit;
  }

  z-index: 99999;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const CloseButton = styled.button`
  margin-top: 0;
  margin-left: 1em;
  padding: 2px 8px;
  background: none;
  border: 1px solid currentColor;
  border-radius: 5px;
  color: inherit;
  font-size: inherit;
  cursor: pointer;

  ${({ theme: { base } }) => base.mq.bigTablet} {
    flex-basis: 20%;
  }
`;

const CookiesBar = () => {
  const animationWrapper = useRef(null);
  const [cookieAccept, setCookieAccept] = useState('true');

  useEffect(() => {
    const animationContainer = animationWrapper.current;
    const confirmButton = animationContainer.querySelector('button');

    const userCookie = Cookies.get('cookie-agree');
    setCookieAccept(userCookie);

    const handleConfirm = () => {
      Cookies.set('cookie-agree', 'true', { expires: 365 });
      setCookieAccept('true');
    };

    confirmButton.addEventListener('click', handleConfirm);

    const finalPosition = cookieAccept === 'true' ? '100%' : 0;
    const animationDelay = cookieAccept === 'true' ? 0 : 3;
    gsap.to(animationContainer, { duration: 2, delay: animationDelay, y: finalPosition });

    return () => confirmButton.removeEventListener('click', handleConfirm);
  }, [cookieAccept, setCookieAccept]);

  return (
    <Wrapper ref={animationWrapper}>
      <p>
        On this website I use <b>cookies</b> to enable you as a visitor to adapt the appearance of the website.&nbsp;
        <StyledLink to={routes.privacyPolicy}>More info here..</StyledLink>
      </p>
      <CloseButton>OK</CloseButton>
    </Wrapper>
  );
};

export default CookiesBar;
