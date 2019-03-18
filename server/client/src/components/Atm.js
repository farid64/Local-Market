import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MoneyIcon from '@material-ui/icons/MoneyTwoTone';
import CancelIcon from '@material-ui/icons/CancelTwoTone';
import { Typography } from '@material-ui/core';
import CustomerName from './CustomerName';
import { submitAtm } from '../actions';

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
    Authorization: '',
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
      <div>
        <CustomerName />
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Authorization Number"
            style={{ width: '50%' }}
            className={classes.textField}
            value={this.state.Authorization}
            onChange={this.handleChange('Authorization')}
            margin="normal"
            variant="outlined"
          />

          <break className={classes.lineBreak} />

          <TextField
            id="outlined-number"
            label="Amount"
            type="number"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
          />

          <break className={classes.lineBreak} />

          <TextField
            id="outlined-number"
            label="Fixed Fee"
            type="number"
            value={this.state.fixedFee}
            onChange={this.handleChange('fixedFee')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-number"
            label="Fees Percentage"
            type="number"
            value={this.state.feePercentage}
            onChange={this.handleChange('feePercentage')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
          />

          <break className={classes.lineBreak} />

          <Typography className={classes.text}>Cash To Customer:</Typography>
          <TextField
            id="outlined-bare"
            className={classes.textField}
            placeholder=" 0.00 "
            value={this.state.cash}
            margin="normal"
            variant="outlined"
          />

          {/* <break className={classes.lineBreak} /> */}
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
      </div>
    );
  }
}

Atm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  { submitAtm }
)(withRouter(withStyles(styles)(Atm)));
