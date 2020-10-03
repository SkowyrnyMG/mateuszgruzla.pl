import React from 'react';
import Input from 'components/organisms/contact-page/contact-section/input';

const FormikControl = ({ control, error, ...rest }) => {
  return <Input tagType={control} error={error} {...rest} />;
};

export default FormikControl;
