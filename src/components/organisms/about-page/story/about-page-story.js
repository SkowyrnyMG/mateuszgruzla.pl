import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

const TimelinePhoto = styled.div.attrs(() => ({
  className: 'story-timeline-photo',
}))`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

const ImageBox = styled.div`
  width: 50rem;

  ${({ theme: { base } }) => base.mq.tablet} {
    width: 100%;
  }
`;

const PhotoInfo = styled.p`
  width: 90%;
  font-size: ${({ theme: { base } }) => base.fontSize.m};
  font-style: italic;
`;

const AboutPageStory = () => {
  const { aboutComodore, aboutHelloroman } = useImg();
  const animationWrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animationContainer = animationWrapper.current;
    const timelineBoxes = animationContainer.querySelectorAll('.story-timeline-photo');

    timelineBoxes.forEach((box, index) => {
      gsap.set([...box.children], { opacity: 0, transform: `translateX(${index % 2 === 0 || index === 0 ? '50px' : '-50px'})` });

      gsap.to([...box.children], {
        scrollTrigger: {
          trigger: box,
          start: '-5% 90%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
        duration: 0.75,
        opacity: 1,
        transform: 'translateX(0)',
        stagger: 0.25,
      });
    });
  });

  return (
    <Wrapper ref={animationWrapper}>
      <Content title='Love of the digital world'>
        Since I was a young kid it was all about PC, playing games, fast typing, etc.
        <br />
        <br />
        It all started with my good old friend <b>Commodore C64</b>, which my dad bought for me and my older brother as a Christmas gift one year. Back then, I did not even think
        about coding, graphics or design. I always wanted to master every game that I took into my hands and yes, I know that it sounds like the story of 90% of nerdy guys born in
        the nineties. For me however, it was <b>the beginning</b> of a beautiful <b>passion</b> that was slowly evolving to finally push me to learn how to <b>code</b> and to think
        like a programmer.
      </Content>

      <TimelinePhoto>
        <ImageBox>
          <Img fluid={aboutComodore} />
        </ImageBox>
        <PhotoInfo>
          Me and my older bro playing <ColorText colorText={({ theme: { base } }) => base.accent.primary}>PACMAN</ColorText> on C64 and yes, this boy in a swaggy{' '}
          <ColorText colorText={({ theme: { base } }) => base.accent.quaternary}>pink</ColorText> shirt is me{' '}
          <span role='img' aria-label='LOL'>
            😅
          </span>
        </PhotoInfo>
      </TimelinePhoto>

      <Content title='First lines of code' fullWidth>
        In <b>June</b> 2019 I wrote my first lines of <b>CSS</b>, but that was not my first coding experience... Back in high school, I had an IT profile which included
        <b>programming</b> classes. I could learn some basics about algorithms, planning my development process and some basics of different coding languages.
        <br />
        <br />
        They were teaching us Turbo-Pascal, C++, and <b>Java</b>. Oh, yes. Good ol&apos; Java{' '}
        <span role='img' aria-label='Arrow Heart'>
          💘
        </span>
        . I think that it was my first programming language that I felt comfortable with. I took many extra classes to learn more and more of it, but unfortunately for me, that
        same year I graduated. After I finished school I had to start working to earn a living. I&apos;ve spent about 5 years without coding to finally come back to restart my
        education in 2019th.
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
        In 2019 I saw the prototype of my brother&apos;s website. He made it for himself on one of the popular page builders. After that I have sworn to him that one day I will
        create a website that will make him proud of me. As a total newbie &apos;&apos;webmaster&apos;&apos; I First gave WordPress a try. Quickly I&apos;ve noticed that I have to
        follow theme options and that did not leave any room to be creative, so I’ve decided to learn <strong>CSS and HTML</strong>. At this point, I already knew what I would like
        to become in the future, so I&apos;ve bought some courses on Udemy. Of course, after that, I hopped quickly into <strong>JavaScript</strong> with the second edition of the{' '}
        <b>Przeprogramowani.pl</b> course. That was a blast. I was learning something new each day. Thanks to the mentors of Przeprogramowani.pl I was always writing the highest
        quality of code that I could and also gained some coding confidence. Right now I know that I can code ANYTHING that I want if I invest my time and heart into it. In the
        meantime, I have attended a few Frontend meetups during which I&apos;ve learned more about development, Javascript, and its frameworks to finally choose
        <strong> React</strong> as my favorite. .. and here we are! Right now I am practicing React, <strong>Gatsby</strong> and vanilla JavaScript on my projects and sometimes on
        commercial orders.
      </Content>
    </Wrapper>
  );
};

export default AboutPageStory;
