import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7.5rem;
  padding: 2rem 3rem;
  font-size: ${({ theme: { base } }) => base.fontSize.m};
  background: ${({ theme: { color } }) => color.menu};
  border-radius: 0.5rem;
`;

const StyledImg = styled(Img)`
  flex-basis: 60%;
  margin-right: 5rem;
`;

const Contribution = ({ companyLogo }) => (
  <Wrapper href='https://livesession.io/' target='_blank' rel='noreferrer'>
    <StyledImg fluid={companyLogo} />
    <p>
      I’ve contributed to <b>livesession SDK plugin</b>. I’ve figured out how to install and run their package on Angular apps. It is nothing big tho, but everytime when I think
      about this it makes me really proud of myself. <br />
      If you don’t know what <b>livesession</b> is, then you really have to visit their <b>webpage</b>. Their software will help you to keep eye on your client needs and interests.
    </p>
  </Wrapper>
);

export default Contribution;