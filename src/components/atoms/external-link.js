import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin-top: 0;
  display: flex;

  > *:nth-child(2) {
    margin-left: 1rem;
  }
`;

const ExternalLink = ({ children, link }) => (
  <StyledLink href={link} rel='noreferrer' target='_blank'>
    {children}
  </StyledLink>
);

ExternalLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ExternalLink;
