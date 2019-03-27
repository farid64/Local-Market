import React, { Component } from "react";
import Child from "./testComponentChild";

class componentWrapper extends Component {
  handleChildData = data => {
    console.log(data);
    return <div>{data ? data : "this is wrong"}</div>;
  };
  render() {
    return (
      <React.Fragment>
        <Child action={this.handleChildData} />
        {this.handleChildData()}
      </React.Fragment>
    );
  }
}

export default componentWrapper;
