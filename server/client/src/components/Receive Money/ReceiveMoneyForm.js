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
import nums from '../../utils/convertToNumber';
import CustomerName from '../CustomerName';

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

class ReceiveMoneyForm extends React.Component {
  render() {
    const { classes, history, handleSubmit } = this.props;

    return (
      <React.Fragment>
        <CustomerName />
        <form className={classes.container} onSubmit={handleSubmit}>
          <Field
            label='Money Transfer Organization'
            name='moneyTransferOrg'
            component={FormSelectField}
            className={classes.textField}
          >
            <option value='Afex'>Afex</option>
            <option value='Vergo'>Vergo</option>
            <option value='westernUnion'>Western Union</option>
          </Field>

          <Divider className={classes.lineBreak} />

          <Field
            label='Reference Number / Folio'
            name='RefNum'
            component={FormTextField}
            className={classes.textField}
            type='text'
          />

          <Divider className={classes.lineBreak} />

          <Field
            label='Amount'
            name='amount'
            className={classes.textField}
            component={FormNumberField}
            placeholder='$1500'
            prefix='$'
            normalize={value => nums(value)}
          />

          <Divider className={classes.lineBreak} />

          <Field
            label='Comments'
            name='comment'
            variant='outlined'
            component={FormTextField}
            multiline
            rows='4'
            margin='normal'
          />

          <Divider className={classes.lineBreak} />

          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
          >
            <MoneyIcon className={classes.leftIcon} />
            Finish and Pay
          </Button>

          <Button
            onClick={() => history.push('/')}
            variant='contained'
            color='secondary'
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
  if (!values.moneyTransferOrg) {
    errors.moneyTransferOrg = 'You must provide a value';
  }
  if (!values.RefNum) {
    errors.RefNum = 'You must provide a value';
  }
  if (!values.amount) {
    errors.amount = 'You must provide a value';
  }

  return errors;
}

ReceiveMoneyForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    receivemoneyValues: state.form.receive_money
  };
};

ReceiveMoneyForm = reduxForm({
  validate,
  form: 'receive_money'
})(withRouter(withStyles(styles)(ReceiveMoneyForm)));

export default connect(mapStateToProps)(ReceiveMoneyForm);
