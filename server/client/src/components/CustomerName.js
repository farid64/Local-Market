import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const customerName = ({ customerSelected }) => {
  return (
    <Typography component="h1" variant="h5" color="inherit" noWrap>
      Customer: {customerSelected.firstname} {customerSelected.lastname}
    </Typography>
  );
};

const mapStateToProps = state => {
  return {
    customerSelected: state.search.customerSelected
  };
};

export default connect(mapStateToProps)(customerName);
