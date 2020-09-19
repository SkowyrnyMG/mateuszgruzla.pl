import React from 'react';
import styled from 'styled-components';

import SocialList from 'components/modules/social-list/social-list';
import Button from 'components/atoms/button';

const Wrapper = styled.section`
  margin-bottom: 7.5rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const ContactInfo = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledParagraph = styled.p`
  margin-bottom: 5rem;
  font-size: ${({ theme: { base } }) => base.fontSize.m};
`;

const FormWrapper = styled.div`
  flex-basis: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 80%;

  input,
  textarea {
    margin-bottom: 2rem;
    background: transparent !important;
    border: 1px solid ${({ theme: { color } }) => color.content};
    width: 100%;
  }

  textarea {
    padding-top: 1rem;
    margin-bottom: 0;
  }

  input:placeholder-shown + div,
  textarea:placeholder-shown + div {
    opacity: 0;
    background-color: transparent;
    transform: translateY(100%);
  }

  label {
    position: relative;
    display: block;
  }
`;

const ActivePlaceholder = styled.div`
  position: absolute;
  top: -25px;
  left: 2rem;
  padding-right: 0.2rem;
  font-size: ${({ theme: { base } }) => base.fontSize.ms};
  background-color: ${({ theme: { color } }) => color.bg};
  transition: opacity 0.25s, background-color 0.3s, 0.25s transform;
`;

const ContactSection = () => (
  <Wrapper>
    <ContactInfo>
      <StyledParagraph>If you want to chat with me you can use contact form or just simply write to me on my social profiles.</StyledParagraph>
      <SocialList vertical />
    </ContactInfo>
    <FormWrapper>
      <StyledForm action=''>
        <label htmlFor='name'>
          <input type='text' id='name' placeholder='name.' />
          <ActivePlaceholder>name.</ActivePlaceholder>
        </label>
        <label htmlFor='email'>
          <input type='text' id='email' placeholder='email.' />
          <ActivePlaceholder>email.</ActivePlaceholder>
        </label>
        <label htmlFor='message'>
          <textarea type='text' id='message' placeholder='message.' />
          <ActivePlaceholder>message.</ActivePlaceholder>
        </label>
        <Button btnType='button' btncolor={({ theme: { base } }) => base.accent.secondary}>
          Send
        </Button>
      </StyledForm>
    </FormWrapper>
  </Wrapper>
);

export default ContactSection;