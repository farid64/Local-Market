import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReceiveMoneyForm from './ReceiveMoneyForm';
import { submitReceiveMoney } from '../../actions';

class ReceiveMoneyPage extends Component {
  submit = values => {
    console.log(values);
    this.props.submitReceiveMoney(values, this.props.history);
  };
  render() {
    return <ReceiveMoneyForm onSubmit={this.submit} />;
  }
}

export default connect(
  null,
  { submitReceiveMoney }
)(withRouter(ReceiveMoneyPage));
