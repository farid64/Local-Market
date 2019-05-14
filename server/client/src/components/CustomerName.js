import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  text: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const customerName = ({ classes, customerSelected }) => {
  return (
    <Typography
      component='h1'
      variant='h5'
      color='inherit'
      noWrap
      className={classes.text}
    >
      Customer: {customerSelected.firstname} {customerSelected.lastname}
    </Typography>
  );
};

const mapStateToProps = state => {
  return {
    customerSelected: state.search.customerSelected
  };
};

export default connect(mapStateToProps)(withStyles(styles)(customerName));
