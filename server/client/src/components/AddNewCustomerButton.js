import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import AddBox from '@material-ui/icons/AddBox';

const styles = theme => ({
  addCustomerButton: {
    textDecoration: 'none'
  }
});

const AddCustomerButton = ({ classes, color, fontSize, ...rest }) => {
  return (
    <Tooltip title="Add New Customer">
      <Link
        to="/customer_update"
        aria-label="Open drawer"
        className={classes.addCustomerButton}
        {...rest}
      >
        <AddBox style={{ color, fontSize }} />
      </Link>
    </Tooltip>
  );
};

export default withStyles(styles)(AddCustomerButton);
