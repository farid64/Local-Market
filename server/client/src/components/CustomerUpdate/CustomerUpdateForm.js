import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';
import FormTextField from '../FormTextField';
import FormDatePicker from '../FormDatePicker';
import FormPhoneNumber from '../FormPhoneNumber';

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
  },
  lineBreak: {
    flexBasis: '100%',
    width: 0,
    height: 0,
    overflow: 'hidden'
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
        minDate={moment('1/1/1930', 'MM/DD/YYYY')} //this is to get rid of warning about string conversion
        placeholder="10/15/2010"
        label="Birthday"
        name="birthday"
        component={FormDatePicker}
        type="text"
        normalize={value => new Date(value)}
      />

      <Divider className={classes.lineBreak} />

      <Field
        label="Phone Number"
        name="phonenumber"
        placeholder="(555) 555-5555"
        component={FormPhoneNumber}
        normalize={value => value.replace(/[^0-9]/gi, '')}
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

function validate(values) {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'You must provide First Name';
  }
  if (!values.lastname) {
    errors.lastname = 'You must porvide Last Name';
  }
  if (!values.birthday) {
    errors.birthday = 'You must porvide Date of Birth';
  }
  if (!values.phonenumber) {
    errors.phonenumber = 'You must porvide Phone #';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'customer_update'
})(withStyles(style)(CustomerUpdateForm));
