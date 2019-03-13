import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'yellow',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center'
    }
})

const MainMenue = ({ classes }) => {
    return (
        <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item sm={12}>
          <Paper className={classes.paper}>sm=12</Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>sm=6</Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>sm=6</Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>sm=3</Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>sm=3</Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>sm=3</Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>sm=3</Paper>
        </Grid>
      </Grid>
    </div>
    )
}

export default withStyles(styles)(MainMenue);