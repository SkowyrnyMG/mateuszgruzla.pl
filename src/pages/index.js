import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import Layout from '../components/layout';

import GithubIcon from '../assets/svg/gh.svg';
import LinkedinIcon from '../assets/svg/linkedin-icon.svg';
import SiteBuildSvg from '../assets/svg/siteBuild.svg';

const Wrapper = styled.div`
  position: relative;
  margin: 30rem 2rem 5rem !important;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  background: #efefef;
  border-radius: 1rem;
  box-shadow: 0 0 2rem -0.5rem black;
  z-index: 10;

  h3 {
    font-family: inherit;
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 1400px) {
    margin: 30rem 2rem 5rem !important;
  }
  @media only screen and (max-width: 1100px) {
    margin: 15rem 2rem 5rem !important;
  }

  @media only screen and (max-width: 500px) {
    width: 90%;
    margin: 17rem 2rem 5rem !important;
  }
`;

const InfoBox = styled.div`
  width: 80%;
`;

const SocialmediaWrapper = styled.div`
  margin: 5rem;
  display: flex;
  align-items: center;
  svg {
    width: 5rem;
    height: 5rem;
    transition: fill 0.25s;

    :first-of-type {
      margin-right: 2rem;
    }
  }

  a {
    text-decoration: none;
    border: none;
    box-shadow: none;

    :hover svg {
      fill: rebeccapurple;
    }
  }

  @media only screen and (max-width: 390px) {
    flex-direction: column;
    width: 100%;

    svg,
    a {
      margin-right: 0 !important;
    }
  }
`;

const SvgWrapper = styled.div`
  position: absolute;
  margin: 5rem 0 -2rem;
  padding: 0 1rem;
  top: -35rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: -50 !important;

  svg {
    width: 50rem;
    @media only screen and (max-width: 1300px) {
      width: 30rem;
    }
    @media only screen and (max-width: 800px) {
      width: 15rem;
    }
    @media only screen and (max-width: 270px) {
      width: 10rem;
    }
  }

  @media only screen and (min-width: 1400px) {
    top: -34rem;
  }
  @media only screen and (max-width: 1300px) {
    top: -29rem;
  }
  @media only screen and (max-width: 800px) {
    top: -25rem;
  }

  @media only screen and (max-width: 270px) {
    top: -24rem;
  }
`;

const BlogIndex = ({ location }) => {
  const svgWrapper = useRef(null);

  useEffect(() => {
    const [elms] = svgWrapper.current.children;
    const background = elms.getElementById('background');
    const desk = elms.getElementById('desk');
    const whitescreens = elms.getElementById('whitescreens');
    const bluescreens = elms.getElementById('bluescreens');
    const code = elms.getElementById('code');
    const character = elms.getElementById('character');
    const preview = elms.getElementById('preview');

    console.log(background);

    gsap.set(
      [
        background,
        desk,
        preview,
        whitescreens,
        bluescreens,
        character,
        ...code.children,
      ],
      {
        autoAlpha: 0,
      },
    );

    const tl = gsap.timeline();
    const tl2 = gsap.timeline({ repeat: -1 });

    tl.to([background, desk, whitescreens, bluescreens, character], {
      autoAlpha: 1,
      duration: 1,
    });
    tl2
      .to([...code.children], {
        autoAlpha: 1,
        duration: 2,
        stagger: 0.05,
        delay: 1,
      })
      .to(
        preview,
        {
          autoAlpha: 1,
          duration: 0.5,
        },
        '-=1.5',
      )
      .to([...code.children, preview], { autoAlpha: 0, duration: 0.5 }, '+=1');
  });
  return (
    <Layout location={location} title='Strona w budowie'>
<<<<<<< HEAD
      {/* <SEO title='All posts' description='Site in progress..' /> */}
=======
      {/* <SEO title='All posts' /> */}
>>>>>>> maintenance
      <Wrapper>
        <SvgWrapper ref={svgWrapper}>
          <SiteBuildSvg />
        </SvgWrapper>
        <InfoBox>
          <h3>Strona w budowie..</h3>
          <p>
            Cześć, miło mi jest Ciebie gościć! Niestety strona obecnie jest w
            fazie budowy..
          </p>
          <p>
            Jeżeli chesz się ze mną skontaktować, to zawsze możesz złapać mnie
            na moich socialmediach.
          </p>
        </InfoBox>
        <SocialmediaWrapper>
          <a href='https://github.com/skowyrnyMG'>
            <GithubIcon />
          </a>
          <a href='https://www.linkedin.com/in/mateusz-gru%C5%BAla-99b0ab18b/'>
            <LinkedinIcon />
          </a>
        </SocialmediaWrapper>
      </Wrapper>
    </Layout>
  );
};

export default BlogIndex;
