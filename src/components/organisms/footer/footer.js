import React from 'react';
import styled from 'styled-components';

import { routes } from 'utils/routes';

import GridView from 'utils/grid-view';
import NavList from 'components/modules/nav-list/nav-list';
import SocialList from 'components/modules/social-list/social-list';
import SubscribeForm from 'components/modules/subscirbe-form/subscribe-form';
import InnerLink from 'components/atoms/inner-link';

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 62rem;
  padding-bottom: 3rem;

  ${({ theme: { base } }) => base.mq.bigTablet} {
    h4 {
      font-size: 18px !important;
    }
  }
`;

const FooterContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  margin: 8rem 0;

  ${({ theme: { base } }) => base.mq.tablet} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-row-gap: 3em;
  }
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <GridView>
      <FooterContentWrapper>
        <NavList isFooter />
        <SocialList />
        <SubscribeForm />
      </FooterContentWrapper>
      <InfoBox>
        <p>Coded by Mateusz Gruźla</p>
        <InnerLink to={routes.privacyPolicy}>Privacy policy</InnerLink>
        <a href='https://github.com/SkowyrnyMG/mateuszgruzla.pl' target='_blank' rel='noreferrer'>
          &lt;&gt; Check code &lt;&#47;&gt;
        </a>
      </InfoBox>
    </GridView>
  </StyledFooter>
);

export default Footer;
