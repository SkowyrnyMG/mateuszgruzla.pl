import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import qs from 'qs';

import ErrorMSG from 'components/organisms/contact-page/contact-section/ErrorMSG';
import Button from 'components/atoms/button';

// const StyledForm = styled.form`
//   width: 80%;

//   input,
//   textarea {
//     margin-bottom: 2rem;
//     background: transparent !important;
//     border: 1px solid ${({ theme: { color } }) => color.content};
//     width: 100%;
//   }

//   textarea {
//     padding-top: 1rem;
//     margin-bottom: 0;
//   }

//   input:placeholder-shown + div,
//   textarea:placeholder-shown + div {
//     opacity: 0;
//     background-color: transparent;
//     transform: translateY(100%);
//   }

//   label {
//     position: relative;
//     display: block;
//   }
// `;

const StyledForm = styled(Form)`
  width: 80%;

  input,
  textarea {
    margin-bottom: 2rem;
    background: transparent !important;
    border: 1px solid ${({ theme: { color } }) => color.content};
    width: 100%;
    border-color: ${({ theme, isError }) => (isError ? 'red' : theme.color.content)};
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

  span {
    position: relative;
    display: block;
  }
`;

const StyledField = styled(Field)`
  margin-bottom: 2rem;
  background: transparent !important;
  border: 1px solid ${({ theme: { color } }) => color.content};
  width: 100%;
  border-color: ${({ theme, errors }) => (errors ? 'red' : theme.color.content)};
`;

const MessageField = styled(Field)`
  height: 10rem;
  display: flex;
  flex-wrap: wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow-y: scroll;
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

const ContactForm = () => {
  // const [inputValue, setInputValue] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   setInputValue({ ...inputValue, [e.target.id]: e.target.value });
  // };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, <ErrorMSG>Too Short!</ErrorMSG>)
      .max(50, <ErrorMSG>Too Long!</ErrorMSG>)
      .required(<ErrorMSG>Required!</ErrorMSG>),
    email: Yup.string()
      .email(<ErrorMSG>Invalid Email!</ErrorMSG>)
      .required(<ErrorMSG>Required!</ErrorMSG>),
    message: Yup.string()
      .min(15, <ErrorMSG>Too Short!</ErrorMSG>)
      .max(255, <ErrorMSG>Too Long!</ErrorMSG>)
      .required(<ErrorMSG>Required!</ErrorMSG>),
  });

  const [errMsg, setErrMsg] = useState('');
  const [executing, setExecuting] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [msgSent, setMsgSent] = useState(false);
  const [rcError, setRcError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState('');
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const handleSubmit = async (formVal, rctoken) => {
      const data = {
        ...formVal,
      };
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: '/',
      };
      try {
        await axios(options);
        setMsgSent(true);
        window.location.href = 'http://mateuszgruzla.pl/success';
      } catch (e) {
        setErrMsg(e.message);
      }
    };
    if (Object.keys(formValues).length > 0) {
      handleSubmit(formValues);
    }
  }, [formValues]);

  return (
    // <StyledForm name='contact' method='POST' action='/success' data-netlify-recaptcha='true' data-netlify='true'>
    //   <input type='hidden' name='form-name' value='contact' />

    //   <label htmlFor='name'>
    //     <input type='text' id='name' name='name' placeholder='name.' onChange={handleChange} value={inputValue.name} required minLength='3' />
    //     <ActivePlaceholder>name.</ActivePlaceholder>
    //   </label>

    //   <label htmlFor='email'>
    //     <input type='email' id='email' name='email' placeholder='email.' onChange={handleChange} value={inputValue.email} required />
    //     <ActivePlaceholder>email.</ActivePlaceholder>
    //   </label>

    //   <label htmlFor='message'>
    //     <textarea type='text' id='message' name='message' placeholder='message.' onChange={handleChange} value={inputValue.message} required minLength='15' />
    //     <ActivePlaceholder>message.</ActivePlaceholder>
    //   </label>

    //   {/* <div data-netlify-recaptcha='true' /> */}
    //   <ReCAPTCHA data-netlify-recaptcha='true' sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} />
    //   <Button btnAction='submit' btnType='button' btncolor={({ theme: { base } }) => base.accent.secondary}>
    //     Send
    //   </Button>
    // </StyledForm>
    <Formik
      initialValues={{
        'bot-field': '',
        'form-name': 'contact',
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setIsSubmitting(true);
        setFormValues({ ...values });
        setExecuting(true);
      }}
    >
      {() => (
        <StyledForm data-netlify='true' data-netlify-honeypot='bot-field' name='contact'>
          <Field name='bot-field' type='hidden' />
          <Field name='form-name' type='hidden' />

          <span>
            <StyledField name='name' placeholder='name.' />
            <ActivePlaceholder>name.</ActivePlaceholder>
            <ErrorMessage name='name' />
          </span>

          <span>
            <Field name='email' placeholder='email.' />
            <ActivePlaceholder>email.</ActivePlaceholder>
            <ErrorMessage name='email' />
          </span>

          <span>
            <Field name='message' placeholder='message.' />
            <ActivePlaceholder>message.</ActivePlaceholder>
            <ErrorMessage name='message' />
          </span>
          <Button btnAction='submit' btnType='button' btncolor={({ theme: { base } }) => base.accent.secondary} error={errMsg} isSubmiting={executing}>
            Send
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ContactForm;
