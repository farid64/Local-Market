import React from 'react';
import { DatePicker } from 'material-ui-pickers';
import PickerRoot from './PickerRoot';

function FormDatePicker({ input: { onChange, value }, ...rest }) {
  return (
    <DatePicker
      format="MM/DD/YYYY"
      value={!value ? null : value}
      onChange={onChange}
      mask={value =>
        value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : []
      }
      {...rest}
    />
  );
}

export default PickerRoot(FormDatePicker);
