import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const style = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const FormField = ({
  classes,
  input,
  label,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <React.Fragment>
      <TextField
        {...input}
        className={classes.textField}
        label={label}
        helperText={touched && error}
        FormHelperTextProps={{ error: true }}
        {...rest}
      />
    </React.Fragment>
  );
};

export default withStyles(style)(FormField);
