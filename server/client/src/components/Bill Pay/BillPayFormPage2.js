import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/CancelTwoTone';
import numeral from 'numeral';
import nums from '../../utils/convertToNumber';
import NumPadField from '../NumPadField';
import FormNumberField from '../FormNumberField';
import FormSelectField from '../FormSelectField';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  leftSection: {
    // border: '1px solid black'
  },
  rightSection: {
    // border: '1px solid black'
  },
  methodField: {
    width: '100%',
    marginTop: 20
  },
  lineBreak: {
    flexBasis: '100%',
    width: 0,
    height: 0,
    overflow: 'hidden'
  }
});

class BillPayFormPage2 extends Component {
  componentDidUpdate() {
    this.props.autofill(
      'balanceDue',
      this.props.billpayValues.values
        ? this.props.billpayValues.values.amountToBePaid
        : ''
    );
  }

  render() {
    const {
      classes,
      handleSubmit,
      previousPage,
      billpayValues: {
        values: { amountToBePaid }
      }
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={24}>
          <Grid item xs={6} className={classes.leftSection}>
            <List dense>
              <ListItem>
                <ListItemText primary="Amount: " />
                <ListItemSecondaryAction>
                  {numeral(amountToBePaid).format('$0,0.00')}
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="Tax Amount: " />
                <ListItemSecondaryAction>$0.00</ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="Total Sales: " />
                <ListItemSecondaryAction>
                  {numeral(amountToBePaid).format('$0,0.00')}
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="CRV Amount: " />
                <ListItemSecondaryAction>$0.00</ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Total Amount: " />
                <ListItemSecondaryAction>
                  {numeral(amountToBePaid).format('$0,0.00')}
                </ListItemSecondaryAction>
              </ListItem>
            </List>

            <Field
              label="Balance Due"
              name="balanceDue"
              component={FormNumberField}
              placeholder="$45.00"
              prefix="$"
              ReadOnly
              decimalScale={2}
              fixedDecimalScale
              normalize={value => nums(value ? value : '0')}
            />

            <Divider className={classes.lineBreak} />

            <Field
              label="Method of Payment"
              name="methodOfPayment"
              component={FormSelectField}
              className={classes.methodField}
            >
              <option value="cash">Cash</option>
              <option value="creditCard">Credit Card</option>
            </Field>
          </Grid>
          <Grid item xs={6} className={classes.rightSection}>
            <Field
              label="Amount Tendered"
              name="amountTendered"
              height={75}
              width={231}
              component={NumPadField}
              normalize={value => nums(value ? value : '0')}
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

function validate(values) {
  const errors = {};
  if (!values.amountTendered) {
    errors.amountTendered = 'Please provide an amount';
  }
  return errors;
}

const mapStateToProps = state => {
  return {
    billpayValues: state.form.bill_pay
  };
};

BillPayFormPage2 = reduxForm({
  validate,
  form: 'bill_pay',
  destroyOnUnmount: false
})(withRouter(withStyles(styles)(BillPayFormPage2)));

export default connect(mapStateToProps)(BillPayFormPage2);
