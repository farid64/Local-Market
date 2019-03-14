import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RetailIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import FaceIcon from '@material-ui/icons/FaceTwoTone';
import AccountBalanceIcon from '@material-ui/icons/AccountBalanceTwoTone';
import MoneyTransferIcon from '@material-ui/icons/EuroSymbolTwoTone';
import FaxIcon from '@material-ui/icons/PrintTwoTone';
import EbtIcon from '@material-ui/icons/CreditCardTwoTone';
import OtherSaleIcon from '@material-ui/icons/HelpTwoTone';
import AtmIcon from '@material-ui/icons/LocalAtmTwoTone';
import MoneyOrderIcon from '@material-ui/icons/AttachMoneyTwoTone';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  button: {
    fontSize: 100
  }
});

const MainMenue = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={40}>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Delete">
              <RetailIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Face">
              <FaceIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Face">
              <AccountBalanceIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3" gutterBottom>
              Cash In
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3" gutterBottom>
              Cash Out
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer">
              <MoneyTransferIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer">
              <FaxIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer">
              <EbtIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer">
              <OtherSaleIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer">
              <AtmIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer">
              <MoneyOrderIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(MainMenue);
