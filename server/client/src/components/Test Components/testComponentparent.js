import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Child from './testComponentChild';
import Child2 from '../FormSelectField';

class componentWrapper extends Component {
  handleChildData = data => {
    console.log(data);
    return <div>{data ? data : 'this is wrong'}</div>;
  };
  render() {
    return (
      <React.Fragment>
        <Child action={this.handleChildData} />
        {this.handleChildData()}
      </React.Fragment>
    );
  }
}

export default reduxForm({
  form: 'test'
})(componentWrapper);
