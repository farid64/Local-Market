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

  renderField = field => {
    return <input onChange={field.input.onChange} />;
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <NumPad action={this.handleChildData} />
        <input value={this.state.num} onChange={this.handleChange} />
        <Field name="test_num" component={this.renderField} />
        {console.log(this.state.num)}
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
