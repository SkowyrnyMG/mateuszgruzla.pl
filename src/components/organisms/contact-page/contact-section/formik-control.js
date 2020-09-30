import React from 'react';
import Input from 'components/organisms/contact-page/contact-section/input';

const FormikControl = ({ control, ...rest }) => {
  return <Input tagType={control} {...rest} />;
};

export default FormikControl;
