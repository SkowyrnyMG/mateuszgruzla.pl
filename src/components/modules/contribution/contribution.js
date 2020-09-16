import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7.5rem;
  padding: 2rem 3rem;
  background: ${({ theme: { color } }) => color.secondary};
  border-radius: 0.5rem;
`;

const StyledImg = styled(Img)`
  flex-basis: 60%;
  margin-right: 5rem;
`;

const Contribution = ({ companyLogo }) => (
  <Wrapper>
    <StyledImg fluid={companyLogo} />
    <p>
      I’ve contributed to livesession SDK plugin. I’ve figured out how to install and run their package on Angular apps. It is nothing big tho, but everytime when I think about
      this it makes me really proud of myself. <br />
      If you don’t know what livesession is, then you really have to visit their webpage. Their software will help you to keep eye on your client needs and interests.
    </p>
  </Wrapper>
);

export default Contribution;
