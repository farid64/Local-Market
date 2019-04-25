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
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import FormTextField from '../FormTextField';
import FormNumberField from '../FormNumberField';
import nums from '../../utils/convertToNumber';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
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

class Atm extends React.Component {
  componentDidUpdate() {
    this.props.autofill(
      'cash',
      this.props.atmValues.values
        ? this.handleCashCalc(this.props.atmValues)
        : ''
    );
  }

  handleCashCalc = atmValues => {
    let { amount, fixedFee, feesPercentage } = atmValues.values;
    amount = amount ? amount : null;
    fixedFee = fixedFee ? fixedFee : null;
    feesPercentage = feesPercentage ? feesPercentage : null;
    if (amount) {
      if (fixedFee && !feesPercentage) {
        return amount - fixedFee;
      } else if (!fixedFee && feesPercentage) {
        return amount * (1 - feesPercentage / 100);
      } else if (fixedFee && feesPercentage) {
        return amount - _.max([fixedFee, amount * (feesPercentage / 100)]);
      }
    }
  };

  render() {
    const { classes, history, handleSubmit } = this.props;

    return (
      <React.Fragment>
        <form className={classes.container} onSubmit={handleSubmit}>
          <Field
            label="Authorization Number"
            name="authorization"
            component={FormTextField}
            className={classes.textField}
            type="text"
          />

          <Divider className={classes.lineBreak} />

          <Field
            label="Amount"
            name="amount"
            className={classes.textField}
            component={FormNumberField}
            placeholder="$1500"
            prefix="$"
            normalize={value => nums(value)}
          />

          <Divider className={classes.lineBreak} />

          <Field
            label="Fixed Fee"
            name="fixedFee"
            className={classes.textField}
            component={FormNumberField}
            placeholder="$1500"
            prefix="$"
            normalize={value => nums(value)}
          />

          <Field
            label="Fees Percentage"
            name="feesPercentage"
            className={classes.textField}
            component={FormNumberField}
            placeholder="%10"
            prefix="%"
            normalize={value => nums(value)}
          />

          <Divider className={classes.lineBreak} />

          <div className={classes.cashContainer}>
            <Typography className={classes.text}>Cash To Customer:</Typography>

            <Field
              name="cash"
              className={classes.textField}
              component={FormNumberField}
              placeholder="$1,470"
              prefix="$"
              ReadOnly
            />
          </div>

          <Divider className={classes.lineBreak} />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <MoneyIcon className={classes.leftIcon} />
            Finish and Pay
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
  if (!values.authorization) {
    errors.authorization = 'You must provide a value';
  }
  if (!values.fixedFee) {
    errors.fixedFee = 'You must provide a value';
  }
  if (!values.feesPercentage) {
    errors.feesPercentage = 'You must provide a value';
  }
  if (!values.amount) {
    errors.amount = 'You must provide a value';
  }

  return errors;
}

Atm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    atmValues: state.form.atm
  };
};

Atm = reduxForm({
  validate,
  form: 'atm'
})(withRouter(withStyles(styles)(Atm)));

export default connect(mapStateToProps)(Atm);
