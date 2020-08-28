import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavHeading from 'components/atoms/nav-heading';
import ExternalLink from 'components/atoms/external-link';
import FacebookIcon from 'assets/svg/fb-icon.svg';
import LinkedinIcon from 'assets/svg/linkedin-icon.svg';
import TwitterIcon from 'assets/svg/twitter-icon.svg';
import GithubIcon from 'assets/svg/gh.svg';

const Wrapper = styled.div`
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const SocialMediaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-row-gap: 2.5rem;
  grid-column-gap: 3rem;
  justify-items: center;
  align-items: center;
  svg {
    margin-top: 0;
    width: 4rem;
    height: 4rem;
    fill: ${({ theme: { color } }) => color.content};
  }
`;

const SocialList = ({ fbLink, linkedinLink, githubLink, twitterLink }) => (
  <Wrapper>
    <NavHeading>Reach me on</NavHeading>
    <SocialMediaWrapper>
      <ExternalLink link={fbLink}>
        <FacebookIcon />
      </ExternalLink>
      <ExternalLink link={linkedinLink}>
        <LinkedinIcon />
      </ExternalLink>
      <ExternalLink link={githubLink}>
        <GithubIcon />
      </ExternalLink>
      <ExternalLink link={twitterLink}>
        <TwitterIcon />
      </ExternalLink>
    </SocialMediaWrapper>
  </Wrapper>
);

SocialList.defaultProps = {
  fbLink: 'https://facebook.com',
  linkedinLink: 'https://linkedin.com',
  githubLink: 'https://gatsby.com',
  twitterLink: 'https://twitter.com',
};

SocialList.propTypes = {
  fbLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  githubLink: PropTypes.string,
  twitterLink: PropTypes.string,
};

export default SocialList;
