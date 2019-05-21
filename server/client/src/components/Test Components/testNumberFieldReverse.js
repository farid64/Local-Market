import React from 'react';
import NumberFormat from 'react-number-format';
import { TextField } from '@material-ui/core';

const NumberField = ({
  label,
  prefix,
  input,
  decimalScale,
  fixedDecimalScale,
  inputRef,
  ...rest
}) => {
  return (
    <NumberFormat
      label={label}
      customInput={TextField}
      thousandSeparator
      prefix={prefix}
      decimalScale={decimalScale}
      fixedDecimalScale
      inputRef={inputRef}
      {...input}
      {...rest}
    />
  );
};

export default NumberField;
