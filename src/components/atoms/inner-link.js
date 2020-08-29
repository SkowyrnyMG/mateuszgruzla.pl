import { Link } from 'gatsby';
import styled from 'styled-components';

const InnerLink = styled(Link)`
  transition: 0.25s color;
  :hover {
    color: ${({ theme: { color } }) => color.contentFaded};
  }
`;

export default InnerLink;
