import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import { Button, Grid, Paper } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/CancelTwoTone';
import FormDatePicker from '../FormDatePicker';
import FormNumberField from '../FormNumberField';
import FormSelectField from '../FormSelectField';
import moment from 'moment';
import nums from '../../utils/convertToNumber';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  leftSection: {
    border: '1px solid black'
  },
  rightSection: {
    border: '1px solid black'
  }
});

class BillPayFormPage2 extends Component {
  render() {
    const { classes, handleSubmit, previousPage } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={24}>
          <Grid item xs={6} className={classes.leftSection}>
            <Field
              keyboard
              minDate={moment('1/1/1930', 'MM/DD/YYYY')}
              placeholde="10/15/2010"
              label="test"
              name="test"
              component={FormDatePicker}
              normalize={value => new Date(value)}
            />
          </Grid>
          <Grid item xs={6} className={classes.rightSection}>
            <Field
              label="Amount Tendered"
              name="amountTendered"
              prefix="$"
              component={FormNumberField}
              normalize={value => nums(value)}
            />
          </Grid>
        </Grid>

        <Button type="submit" variant="contained">
          Submit
        </Button>
        <Button
          onClick={previousPage}
          variant="contained"
          color="secondary"
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
  initialValues: {
    amountTendered: 0
  },
  destroyOnUnmount: false
})(withRouter(withStyles(styles)(BillPayFormPage2)));

export default connect(mapStateToProps)(BillPayFormPage2);
