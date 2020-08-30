import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from 'context/theme-context';

import LogoIcon from 'assets/svg/logo-icon.svg';

const Wrapper = styled.div`
  svg * {
    fill: ${({ theme, isDarkTheme }) => (isDarkTheme ? theme.base.accent.primary : theme.color.header)};
  }
`;

const StyledLogoIcon = styled(LogoIcon)`
  height: ${({ height }) => height};
`;

const LogoSvg = ({ height }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <Wrapper isDarkTheme={isDarkTheme}>
      <StyledLogoIcon height={height} />
    </Wrapper>
  );
};

LogoSvg.defaultProps = {
  height: '15rem',
};

LogoSvg.propTypes = {
  height: PropTypes.string,
};

export default LogoSvg;
