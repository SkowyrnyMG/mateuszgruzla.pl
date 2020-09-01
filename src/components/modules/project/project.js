import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { routes } from 'utils/routes';

import TechList from 'components/modules/tech-list/tech-list';
import Button from 'components/atoms/button';

import DevicesDisplays from 'components/modules/project/devices-displays';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 12rem;
  width: 100%;

  h3,
  h4 {
    margin-bottom: 2rem;
  }

  > * {
    margin-top: 0;
  }
`;

const Content = styled.div`
  flex-basis: 50%;
  order: ${({ side }) => (side === 'left' ? 1 : 0)};
`;

const Project = ({ title, children, technologies, side, bigScreen, tabletDevice, mobileDevice }) => (
  <Wrapper>
    <Content side={side}>
      <h3>{title}</h3>
      <p>{children}</p>
      <h4>Stack</h4>
      <TechList technologies={technologies} />
      <Button isLink='true' path={routes.portfolio}>
        VIEW PROJECTS
      </Button>
    </Content>
    <DevicesDisplays side={side} bigScreen={bigScreen} tabletDevice={tabletDevice} mobileDevice={mobileDevice} />
  </Wrapper>
);

Project.defaultProps = {
  title: 'Latest project!',
  side: 'right',
};

Project.propTypes = {
  title: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
  side: PropTypes.string,
};

export default Project;
