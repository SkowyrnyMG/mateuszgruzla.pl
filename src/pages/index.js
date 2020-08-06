import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import GithubIcon from '../assets/svg/gh.svg';
import LinkedinIcon from '../assets/svg/linkedin-icon.svg';

const Wrapper = styled.div`
  margin: 0 2rem;
  padding: 2rem 5rem;
  font-family: 'Montserrat', sans-serif;
  background: #efefefd0;
  border-radius: 1rem;
  box-shadow: 0 0 2rem -0.5rem black;

  h3 {
    font-family: inherit;
    font-size: 2.5rem;
  }
`;

const SocialmediaWrapper = styled.div`
  width: 60%;
  margin: 5rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location} title='Strona w budowie'>
      {/* <SEO title='All posts' description='Site in progress..' /> */}
      <Wrapper>
        <h3>Strona w budowie..</h3>
        <p>
          Cześć, miło mi Ciębie gościć! Niestety strona obecnie jest w fazie
          budowy..
        </p>
        <p>
          Jeżeli chesz się ze mną skontaktować, to zawsze możesz złapać mnie na
          moich socialmediach.
        </p>
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
