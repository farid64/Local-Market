import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AtmForm from "./Atm";
import { submitAtm } from "../../actions";

class AtmPage extends Component {
  submit = values => {
    console.log(values);
    this.props.submitAtm(values, this.props.history);
  };
  render() {
    return <AtmForm onSubmit={this.submit} />;
  }
}

export default connect(
  null,
  { submitAtm }
)(withRouter(AtmPage));
