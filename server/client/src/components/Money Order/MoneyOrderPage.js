import React from "react";
import { connect } from "react-redux";
import { history } from "react-router-dom";
import MoneyOrderForm from "./MoneyOrderForm";
import { submitAtm } from "../../actions";

const submit = values => {
  console.log(values);
};

const MoneyOrderPage = () => {
  return <MoneyOrderForm onSubmit={submit} />;
};

export default MoneyOrderPage;
