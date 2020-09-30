import styled from 'styled-components';

const ErrorMSG = styled.span`
  display: inline-block;
  color: ${({ theme: { base } }) => base.accent.tertiary};
  transform: translateY(-2rem);
`;

export default ErrorMSG;
