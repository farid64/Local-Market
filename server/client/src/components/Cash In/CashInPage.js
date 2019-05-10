import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitAtm } from '../../actions';
import CashInForm from './CashIn';

class CashInPage extends Component {
  submit = values => {
    console.log(values);
    // this.props.submitAtm(values, this.props.history);
  };
  render() {
    return <CashInForm onSubmit={this.submit} />;
  }
}

export default connect(
  null,
  { submitAtm }
)(withRouter(CashInPage));
