import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MoneyIcon from '@material-ui/icons/MoneyTwoTone';
import CancelIcon from '@material-ui/icons/CancelTwoTone';
import { Divider } from '@material-ui/core';
import FormSelectField from '../FormSelectField';
import FormTextField from '../FormTextField';
import FormNumberField from '../FormNumberField';
import FormRadioField from '../FormRadioField';
import nums from '../../utils/convertToNumber';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '50%'
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  lineBreak: {
    flexBasis: '100%',
    width: 0,
    height: 0,
    overflow: 'hidden'
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  cashContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

class BillPayFormPage1 extends React.Component {
  componentDidUpdate() {
    this.props.autofill(
      'amountToBePaid',
      this.props.billpayValues.values
        ? this.handleCashCalc(this.props.billpayValues)
        : ''
    );
  }

  handleCashCalc = billpayValues => {
    let { billAmount, serviceAmount } = billpayValues.values;
    billAmount = billAmount ? billAmount : 0;
    serviceAmount = serviceAmount ? serviceAmount : 0;
    return billAmount + serviceAmount;
  };

  render() {
    const { classes, history, handleSubmit } = this.props;

    return (
      <React.Fragment>
        <form className={classes.container} onSubmit={handleSubmit}>
          <Field
            label="Bill Pay Vendor"
            name="billPayVendor"
            component={FormSelectField}
            className={classes.textField}
          >
            <option value="Afex">Afex</option>
            <option value="Ipps">Ipps</option>
          </Field>

          <Field
            label="Service Type"
            name="billPayServiceType"
            component={FormRadioField}
          >
            <option value="inNetword" label="In Network" />
            <option value="outNetwork" label="Out Of Network" />
            <option value="justInTime" label="Just In Time" />
          </Field>

          <Divider className={classes.lineBreak} />

          <Field
            label="Confirmation Number"
            name="ConfNum"
            component={FormTextField}
            className={classes.textField}
            type="text"
          />

          <Divider className={classes.lineBreak} />

          <Field
            label="Bill Amount"
            name="billAmount"
            className={classes.textField}
            component={FormNumberField}
            placeholder="$1500"
            prefix="$"
            decimalScale={2}
            fixedDecimalScale
            normalize={value => nums(value)}
          />

          <Divider className={classes.lineBreak} />

          <Field
            label="Servie Amount"
            name="serviceAmount"
            className={classes.textField}
            component={FormNumberField}
            placeholder="$1.5"
            prefix="$"
            decimalScale={2}
            fixedDecimalScale
            normalize={value => nums(value)}
          />

          <Divider className={classes.lineBreak} />

          <Field
            label="Amount to be paid"
            name="amountToBePaid"
            className={classes.textField}
            component={FormNumberField}
            placeholder="$1,470"
            prefix="$"
            decimalScale={2}
            fixedDecimalScale
            ReadOnly
          />

          <Divider className={classes.lineBreak} />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <MoneyIcon className={classes.leftIcon} />
            Continue
          </Button>

          <Button
            onClick={() => history.push('/')}
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            <CancelIcon className={classes.leftIcon} />
            Cancel
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.billPayVendor) {
    errors.billPayVendor = 'You must provide a value';
  }
  if (!values.ConfNum) {
    errors.ConfNum = 'You must provide a value';
  }
  if (!values.billAmount) {
    errors.billAmount = 'You must provide a value';
  }
  if (!values.billPayServiceType) {
    errors.billPayServiceType = 'Please choose an option';
  }
  if (!values.serviceAmount) {
    errors.serviceAmount = 'Please enter a value';
  }

  return errors;
}

BillPayFormPage1.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    billpayValues: state.form.bill_pay
  };
};

BillPayFormPage1 = reduxForm({
  validate,
  form: 'bill_pay',
  destroyOnUnmount: false
})(withRouter(withStyles(styles)(BillPayFormPage1)));

export default connect(mapStateToProps)(BillPayFormPage1);
