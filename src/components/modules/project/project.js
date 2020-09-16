import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const ButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > * {
    margin-top: 0;
  }
`;

const Project = ({ title, children, technologies, side, bigScreen, tabletDevice, mobileDevice, projectLink, codeLink }) => (
  <Wrapper>
    <Content side={side}>
      <h3>{title}</h3>
      <p>{children}</p>
      <h4>Stack</h4>
      <TechList technologies={technologies} />
      <ButtonWrapper>
        {projectLink && (
          <Button btnType='outer' btncolor={({ theme: { base } }) => (side === 'left' ? base.accent.secondary : base.accent.primary)} path={projectLink}>
            VIEW PROJECT
          </Button>
        )}
        {codeLink && (
          <Button btnType='outer' btncolor={({ theme: { base } }) => (side === 'left' ? base.accent.primary : base.accent.secondary)} path={codeLink}>
            CODE
          </Button>
        )}
      </ButtonWrapper>
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
