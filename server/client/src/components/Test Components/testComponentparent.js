import React, { Component } from 'react';
import { Field, reduxForm, formValues } from 'redux-form';
import Child from './testComponentChild';
import Child2 from '../FormSelectField';
import { Button } from '@material-ui/core';
import NumPad from './testNumPad';

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
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="test_num"
          label="Cash"
          height="100"
          width="306"
          component={NumPad}
        />
        <Button type="submit"> submit </Button>
      </form>
    );
  }
}

ComponentWrapper = reduxForm({
  form: 'test'
})(ComponentWrapper);

const submit = values => {
  console.log(values);
};

const toExport = () => {
  return <ComponentWrapper onSubmit={submit} />;
};

export default toExport;
