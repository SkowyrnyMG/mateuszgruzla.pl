import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const Wrapper = styled.aside`
  position: sticky;
  top: 6rem;
  display: block;
  margin-left: 5rem;
  padding: 2rem;
  min-width: 35rem;
  height: fit-content;
  background: ${({ theme: { color } }) => color.secondary};
  border-radius: 0.5rem;

  button {
    background: none;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 0.7rem;
    }

    &:hover span {
      text-decoration: underline;
    }
  }
`;

const SetMarginByTagName = (tagName) => {
  switch (tagName) {
    case 'H2':
      return '0';
    case 'H3':
      return '2rem';
    case 'H4':
      return '4rem';
    case 'H5':
      return '6rem';
    case 'H6':
      return '8rem';
    default:
      return '0';
  }
};

const ButtonContent = styled.span`
  position: relative;
  display: inline-block;
  margin-left: ${({ tagname }) => SetMarginByTagName(tagname)};
  font-size: ${({ theme: { base }, tagname }) => (tagname === 'H2' ? base.fontSize.m : base.fontSize.ms)};
  color: ${({ theme: { base, color }, tagname }) => (tagname === 'H2' ? base.accent.secondary : color.content)};
  font-weight: ${({ theme: { base } }) => base.fontWeight.bold};
  pointer-events: none;

  ${({ tagname }) =>
    tagname !== 'H2' &&
    css`
      &::before {
        content: '';
        position: absolute;
        left: -2rem;
        top: -1rem;
        width: 1.1rem;
        height: 1.8rem;
        border-left: 1px dotted ${({ theme: { color } }) => color.contentFaded};
        border-bottom: 1px dotted ${({ theme: { color } }) => color.contentFaded};
      }
    `}
`;

const TableOfContent = ({ headings }) => {
  const ButtonWrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    const TOCButtons = ButtonWrapper.current.querySelectorAll('button');

    [...TOCButtons].forEach((content) =>
      content.addEventListener('click', (e) => {
        gsap.to(window, { duration: 1, scrollTo: { y: `#${e.target.className}` } });
      }),
    );

    return () =>
      [...TOCButtons].forEach((content) =>
        content.removeEventListener('click', (e) => {
          gsap.to(window, { duration: 1, scrollTo: { y: `#${e.target.className}` } });
        }),
      );
  });
  return (
    <Wrapper ref={ButtonWrapper}>
      {[...headings].map(({ textContent, tagName, id }) => {
        return (
          <button className={id} key={id}>
            <ButtonContent tagname={tagName}>{textContent}</ButtonContent>
          </button>
        );
      })}
    </Wrapper>
  );
};

export default TableOfContent;
