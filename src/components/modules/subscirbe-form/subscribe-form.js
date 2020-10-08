import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import parse from 'html-react-parser';

import FormikControl from 'components/modules/formik-control/formik-control';
import ErrorMSG from 'components/modules/formik-control/error-msg';
import NavHeading from 'components/atoms/nav-heading';
import Button from 'components/atoms/button';

const Wrapper = styled.div`
  margin-top: 0;
  width: 100%;
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    position: relative;
    display: block;
  }

  input {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const SubscribtionInfo = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  max-width: 30rem;
  font-size: ${({ theme: { base } }) => base.fontSize.ms};
  color: ${({ theme: { base }, status }) => (status === 'error' ? base.accent.error : base.accent.success)};
  word-wrap: break-word;
  transition: all 0.5s;

  span:first-child {
    text-transform: uppercase;
  }

  a {
    color: ${({ theme: { base } }) => base.accent.primary};
  }
`;

const SubscribeForm = () => {
  const [subscribtionStatus, setSubscribtionStatus] = useState();
  const [submscribtionMsg, setSubscribtionMsg] = useState();

  const handleResponse = async (data) => {
    const response = await data;
    setSubscribtionStatus(response.result);
    setSubscribtionMsg(parse(response.msg));
  };

  const SubscribeValidationSchema = Yup.object().shape({
    Email: Yup.string()
      .email(<ErrorMSG>Invalid Email!</ErrorMSG>)
      .required(<ErrorMSG>Required!</ErrorMSG>),
    Name: Yup.string()
      .min(3, <ErrorMSG>Name should be at lest 3 signs long!</ErrorMSG>)
      .max(50, <ErrorMSG>Name shouldnot be longer than 50 signs!</ErrorMSG>)
      .required(<ErrorMSG>Required!</ErrorMSG>),
  });
  const InputBackground = ({ theme: { color } }) => color.secondary;
  return (
    <Wrapper>
      <NavHeading>Subscribe to newsletter</NavHeading>
      <Formik
        initialValues={{
          Email: '',
          Name: '',
        }}
        validationSchema={SubscribeValidationSchema}
        onSubmit={({ email, name }) => {
          addToMailchimp(email, { FNAME: name }).then((data) => {
            handleResponse(data);
          });
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            {subscribtionStatus ? (
              <SubscribtionInfo status={subscribtionStatus}>
                <span>{subscribtionStatus}</span>
                <span>{submscribtionMsg}</span>
              </SubscribtionInfo>
            ) : null}
            <FormikControl control='input' name='Email' error={errors.Email} touched={touched.Email} parentBackground={InputBackground} />
            <FormikControl control='input' name='Name' error={errors.Name} touched={touched.Name} parentBackground={InputBackground} />
            <Button btncolor={({ theme }) => theme.base.accent.tertiary} btnAction='submit'>
              SUBSCRIBE
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SubscribeForm;
