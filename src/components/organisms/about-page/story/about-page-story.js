import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Content from 'components/organisms/about-page/story/content';
import ColorText from 'components/atoms/color-text';

import { useImg } from 'hooks/useImg';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 9rem;

  ${({
    theme: {
      base: { mq },
    },
  }) => mq.desktop} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const TimelinePhoto = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageBox = styled.div`
  width: 50rem;
`;

const PhotoInfo = styled.p`
  width: 90%;
  font-size: ${({ theme: { base } }) => base.fontSize.m};
  font-style: italic;
`;

const AboutPageStory = () => {
  const { aboutComodore, aboutHelloroman } = useImg();
  return (
    <Wrapper>
      <Content title='Love to the digital world'>
        Since I was young kid I was all about PC, playing games, fast typing etc.
        <br />
        <br />
        It all started from my old good friend <b>Comodore C64</b>, which my dad bought for me and my older brother as christmas gift one year. Back then of course I did not even
        think about learning coding, graphics etc. I was just enjoing myself and allways I wanted to master every game that i took in my hands. Yes I know that it sounds like story
        of 90% nerdy guys born in ninety’s, but for me it was <b>beginning</b> of beautiful <b>passion</b> which was slowly evolving in me to finnaly replace most time spent on
        playing video games to learn and practise <b>coding</b>.
      </Content>

      <TimelinePhoto>
        <ImageBox>
          <Img fluid={aboutComodore} />
        </ImageBox>
        <PhotoInfo>
          Me and my older bro playing <ColorText colorText={({ theme: { base } }) => base.accent.primary}>PACMAN</ColorText> on C64 Yes. This boy in swaggy{' '}
          <ColorText colorText={({ theme: { base } }) => base.accent.quaternary}>pink</ColorText> shirt is me{' '}
          <span role='img' aria-label='LOL'>
            😅
          </span>
        </PhotoInfo>
      </TimelinePhoto>

      <Content title='First lines of code' fullWidth>
        On <b>June 2019th</b> I wrote my first lines of <b>CSS</b>, but that was not my coding “first touch”... Back in highschoool I was on IT profile and besides of others
        subjects I had also <b>programming</b> classes where i could learn some basics of alghoritms, planning my development process and basics of few coding languages.
        <br />
        <br />
        They were teaching us Turbo-Pascal, C++ and <b>Java</b>. Oh, yes. Good ol’ Java{' '}
        <span role='img' aria-label='Arrow Heart'>
          💘
        </span>
        . I think it was my first programming language in which i felt really comfortable. I took many extra hours classes to learn more of it, but unfortunately for me I’ve been
        graduated in the same year. After I finished the school I had to start work and because of that I’ve spend more or less 5 years without code to finnaly come back to it in
        2019th.
      </Content>

      <TimelinePhoto>
        <ImageBox>
          <Img fluid={aboutHelloroman} />
        </ImageBox>
        <PhotoInfo>
          Adam <ColorText colorText={({ theme: { base } }) => base.accent.primary}>“Hello Roman”</ColorText> Romański and I after HelloRoman and friends v2
        </PhotoInfo>
      </TimelinePhoto>

      <Content title='Road to Frontend'>
        In 2019 after I saw prototype of my brother website which he made for himself on one of popular page builders I have sworn to him that one day I will create his personal
        wepage that will make him be proud of it. As totally newbie as “webmaster” firstly i gave Wordpress a try, but I’ve noticed really quickly that I have to follow theme
        options and I did not really have any space to be creative, so I’ve decided to learn <strong>CSS and HTML</strong>. Of course after that i hopped reallly quickly into
        <strong> JavaScript</strong> with second edition of “Przeprogramowani” course. In meantime I’ve visited few Frontend meetups on which I’ve learnt more about development,
        Javascript and it’s frameworks to finnaly choose <strong>React</strong> as my favorite. .. and here we are! Right now I am practising React, <strong>Gatsby</strong> and
        JavaScript itself on my presonal projects and sometimes on commercial orders.
      </Content>
    </Wrapper>
  );
};

export default AboutPageStory;
