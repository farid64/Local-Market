import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitCashOut } from '../../actions';
import CashOutForm from './CashOut';

class CashOutPage extends Component {
  submit = values => {
    console.log(values);
    this.props.submitCashOut(values, this.props.history);
  };
  render() {
    return <CashOutForm onSubmit={this.submit} />;
  }
}

export default connect(
  null,
  { submitCashOut }
)(withRouter(CashOutPage));
