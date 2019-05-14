import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

const FormField = ({
  classes,
  input,
  label,
  children,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <React.Fragment>
      <FormControl className={classes.formControl} {...rest}>
        <InputLabel>{label}</InputLabel>
        <Select {...input}>
          {children.map((item, index) => {
            return (
              <MenuItem key={index} value={item.props.value}>
                {item.props.children}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText error>{touched && error}</FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export default withStyles(styles)(FormField);
