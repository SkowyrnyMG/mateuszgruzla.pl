import React from 'react';
import styled from 'styled-components';

import GridView from 'utils/grid-view';
import NavList from 'components/modules/nav-list/nav-list';
import SocialList from 'components/modules/social-list/social-list';
import SubscribeForm from 'components/modules/subscirbe-form/subscribe-form';

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 62rem;
`;

const FooterContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  margin: 8rem 0;
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
        <p>Privacy policy</p>
      </InfoBox>
    </GridView>
  </StyledFooter>
);

export default Footer;
