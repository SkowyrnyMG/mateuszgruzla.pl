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
        This project was my <b>first</b> commercial webpage created without any page builder. It was coded for local influencer, online buissines and marketing specialist ending
        with passionate weight sports coach. Author can add some posts to the page using NetlifyCMS.
      </Project>
      <BigButton path={routes.portfolio} btnColor={({ theme }) => theme.base.accent.primary}>
        SHOW ALL PROJECTS
      </BigButton>
    </Wrapper>
  );
};

export default HomePageProjects;
