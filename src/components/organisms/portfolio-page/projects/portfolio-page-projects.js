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
        This project was my <b>first</b> commercial webpage created without the use of any page builder (WordPress etc.). It was coded for a local influencer who is a marketing
        specialist with an online business. On his website, you can find opportunities to invest your money and get some lifestyle advice. The author can add new posts through the
        Netlify CMS - I&apos;ve created a user-friendly template for posting which will allow rendering almost any piece of content starting with images, quotes and ending on
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
        This app will help you to issue invoices to your clients, keep an eye on the payment process, and also hold your clients database in one place. Adding a new client will be
        fully automated to avoid any mistakes or spelling issues on invoices. As not a backend person (yet) I will use Firebase for my database. For serverside needs, I will do
        everything with Netlify Cloud Functions. The whole front of the app will be based on the React environment. If you are interested in my progress regarding this project
        please subscribe to my newsletter!
      </Project>
    </Wrapper>
  );
};

export default PortfolioPageProjects;
