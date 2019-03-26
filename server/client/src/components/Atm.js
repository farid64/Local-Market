import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MoneyIcon from '@material-ui/icons/MoneyTwoTone';
import CancelIcon from '@material-ui/icons/CancelTwoTone';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import CustomerName from './CustomerName';
import { submitAtm } from '../actions';
import FormTextField from './FormTextField';
import FormNumberField from './FormNumberField';

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

class Atm extends React.Component {
  state = {
    authorization: '',
    amount: 0,
    fixedFee: 1,
    feePercentage: 0,
    cash: 0
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      cash: this.state.amount - this.state.fixedFee
    });
  };

  handleSubmit = () => {
    const values = this.state;
    const { history } = this.props;
    this.props.submitAtm(values, history);
  };

  render() {
    const { classes, history } = this.props;

    return (
      <React.Fragment>
        <CustomerName />
        <form className={classes.container} noValidate autoComplete="off">
          <Field
            label="Authorization Number"
            name="authorization"
            component={FormTextField}
            type="text"
          />

          <Divider className={classes.lineBreak} />

          <Field
            label="Amount"
            name="amount"
            component={FormNumberField}
            placeholder="$1500"
            prefix="$"
          />

          <Divider className={classes.lineBreak} />

          <Field
            label="Fixed Fee"
            name="fixedFee"
            component={FormNumberField}
            placeholder="$1500"
            prefix="$"
          />

          <Field
            label="Fees Percentage"
            name="feesPercentage"
            component={FormNumberField}
            placeholder="%10"
            prefix="%"
          />

          <Divider className={classes.lineBreak} />

          <Typography className={classes.text}>Cash To Customer:</Typography>

          <TextField
            id="outlined-bare"
            className={classes.textField}
            placeholder=" 0.00 "
            value={this.state.cash}
            margin="normal"
            variant="outlined"
          />
        </form>

        <Button
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          className={classes.buton}
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
      </React.Fragment>
    );
  }
}

Atm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'atm'
})(withRouter(withStyles(styles)(Atm)));
