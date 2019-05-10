import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MoneyIcon from '@material-ui/icons/MoneyTwoTone';
import CancelIcon from '@material-ui/icons/CancelTwoTone';
import Divider from '@material-ui/core/Divider';
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

class CashIn extends React.Component {
  render() {
    const { classes, history, handleSubmit } = this.props;

    return (
      <React.Fragment>
        <form className={classes.container} onSubmit={handleSubmit}>
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
  if (!values.amount) {
    errors.amount = 'You must provide a value';
  }

  if (!values.comment) {
    errors.comment = 'Please provide a comment';
  }

  return errors;
}

CashIn.propTypes = {
  classes: PropTypes.object.isRequired
};

CashIn = reduxForm({
  validate,
  form: 'cash_in'
})(withRouter(withStyles(styles)(CashIn)));

export default CashIn;
