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
  const { gatsbyIcon, graphqlIcon, netlifyIcon, gsapIcon } = useIcon();
  const { knsBigScreen, knsTablet, knsMobile } = useImg();
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
      <BigButton path={routes.portfolio} btnColor={({ theme }) => theme.base.accent.primary}>
        SHOW ALL PROJECTS
      </BigButton>
    </Wrapper>
  );
};

export default HomePageProjects;
