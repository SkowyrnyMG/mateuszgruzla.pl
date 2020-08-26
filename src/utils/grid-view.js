import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr [content-start] 1170px [content-end] 1fr;

  > * {
    grid-column: content-start / content-end;
  }
`;

const GridView = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default GridView;
