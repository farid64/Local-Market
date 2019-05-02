import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import { Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/CancelTwoTone';
import FormDatePicker from '../FormDatePicker';
import moment from 'moment';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

class BillPayFormPage2 extends Component {
  render() {
    const { classes, handleSubmit, previousPage } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          keyboard
          minDate={moment('1/1/1930', 'MM/DD/YYYY')}
          placeholde='10/15/2010'
          label='test'
          name='test'
          component={FormDatePicker}
          normalize={value => new Date(value)}
        />
        <Button type='submit' variant='contained'>
          Submit
        </Button>
        <Button
          onClick={previousPage}
          variant='contained'
          color='secondary'
          className={classes.button}
        >
          <CancelIcon className={classes.leftIcon} />
          Back
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    billpayValues: state.form.bill_pay
  };
};

BillPayFormPage2 = reduxForm({
  // validate,
  form: 'bill_pay',
  destroyOnUnmount: false
})(withRouter(withStyles(styles)(BillPayFormPage2)));

export default connect(mapStateToProps)(BillPayFormPage2);
