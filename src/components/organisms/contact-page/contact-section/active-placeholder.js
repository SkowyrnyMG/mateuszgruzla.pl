import styled from 'styled-components';

const ActivePlaceholder = styled.div`
  position: absolute;
  top: -25px;
  left: 2rem;
  padding-right: 0.2rem;
  font-size: ${({ theme: { base } }) => base.fontSize.ms};
  color: inherit;
  background-color: ${({ theme: { color } }) => color.bg};
  transition: opacity 0.25s, background-color 0.3s, 0.25s transform;
`;

export default ActivePlaceholder;
