import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormTextField from '../FormTextField';
import DateComponent from '../DateTimePicker/DateComponent';

const style = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

const CustomerUpdateForm = ({ handleSubmit, classes }) => {
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <Field
        label="First Name"
        name="firstname"
        component={FormTextField}
        type="text"
      />
      <Field
        label="Last Name"
        name="lastname"
        component={FormTextField}
        type="text"
      />
      <Field
        keyboard
        minDate="2/13/2005"
        label="Birthday"
        name="birthday"
        component={DateComponent}
        type="text"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Update
      </Button>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'customer_update'
})(withStyles(style)(CustomerUpdateForm));
