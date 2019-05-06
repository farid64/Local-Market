import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import BillPayFormPage1 from './BillPayFormPage1';
import BillPayFormPage2 from './BillPayFormPage2';
import CustomerName from '../CustomerName';
// import { submitBillPay } from '../../actions';

class BillPayPage extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }
  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  submit = values => {
    console.log(values);
  };

  render() {
    const { page } = this.state;
    return (
      <React.Fragment>
        <CustomerName />
        {page === 1 && <BillPayFormPage1 onSubmit={this.nextPage} />}
        {page === 2 && (
          <BillPayFormPage2
            previousPage={this.previousPage}
            onSubmit={this.submit}
          />
        )}
      </React.Fragment>
    );
  }
}

BillPayPage = reduxForm({
  form: 'bill_pay',
  destroyOnUnmount: true
})(BillPayPage);

export default connect(
  null,
  {}
)(withRouter(BillPayPage));
