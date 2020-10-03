import styled from 'styled-components';

// placeholder requires label parent with relative positioning to work correctly

const ActivePlaceholder = styled.div`
  position: absolute;
  top: -25px;
  left: 2rem;
  padding-right: 0.2rem;
  font-size: ${({ theme: { base } }) => base.fontSize.ms};
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
  color: inherit;
  background-color: ${({ parentBackground }) => parentBackground};
  transition: opacity 0.25s, background-color 0.3s, 0.25s transform;
`;

export default ActivePlaceholder;
