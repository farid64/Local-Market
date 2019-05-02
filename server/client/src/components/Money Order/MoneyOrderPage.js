import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoneyOrderForm from './MoneyOrderForm';
import { submitMoneyOrder } from '../../actions';

class MoneyOrderPage extends React.Component {
  submit = values => {
    console.log(values);
    this.props.submitMoneyOrder(values, this.props.history);
  };
  render() {
    return <MoneyOrderForm onSubmit={this.submit} />;
  }
}

export default connect(
  null,
  { submitMoneyOrder }
)(withRouter(MoneyOrderPage));
