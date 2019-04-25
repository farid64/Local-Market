import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UpdateForm from './CustomerUpdateForm';
import CustomerTransactionHistory from './CustomerInfoTable';
import { submitCustomerUpdate } from '../../actions';

class CustomerUpdatePage extends Component {
  submit = values => {
    console.log(values);
    this.props.submitCustomerUpdate(values, this.props.history);
  };
  render() {
    return (
      <React.Fragment>
        <UpdateForm onSubmit={this.submit} />
        <CustomerTransactionHistory />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { submitCustomerUpdate }
)(withRouter(CustomerUpdatePage));
