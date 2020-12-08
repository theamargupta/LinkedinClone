import React, { Fragment } from 'react';
import { useField } from 'formik';
import { CustomInput } from '../style';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>
        {label}
        {meta.touched && meta.error ? (
          <div className='error'> {meta.error}</div>
        ) : null}
      </label>

      <CustomInput
        primary={
          meta.touched && meta.error
            ? 'err'
            : meta.touched && !meta.error
            ? 'valid'
            : null
        }
        {...field}
        {...props}
      />
    </div>
  );
};

export default CustomTextInput;
