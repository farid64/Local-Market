import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({});

const componentChild = ({ action }) => {
  action('here is the data from child (me)');
  return (
    <div>
      <TextField label="hello" placeholder="no" />
    </div>
  );
};

export default withStyles(styles)(componentChild);
