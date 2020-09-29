import React, { useState } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';

import Button from 'components/atoms/button';

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

const Form = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.id]: e.target.value });
  };
  return (
    <StyledForm name='contact' method='POST' action='/success' data-netlify-recaptcha='true' data-netlify='true'>
      <input type='hidden' name='form-name' value='contact' />

      <label htmlFor='name'>
        <input type='text' id='name' name='name' placeholder='name.' onChange={handleChange} value={inputValue.name} required minLength='3' />
        <ActivePlaceholder>name.</ActivePlaceholder>
      </label>

      <label htmlFor='email'>
        <input type='email' id='email' name='email' placeholder='email.' onChange={handleChange} value={inputValue.email} required />
        <ActivePlaceholder>email.</ActivePlaceholder>
      </label>

      <label htmlFor='message'>
        <textarea type='text' id='message' name='message' placeholder='message.' onChange={handleChange} value={inputValue.message} required minLength='15' />
        <ActivePlaceholder>message.</ActivePlaceholder>
      </label>

      {/* <div data-netlify-recaptcha='true' /> */}
      <ReCAPTCHA data-netlify-recaptcha='true' sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} />
      <Button btnAction='submit' btnType='button' btncolor={({ theme: { base } }) => base.accent.secondary}>
        Send
      </Button>
    </StyledForm>
  );
};

export default Form;
