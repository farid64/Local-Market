import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

const NumberFormatCustom = ({ inputRef, onChange, ...rest }) => {
  return <NumberFormat getInputRef={inputRef} thousandSeparator {...rest} />;
};

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const FormNumberField = ({
  label,
  prefix,
  placeholder,
  input,
  ReadOnly,
  ...rest
}) => {
  return (
    <React.Fragment>
      <TextField
        {...input}
        label={label}
        InputProps={{
          inputComponent: NumberFormatCustom
        }}
        placeholder={placeholder}
        inputProps={{
          prefix,
          readOnly: ReadOnly
        }}
        {...rest}
      />
    </React.Fragment>
  );
};

export default FormNumberField;
