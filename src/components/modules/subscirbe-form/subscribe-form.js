import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import FormikControl from 'components/modules/formik-control/formik-control';
import ErrorMSG from 'components/modules/formik-control/error-msg';
import NavHeading from 'components/atoms/nav-heading';
import Button from 'components/atoms/button';

const Wrapper = styled.div`
  margin-top: 0;
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
  }
`;

const SubscribeForm = () => {
  const [mailChimpResponse, setMailChimpResponse] = useState('');

  const SubscribeValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email(<ErrorMSG>Invalid Email!</ErrorMSG>)
      .required(<ErrorMSG>Required!</ErrorMSG>),
    name: Yup.string()
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
          email: '',
          name: '',
        }}
        validationSchema={SubscribeValidationSchema}
        onSubmit={({ email, name }) => {
          addToMailchimp(email, name).then((data) => {
            setMailChimpResponse(data);
          });
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <FormikControl control='input' name='email' error={errors.email} touched={touched.email} parentBackground={InputBackground} />
            <FormikControl control='input' name='name' error={errors.name} touched={touched.name} parentBackground={InputBackground} />
            <Button btncolor={({ theme }) => theme.base.accent.tertiary} type='submit'>
              SUBSCRIBE
            </Button>
            {mailChimpResponse}
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SubscribeForm;
