import React from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

import ActivePlaceholder from 'components/organisms/contact-page/contact-section/active-placeholder';

const Wrapper = styled.span`
  position: relative;
  display: block;
`;

const Input = ({ label, name, tagType, ...rest }) => (
  <Wrapper className='form-control'>
    <label htmlFor={name}>
      <Field as={tagType} id={name} name={name} {...rest} placeholder={name} />
      <ActivePlaceholder>{name}.</ActivePlaceholder>
      <ErrorMessage name={name} />
    </label>
  </Wrapper>
);

export default Input;
