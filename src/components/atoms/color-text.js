import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.span`
  color: ${({ colorText }) => colorText};
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
`;

const ColorText = ({ children, colorText }) => <StyledText colorText={colorText}>{children}</StyledText>;

ColorText.defaultProps = {
  colorText: ({ theme: { base } }) => base.accent.primary,
};

ColorText.propTypes = {
  colorText: PropTypes.func,
};

export default ColorText;
