import React, { Component } from "react";
import UpdateForm from "./CustomerUpdateForm";

class CustomerUpdatePage extends Component {
  submit = values => {
    console.log(values);
  };
  render() {
    return <UpdateForm onSubmit={this.submit} />;
  }
}

export default CustomerUpdatePage;
