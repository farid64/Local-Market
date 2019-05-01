import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core';

const FormRadioField = ({ input, label, children, ...rest }) => {
  return (
    <React.Fragment>
      <FormControl component='fieldset' {...rest}>
        <FormLabel component='legend'>{label}</FormLabel>
        <RadioGroup aria-label='label' {...input}>
          {children.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                value={item.props.value}
                control={<Radio />}
                label={item.props.label}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
};

export default FormRadioField;
