import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import numeral from "numeral";

const style = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const FormNumberField = ({
  classes,
  input: { value, ...rest },
  label,
  meta: { touched, error }
}) => {
  console.log(numeral(value).format("$0,0.00"), rest);
  return (
    <React.Fragment>
      <TextField
        value={value}
        {...rest}
        className={classes.textField}
        label={label}
        helperText={touched && error}
      />
    </React.Fragment>
  );
};

export default withStyles(style)(FormNumberField);
