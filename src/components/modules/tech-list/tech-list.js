import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  margin-bottom: 6em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  * {
    margin-top: 0;
  }

  ${({ theme: { base } }) => base.mq.bigPhoneBreak} {
    margin-bottom: 6em;
  }
`;

const IconWrapper = styled.div`
  height: 50px;
  width: 50px;

  &:not(:last-child) {
    margin-right: 4rem;
  }
`;

const TechList = ({ technologies }) => {
  return (
    <Wrapper>
      {technologies.map((eachTech) => (
        <IconWrapper key={JSON.stringify(eachTech)}>
          <Img fluid={eachTech} />
        </IconWrapper>
      ))}
    </Wrapper>
  );
};

export default TechList;
