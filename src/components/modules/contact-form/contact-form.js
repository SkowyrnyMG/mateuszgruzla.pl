import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import qs from 'qs';

import FormikControl from 'components/modules/formik-control/formik-control';
import ErrorMSG from 'components/modules/formik-control/error-msg';
import Button from 'components/atoms/button';

const StyledForm = styled(Form)`
  width: 80%;

  label {
    color: inherit;
    display: block;
    ${({ theme: { base } }) => base.mq.bigPhoneBreak} {
      margin-top: 2em;
    }
    ${({ theme: { base } }) => base.mq.smallPhone} {
      margin-top: 4em;
    }
  }

  input,
  textarea {
    margin-bottom: 2rem;
    background: transparent !important;
    width: 100%;
    :focus {
      outline: none;
      box-shadow: 0 0 1rem -0.3rem ${({ theme: { color } }) => color.content};
    }
  }

  textarea {
    padding-top: 1rem;
    margin-bottom: 1.5rem;
  }

  span {
    position: relative;
    display: block;
  }

  ${({ theme: { base } }) => base.mq.bigPhoneBreak} {
    width: 100%;
  }
`;

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, <ErrorMSG>Name cannot be shorter than 3 signs!</ErrorMSG>)
      .max(50, <ErrorMSG>Name canoot be longer than 50 sings!</ErrorMSG>)
      .required(<ErrorMSG>Required!</ErrorMSG>),
    email: Yup.string()
      .email(<ErrorMSG>Invalid Email!</ErrorMSG>)
      .required(<ErrorMSG>Required!</ErrorMSG>),
    message: Yup.string()
      .min(15, <ErrorMSG>Message should be at least 15 signs long!</ErrorMSG>)
      .max(255, <ErrorMSG>Message cannot be longer than 50 signs!</ErrorMSG>)
      .required(<ErrorMSG>Required!</ErrorMSG>),
  });

  const [errMsg, setErrMsg] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
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
    setCaptchaError(false);
    setVerified(true);
  };

  const onError = () => {
    setCaptchaError(true);
    setVerified(false);
  };

  const InputBackground = ({ theme: { color } }) => color.bg;

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
      }}
    >
      {({ errors, touched }) => (
        <StyledForm data-netlify='true' data-netlify-honeypot='bot-field' name='contact'>
          <Field name='bot-field' type='hidden' />
          <Field name='form-name' type='hidden' />

          <FormikControl control='input' name='name' error={errors.name} touched={touched.name} parentBackground={InputBackground} />
          <FormikControl control='input' name='email' error={errors.email} touched={touched.email} parentBackground={InputBackground} />
          <FormikControl control='textarea' name='message' error={errors.message} touched={touched.message} parentBackground={InputBackground} />

          <ReCAPTCHA data-netlify-recaptcha='true' sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} onChange={onVerify} onErrored={onError} onExpired={onError} on size='compact' />
          {captchaError && <ErrorMSG>ReCAPTCHA ERROR!</ErrorMSG>}

          <Button btnAction='submit' btnType='button' btncolor={({ theme: { base } }) => base.accent.secondary}>
            Send
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ContactForm;
