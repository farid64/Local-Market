import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const style = theme => ({
  grid_item: {
    border: `1px solid black`
  }
});

const TestGrid = ({ classes }) => {
  return (
    <Grid container>
      <Grid item className={classes.grid_item} xs={12} sm={7}>
        first
      </Grid>
      <Grid item className={classes.grid_item} xs={12} sm={5}>
        second
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(TestGrid);
