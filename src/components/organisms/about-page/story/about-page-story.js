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
      <Content title='Love to the digital world'>
        Since I was a young kid I was all about PC, playing games, fast typing, etc.
        <br />
        <br />
        It all started with my old good friend <b>Commodore C64</b>, which my dad bought for me and my older brother as a Christmas gift one year. Back then of course I did not
        even think about learning coding, graphics, etc. I was just enjoying myself and always I wanted to master every game that I took in my hands. Yes, I know that it sounds
        like a story of 90% nerdy guys born in the nineties, but for me, it was<b>the beginning</b> of a beautiful <b>passion</b> that was slowly evolving in me to finally push me
        to learn how to <b>code</b> and think like a programmer.
      </Content>

      <TimelinePhoto>
        <ImageBox>
          <Img fluid={aboutComodore} />
        </ImageBox>
        <PhotoInfo>
          Me and my older bro playing <ColorText colorText={({ theme: { base } }) => base.accent.primary}>PACMAN</ColorText> on C64 Yes. This boy in a swaggy{' '}
          <ColorText colorText={({ theme: { base } }) => base.accent.quaternary}>pink</ColorText> shirt is me{' '}
          <span role='img' aria-label='LOL'>
            😅
          </span>
        </PhotoInfo>
      </TimelinePhoto>

      <Content title='First lines of code' fullWidth>
        In <b>June</b> 2019th I wrote my first lines of <b>CSS</b>, but that was not my first coding experience... Back in high school, I was on IT profile and besides other
        subjects I had also
        <b>programming</b> classes where I could learn some basics of algorithms, planning my development process, and basics of few coding languages.
        <br />
        <br />
        They were teaching us Turbo-Pascal, C++, and <b>Java</b>. Oh, yes. Good old&apos; Java{' '}
        <span role='img' aria-label='Arrow Heart'>
          💘
        </span>
        . I think it was my first programming language in which I felt comfortable. I took many extra hours of classes to learn more and more of it, but unfortunately for me,
        I&apos;ve been graduated in the same year. After I finished school I had to start work to earn money for a living. I&apos;ve spent more or less 5 years without code to
        finally come back to it in 2019th.
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
        In 2019 after I saw the prototype of my brother&apos;s website which he made for himself on one of the popular page builders I have sworn to him that one day I will create
        the webpage that will make him proud of it. As a total newbie as &apos;&apos;webmaster&apos;&apos; firstly I gave WordPress a try, but I’ve noticed quickly that I have to
        follow theme options and I did not have any space to be creative, so I’ve decided to learn <strong>CSS and HTML</strong> - I&apos;ve bought some courses on Udemy. At this
        point, I&apos;ve already known what I would like to become in the future. Of course, after that, I hopped quickly into <strong>JavaScript</strong> with the second edition
        of the &apos;&apos;Przeprogramowani.pl&apos;&apos; course. That was a great time. I was learning something new each day. Thanks to the Przeprogramowani.pl mentors I was
        always writing the best quality code and also I&apos;ve gained some coding confidence. Right now I know that I can code ANYTHING that I want if I invest my time and heart
        into it. In meantime, I’ve visited a few Frontend meetups on which I’ve learned more about development, Javascript, and its frameworks to finally choose to
        <strong> React</strong> as my favorite. .. and here we are! Right now I am practicing React <strong>Gatsby</strong>, and JavaScript itself on my projects and sometimes on
        commercial orders.
      </Content>
    </Wrapper>
  );
};

export default AboutPageStory;
