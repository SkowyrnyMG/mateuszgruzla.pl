import React from 'react';
import styled from 'styled-components';

import { routes } from 'utils/routes';

import LogoSvg from 'components/atoms/logo-svg';
import Button from 'components/atoms/button';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 12.5rem;
`;

const StyledHeading = styled.h3`
  margin-bottom: 6rem;
`;

const StyledParagraph = styled.p`
  margin-bottom: 7rem;
  width: 70rem;
`;

const HomePageAbout = () => (
  <Wrapper>
    <LogoSvg />
    <StyledHeading>I’m Mateusz Gruźla.</StyledHeading>
    <StyledParagraph>
      The future senior developer... like I’ve mentioned above “Developer with passion and dreams” with strong accent on dreams.. Anyhow, born in 1993 and living in a small city in Poland called
      Bielawa, placed 70 kms from Wroclaw. Since June 2019 after I wrote my first lines of CSS I immediately fell in love with code and right now I spend amlost all of my free time after work on
      coding with short brakes to play with my dog or spend some time with my lovely fiance.
    </StyledParagraph>
    <Button isLink='true' path={routes.about} btncolor={({ theme }) => theme.base.accent.primary}>
      FULL STORY
    </Button>
  </Wrapper>
);

export default HomePageAbout;
