import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr [content-start] 1170px [content-end] 1fr;

  ${({ theme: { base } }) => base.mq.mediumDesktop} {
    grid-template-columns: 5rem [content-start] minmax(min-content, 1fr) [content-end] 5rem;
  }
  ${({ theme: { base } }) => base.mq.bigTablet} {
    grid-template-columns: 5rem [content-start] calc(100vw - 10rem) [content-end] 5rem;
  }


  > * {
    grid-column: content-start / content-end;
  }
`;

const GridView = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default GridView;
