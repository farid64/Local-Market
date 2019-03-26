import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, Fields, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MoneyIcon from '@material-ui/icons/MoneyTwoTone';
import CancelIcon from '@material-ui/icons/CancelTwoTone';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import CustomerName from '../CustomerName';
import nums from '../../utils/convertToNumber';
import FormTextField from '../FormTextField';
import FormNumberField from '../FormNumberField';

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
    fontSize: 15
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const renderFields = fields => {
  const amount = fields.amount.input.value
    ? nums(fields.amount.input.value)
    : null;
  const fixedFee = fields.fixedFee.input.value
    ? nums(fields.fixedFee.input.value)
    : null;
  const feesPercentage = fields.feesPercentage.input.value
    ? nums(fields.feesPercentage.input.value)
    : null;
  console.log(amount, fixedFee, feesPercentage);
  let cash = 0;
  if (amount) {
    if (fixedFee && !feesPercentage) {
      cash = amount - fixedFee;
    } else if (!fixedFee && feesPercentage) {
      cash = amount * (1 - feesPercentage / 100);
    } else if (fixedFee && feesPercentage) {
      cash = amount - _.max([fixedFee, amount * (feesPercentage / 100)]);
    }
  }
  return (
    <React.Fragment>
      <FormNumberField
        label="Amount"
        placeholder="$1500"
        prefix="$"
        {...fields.amount.input}
      />
      <FormNumberField
        label="Fixed Fee"
        placeholder="$5"
        prefix="$"
        {...fields.fixedFee.input}
      />
      <FormNumberField
        label=" Fees Percentage"
        placeholder="%10"
        prefix="%"
        {...fields.feesPercentage.input}
      />
      <Typography className={styles.text}>Cash To Customer:</Typography>

      <FormNumberField
        placeholder="$1400"
        prefix="$"
        value={cash}
        {...fields.cash.input}
      />
    </React.Fragment>
  );
};

const Atm = ({ classes, history, handleSubmit }) => {
  return (
    <React.Fragment>
      <CustomerName />
      <form className={classes.container} onSubmit={handleSubmit}>
        <Field
          label="Authorization Number"
          name="authorization"
          component={FormTextField}
          type="text"
        />

        <Divider className={classes.lineBreak} />

        <Fields
          names={['amount', 'fixedFee', 'feesPercentage', 'cash']}
          component={renderFields}
        />

        <Divider className={classes.lineBreak} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.buton}
        >
          <MoneyIcon className={classes.leftIcon} />
          Finish and Pay
        </Button>
      </form>

      <Button
        onClick={() => history.push('/')}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        <CancelIcon className={classes.leftIcon} />
        Cancel
      </Button>
    </React.Fragment>
  );
};

Atm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'atm',
  initialValues: {
    amount: '200',
    fixedFee: '1',
    feesPercentage: '',
    cash: '199'
  }
})(withRouter(withStyles(styles)(Atm)));
