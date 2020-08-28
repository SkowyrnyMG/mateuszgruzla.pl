import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { routes } from 'utils/routes';

import NavHeading from 'components/atoms/nav-heading';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: ${({ isFooter }) => (isFooter ? '1fr' : 'repeat(2, 1fr)')};
  grid-row-gap: 2.5rem;
  grid-column-gap: 4rem;
  justify-items: center;
  align-items: center;
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
          <Link to={home}>Home</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to={about}>About</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to={portfolio}>Portfolio</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to={blog}>Blog</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to={contact}>Contact</Link>
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
