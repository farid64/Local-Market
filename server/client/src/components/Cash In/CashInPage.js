import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitCashIn } from '../../actions';
import CashInForm from './CashIn';

class CashInPage extends Component {
  submit = values => {
    console.log(values);
    this.props.submitCashIn(values, this.props.history);
  };
  render() {
    return <CashInForm onSubmit={this.submit} />;
  }
}

export default connect(
  null,
  { submitCashIn }
)(withRouter(CashInPage));
