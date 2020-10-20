import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Cookies from 'js-cookie';

import { routes } from 'utils/routes';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: ${({ theme: { base } }) => base.fontSize.s} !important;
  background: ${({ theme: { color } }) => color.menu};
  z-index: 99999;
  transform: ${({ cookieAccept }) => (cookieAccept ? 'translateY(100%)' : 'translateY(0)')};
  transition: transform 1s;

  p,
  a {
    font-size: inherit;
  }
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
  const [cookieAccept, setCookieAccept] = useState(false);
  const handleConfirm = () => {
    setCookieAccept(true);
    Cookies.set('cookie-agree', true, { expires: 365 });
  };

  useEffect(() => {
    const userCookie = Cookies.get('cookie-agree');
    setCookieAccept(userCookie);
  }, []);

  return (
    <Wrapper cookieAccept={cookieAccept}>
      <p>
        On this website I use <b>cookies</b> to enable you as a visitor to adapt the appearance of the website.&nbsp;
        <StyledLink to={routes.privacyPolicy}>More info here..</StyledLink>
      </p>
      <CloseButton onClick={handleConfirm}>OK</CloseButton>
    </Wrapper>
  );
};

export default CookiesBar;
