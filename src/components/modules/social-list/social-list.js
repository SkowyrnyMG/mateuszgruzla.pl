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
  grid-template-columns: ${({ vertical }) => (vertical ? 1 : 'repeat(2, min-content)')};
  grid-row-gap: 2.5rem;
  grid-column-gap: 3rem;
  /* justify-items: center; */
  align-items: center;
  svg {
    margin-top: 0;
    width: 4rem;
    height: 4rem;
    fill: ${({ theme: { color } }) => color.content};
  }

  > *:not(:last-child) {
    margin-bottom: ${({ vertical }) => (vertical ? '6rem' : 0)};
  }
`;

const SocialInfoText = styled.span`
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
`;

const SocialList = ({ fbLink, linkedinLink, githubLink, twitterLink, vertical }) => (
  <Wrapper>
    {vertical ? null : <NavHeading>Reach me on</NavHeading>}
    <SocialMediaWrapper vertical={vertical}>
      <ExternalLink link={fbLink}>
        <FacebookIcon /> {vertical ? <SocialInfoText>facebook.</SocialInfoText> : null}
      </ExternalLink>
      <ExternalLink link={linkedinLink}>
        <LinkedinIcon /> {vertical ? <SocialInfoText>linkedin.</SocialInfoText> : null}
      </ExternalLink>
      <ExternalLink link={githubLink}>
        <GithubIcon /> {vertical ? <SocialInfoText>github.</SocialInfoText> : null}
      </ExternalLink>
      <ExternalLink link={twitterLink}>
        <TwitterIcon /> {vertical ? <SocialInfoText>twitter.</SocialInfoText> : null}
      </ExternalLink>
    </SocialMediaWrapper>
  </Wrapper>
);

SocialList.defaultProps = {
  fbLink: 'https://www.facebook.com/mateusz.gruzla.3/',
  linkedinLink: 'https://www.linkedin.com/in/mateusz-gru%C5%BAla-99b0ab18b/',
  githubLink: 'https://github.com/SkowyrnyMG',
  twitterLink: 'https://twitter.com/GruzlaMateusz',
};

SocialList.propTypes = {
  fbLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  githubLink: PropTypes.string,
  twitterLink: PropTypes.string,
};

export default SocialList;
