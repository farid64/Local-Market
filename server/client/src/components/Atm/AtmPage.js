import React from 'react';
import { connect } from 'react-redux';
import { history } from 'react-router-dom';
import AtmForm from './Atm.1.Form';
import { submitAtm } from '../../actions';

const submit = values => {
  console.log(values);
};

const AtmPage = () => {
  return <AtmForm onSubmit={submit} />;
};

export default AtmPage;
