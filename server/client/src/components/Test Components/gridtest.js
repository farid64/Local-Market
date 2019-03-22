import React, { useState } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DatePicker from '../DateTimePicker/DateComponent';

const style = theme => ({
  grid_item: {
    border: `1px solid black`
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  commentBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentField: {
    width: '90%'
  }
});

const TestGrid = ({ classes }) => {
  return (
    <Grid container>
      <Grid item className={classes.grid_item} xs={12} sm={8}>
        <TextField
          label="First Name"
          variant="standard"
          className={classes.textField}
        />
        <TextField
          label="Middle Name"
          variant="standard"
          className={classes.textField}
        />
        <TextField
          label="Last Name"
          variant="standard"
          className={classes.textField}
        />
        <TextField
          label="Mother's Name"
          variant="standard"
          className={classes.textField}
        />
        <br />
        <DatePicker
          keyboard
          label="date picker"
          minDate={new Date('12/26/2005')}
        />
      </Grid>
      <Grid
        item
        className={classNames(classes.grid_item, classes.commentBox)}
        xs={12}
        sm={4}
      >
        <TextField
          label="Comment"
          name="comment"
          variant="outlined"
          multiline
          rows="4"
          margin="normal"
          className={classes.commentField}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(TestGrid);
