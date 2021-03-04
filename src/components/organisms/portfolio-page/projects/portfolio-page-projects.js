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
        title='OMS Invoicer.v1'
        technologies={[reactIcon, firebaseIcon, netlifyIcon, gsapIcon]}
        bigScreen={invoicingAppBigScreen}
        tabletDevice={invoicingAppTablet}
        mobileDevice={invoicingAppMobile}
        codeLink='https://github.com/SkowyrnyMG/OMS-Invoicer.v1/'
        projectLink='https://omsinvoicer.netlify.app/'
      >
        This app will help you to issue invoices for your clients, keep an eye on the payment process, and also hold your clients database in one place. Adding a new client is
        fully automated to avoid any mistakes or spelling issues on invoices. As not a backend person (yet) I&apos;ve used Firebase for my database. For serverside needs, I&apos;ve done
        everything with Netlify Cloud Functions. The whole front of the app is based on the React environment. Try it on your own and send me some feedback!
      </Project>

      <Project
        side='left'
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
    </Wrapper>
  );
};

export default PortfolioPageProjects;
