import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import TextField from '@material-ui/core/TextField';

const TextMaskCustom = ({ inputRef, ...rest }) => {
  return (
    <MaskedInput
      {...rest}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={'\u2000'}
    />
  );
};

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

const FormPhoneNumber = ({ input, label, placeholder }) => {
  return (
    <React.Fragment>
      <TextField
        {...input}
        label={label}
        InputProps={{
          inputComponent: TextMaskCustom
        }}
        placeholder={placeholder}
      />
    </React.Fragment>
  );
};

export default FormPhoneNumber;
