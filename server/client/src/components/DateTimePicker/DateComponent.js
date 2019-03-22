import React, { useState } from 'react';
import { DatePicker } from 'material-ui-pickers';
import PickerRoot from './PickerRoot';

function DateComponent({ input: { onChange, value }, ...rest }) {
  console.log(value);
  return (
    <DatePicker
      format="dd/MM/yyyy"
      value={!value ? null : new Date(value)}
      onChange={onChange}
      mask={value =>
        value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : []
      }
      {...rest}
    />
  );
}

export default PickerRoot(DateComponent);
