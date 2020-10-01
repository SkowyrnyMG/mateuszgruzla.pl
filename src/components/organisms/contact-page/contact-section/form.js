import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import qs from 'qs';

import FormikControl from 'components/organisms/contact-page/contact-section/formik-control';
import ErrorMSG from 'components/organisms/contact-page/contact-section/ErrorMSG';
import Button from 'components/atoms/button';

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

const ContactForm = () => {
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
  const [token, setToken] = useState('');
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const handleSubmit = async (formVal, rctoken) => {
      const data = {
        ...formVal,
        'g-recaptcha-response': rctoken,
      };
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: '/',
      };
      try {
        await axios(options);
        window.location.href = 'http://mateuszgruzla.pl/success';
      } catch (e) {
        setErrMsg(e.message);
        console.log(errMsg);
      }
    };
    if (token) {
      handleSubmit(formValues, token);
    }
  }, [formValues, token]);

  const onVerify = (rctoken) => {
    console.log(verified);
    setToken(rctoken);
    setVerified(true);
    setExecuting(true);
  };

  return (
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
        setFormValues({ ...values });
        setExecuting(true);
      }}
    >
      {() => (
        <StyledForm data-netlify='true' data-netlify-honeypot='bot-field' name='contact'>
          <Field name='bot-field' type='hidden' />
          <Field name='form-name' type='hidden' />

          <FormikControl control='input' name='name' />
          <FormikControl control='input' name='email' />
          <FormikControl control='textarea' name='message' />

          <ReCAPTCHA data-netlify-recaptcha='true' sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} onChange={onVerify} />

          <Button btnAction='submit' btnType='button' btncolor={({ theme: { base } }) => base.accent.secondary} isSubmiting={executing}>
            Send
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ContactForm;
