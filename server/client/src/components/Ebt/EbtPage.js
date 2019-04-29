import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EbtForm from './EbtForm';
import { submitEbt } from '../../actions';

class EbtPage extends Component {
  submit = values => {
    console.log(values);
    this.props.submitEbt(values, this.props.history);
  };
  render() {
    return <EbtForm onSubmit={this.submit} />;
  }
}

export default connect(
  null,
  { submitEbt }
)(withRouter(EbtPage));
