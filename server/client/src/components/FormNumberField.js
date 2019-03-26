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

const FormNumberField = ({ label, prefix, placeholder, ...rest }) => {
  return (
    <React.Fragment>
      <TextField
        {...rest}
        label={label}
        InputProps={{
          inputComponent: NumberFormatCustom
        }}
        placeholder={placeholder}
        inputProps={{
          prefix
        }}
      />
    </React.Fragment>
  );
};

export default FormNumberField;
