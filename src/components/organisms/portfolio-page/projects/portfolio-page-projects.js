import React from 'react';
import styled from 'styled-components';

import { useIcon } from 'hooks/useIcon';
import { useImg } from 'hooks/useImg';

import Project from 'components/modules/project/project';

const Wrapper = styled.section``;

const PortfolioPageProjects = () => {
  const { gatsbyIcon, graphqlIcon, netlifyIcon, gsapIcon, reactIcon, firebaseIcon } = useIcon();
  const { knsBigScreen, knsTablet, knsMobile, invoicingAppBigScreen, invoicingAppTablet, invoicingAppMobile } = useImg();
  return (
    <Wrapper>
      <Project
        title='Koncepcja na Sukces'
        technologies={[gatsbyIcon, graphqlIcon, netlifyIcon, gsapIcon]}
        bigScreen={knsBigScreen}
        tabletDevice={knsTablet}
        mobileDevice={knsMobile}
        projectLink='https://koncepcjanasukces.pl/'
      >
        This project was my <b>first</b> commercial webpage created without any page builder. It was coded for local influencer, online buissines and marketing specialist ending
        with passionate weight sports coach. Author can add some posts to the page using NetlifyCMS.
      </Project>

      <Project
        side='left'
        title='Accounting app'
        technologies={[reactIcon, firebaseIcon, netlifyIcon, gsapIcon]}
        bigScreen={invoicingAppBigScreen}
        tabletDevice={invoicingAppTablet}
        mobileDevice={invoicingAppMobile}
        codeLink='https://github.com/skowyrnyMG/'
      >
        This app will help you to issue invoices on your clients, keep truck on payment process and also to hold your client database in one place. Adding new client will be fully
        automated to avoid any mistakes or spelling issues on invoices. As a no backend person (yet) i will use Firebase as my database. For serverside needs I will do everything
        in Netlify Cloud Functions. Obviously whole front of the app will be based on React enviroment. If you are interested to see my progress regarding this project please do
        subscribe to my newsletter!
      </Project>
    </Wrapper>
  );
};

export default PortfolioPageProjects;
