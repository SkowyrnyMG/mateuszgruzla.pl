import React from 'react';
import styled from 'styled-components';

import { useIcon } from 'hooks/useIcon';
import { useImg } from 'hooks/useImg';
import { routes } from 'utils/routes';

import Project from 'components/modules/project/project';
import BigButton from 'components/atoms/big-button';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 12rem;
  width: 100%;
`;

const HomePageProjects = () => {
  const { reactIcon, firebaseIcon, netlifyIcon, gsapIcon } = useIcon();
  const { invoicingAppBigScreen, invoicingAppTablet, invoicingAppMobile } = useImg();
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
      <BigButton path={routes.portfolio} btnColor={({ theme }) => theme.base.accent.primary}>
        SHOW ALL PROJECTS
      </BigButton>
    </Wrapper>
  );
};

export default HomePageProjects;
