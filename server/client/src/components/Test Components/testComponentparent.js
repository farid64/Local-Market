import React, { Component } from 'react';
import { Field, reduxForm, formValues } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Child from './testComponentChild';
import Child2 from '../FormSelectField';
import { Button } from '@material-ui/core';
import NumPad from './testNumPad';
import NumberField from './testNumberFieldReverse';
import nums from '../../utils/convertToNumber';

const styles = theme => ({
  textField: {
    width: '50%'
  }
});

class ComponentWrapper extends Component {
  state = {
    num: ''
  };
  handleChildData = data => {
    this.setState({ num: this.state.num + data });
  };

  handleChange = event => {
    this.setState({ num: event.currentTarget.value });
  };

  render() {
    const { handleSubmit, classes } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name='test_num'
          label='Cash'
          prefix='$'
          decimalScale={2}
          fixedDecimalScale
          component={NumberField}
          normalize={value => (value ? nums(value) : '')}
          className={classes.textField}
        />

        <Field
          name='test_num_pad'
          label='numpad'
          component={NumPad}
          height={75}
          width={231}
          normalize={value => (value ? nums(value) : '')}
        />
        <Button type='submit'> submit </Button>
      </form>
    );
  }
}

ComponentWrapper = reduxForm({
  form: 'test'
})(withStyles(styles)(ComponentWrapper));

const submit = values => {
  console.log(values);
};

const toExport = () => {
  return <ComponentWrapper onSubmit={submit} />;
};

export default withStyles(styles)(toExport);
