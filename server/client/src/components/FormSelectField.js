import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

const FormField = ({ classes, input, label, children, ...rest }) => {
  console.log(children);
  return (
    <React.Fragment>
      <FormControl className={classes.formControl} {...rest}>
        <InputLabel htmlFor='age-simple'>{label}</InputLabel>
        <Select {...input}>
          {children.map((item, index) => {
            return (
              <MenuItem key={index} value={item.props.value}>
                {item.props.children}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default withStyles(styles)(FormField);
