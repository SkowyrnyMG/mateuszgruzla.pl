import React from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

import ActivePlaceholder from 'components/modules/active-placeholder/active-placeholder';

const Wrapper = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  input,
  textarea {
    background: transparent;
    border-width: 1px solid;
    outline: none;
    color: ${({ error, touched, theme: { base, color } }) => {
      if (error && touched) return base.accent.error;
      if (touched && error === undefined) return base.accent.success;
      return color.content;
    }} !important;

    border-color: currentColor !important;

    & + div {
      color: ${({ error, touched, theme: { base, color } }) => {
        if (error && touched) return base.accent.error;
        if (touched && error === undefined) return base.accent.success;
        return color.content;
      }} !important;
    }

    ::placeholder {
      color: inherit;
    }
  }
  ${({ theme: { base } }) => base.mq.bigPhoneBreak} {
    margin-bottom: 1.5em !important;
  }
  ${({ theme: { base } }) => base.mq.smallPhone} {
    margin-bottom: 2.5em !important;
  }
`;

const Input = ({ label, name, tagType, error, touched, parentBackground, ...rest }) => (
  <Wrapper error={error} touched={touched} className='form-control'>
    <label htmlFor={name}>
      <Field as={tagType} id={name} name={name} {...rest} placeholder={name} />
      <ActivePlaceholder parentBackground={parentBackground}>{name}.</ActivePlaceholder>
      <ErrorMessage name={name} />
    </label>
  </Wrapper>
);

export default Input;
