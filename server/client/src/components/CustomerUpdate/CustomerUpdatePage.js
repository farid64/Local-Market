import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UpdateForm from './CustomerUpdateForm';
import { submitCustomerUpdate } from '../../actions';

class CustomerUpdatePage extends Component {
  submit = values => {
    console.log(values);
    this.props.submitCustomerUpdate(values, this.props.history);
  };
  render() {
    return <UpdateForm onSubmit={this.submit} />;
  }
}

export default connect(
  null,
  { submitCustomerUpdate }
)(withRouter(CustomerUpdatePage));
