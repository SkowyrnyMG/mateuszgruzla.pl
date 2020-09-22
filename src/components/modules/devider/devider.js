import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 12rem;
  width: 100%;
  z-index: 10;
  grid-column: 1 / -1 !important;

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0%;
    right: 0%;
    border-bottom: 1px solid ${({ theme: { color } }) => color.content};
    transform: scaleX(1);
    z-index: -1;
  }
`;

const StyledHeading = styled.h2`
  text-align: left;
  margin-bottom: -4.1rem;
  margin-left: calc((100% - 1180px) / 2);
`;

const Highlight = styled.span`
  color: ${({ highlightColor }) => highlightColor};
`;

const Devider = ({ highlightEnd, highlightColor, title }) => {
  const titleArr = title.split('');
  const titleOutput = titleArr.reduce((acc, current, index) => {
    const key = current + index;
    acc.push(
      index < Number(highlightEnd) ? (
        <Highlight key={key} highlightColor={highlightColor}>
          {current}
        </Highlight>
      ) : (
        <span key={key}>{current}</span>
      ),
    );
    return acc;
  }, []);
  return (
    <Wrapper>
      <StyledHeading highlightColor={highlightColor}>{titleOutput.map((eachLetter) => eachLetter)}</StyledHeading>
    </Wrapper>
  );
};

export default Devider;
