import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const style = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const FormField = ({ classes, input, label }) => {
  return (
    <React.Fragment>
      <TextField
        className={classes.textField}
        {...input}
        label={label}
        variant="outlined"
      />
    </React.Fragment>
  );
};

export default withStyles(style)(FormField);
