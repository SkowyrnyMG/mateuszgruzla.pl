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
        projectLink='https://koncepcjanasukces.info/'
      >
        This project was my <b>first</b> commercial webpage created without any page builder (WordPress etc.). It was coded for the local influencer, online business, and marketing
        specialist. On his website, you can find many opportunities to invest your money or even get into better shape with his lifting advice. The author can add new posts through
        the Netlify CMS - I&apos;ve created a user-friendly post template which will allow rendering almost any piece of content starting with images, through quotes, ending on
        youtube videos.
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
        This app will help you to issue invoices on your clients, keep eye on the payment process, and also hold your client database in one place. Adding a new client will be
        fully automated to avoid any mistakes or spelling issues on invoices. As a no backend person (yet) I will use Firebase as my database. For serverside needs, I will do
        everything in Netlify Cloud Functions. The whole front of the app will be based on the React environment. If you are interested to see my progress regarding this project
        please do subscribe to my newsletter!
      </Project>
    </Wrapper>
  );
};

export default PortfolioPageProjects;
