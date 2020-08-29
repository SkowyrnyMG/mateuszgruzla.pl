import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { routes } from 'utils/routes';

import InnerLink from 'components/atoms/inner-link';
import NavHeading from 'components/atoms/nav-heading';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: ${({ isFooter }) => (isFooter ? '1fr' : 'repeat(2, 1fr)')};
  grid-row-gap: 2.5rem;
  grid-column-gap: 4rem;
  justify-items: center;
  align-items: center;

  .activeLink {
    font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
    pointer-events: none;
  }
`;

const StyledListItem = styled.li`
  margin: 0;
  list-style: none;
`;

const NavList = ({ isFooter }) => {
  const { home, about, portfolio, blog, contact } = routes;
  return (
    <div>
      <NavHeading>Site Map</NavHeading>
      <StyledList isFooter={isFooter}>
        <StyledListItem>
          <InnerLink to={home} activeClassName='activeLink'>
            Home
          </InnerLink>
        </StyledListItem>
        <StyledListItem>
          <InnerLink to={about} activeClassName='activeLink'>
            About
          </InnerLink>
        </StyledListItem>
        <StyledListItem>
          <InnerLink to={portfolio} activeClassName='activeLink'>
            Portfolio
          </InnerLink>
        </StyledListItem>
        <StyledListItem>
          <InnerLink to={blog} activeClassName='activeLink'>
            Blog
          </InnerLink>
        </StyledListItem>
        <StyledListItem>
          <InnerLink to={contact} activeClassName='activeLink'>
            Contact
          </InnerLink>
        </StyledListItem>
      </StyledList>
    </div>
  );
};

NavList.defaultProps = {
  isFooter: false,
};

NavList.propTypes = {
  isFooter: PropTypes.bool,
};

export default NavList;
