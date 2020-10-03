import React from 'react';
import Input from 'components/modules/formik-control/input';

const FormikControl = ({ control, error, parentBackground, ...rest }) => {
  return <Input tagType={control} error={error} parentBackground={parentBackground} {...rest} />;
};

export default FormikControl;
