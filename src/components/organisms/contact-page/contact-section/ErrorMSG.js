import styled from 'styled-components';

const ErrorMSG = styled.span`
  display: inline-block;
  font-size: ${({ theme: { base } }) => base.fontSize.ms};
  font-style: italic;
  color: ${({ theme: { base } }) => base.accent.tertiary};
  transform: translateY(-2rem);
`;

export default ErrorMSG;
