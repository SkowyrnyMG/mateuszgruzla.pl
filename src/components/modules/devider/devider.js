import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 12rem;
  width: 100%;
  z-index: 10;

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -500%;
    width: 1000%;
    border-bottom: 1px solid ${({ theme: { color } }) => color.content};
    z-index: -1;
  }
`;

const StyledHeading = styled.h2`
  text-align: left;
  margin-bottom: -4.1rem;
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
