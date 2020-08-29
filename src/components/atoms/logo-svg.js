import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from 'context/theme-context';

import LogoIcon from 'assets/svg/logo-icon.svg';

const StyledLogoIcon = styled(LogoIcon)`
  height: ${({ height }) => height};
  * {
    fill: ${({ theme, isDarkTheme }) => (isDarkTheme ? theme.base.accent.primary : theme.color.header)};
  }
`;

const LogoSvg = ({ height }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return <StyledLogoIcon height={height} isDarkTheme={isDarkTheme} />;
};

LogoSvg.defaultProps = {
  height: '15rem',
};

LogoSvg.propTypes = {
  height: PropTypes.string,
};

export default LogoSvg;
