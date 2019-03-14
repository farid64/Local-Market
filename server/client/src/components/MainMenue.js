import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { menuSelect, customerSelect } from '../actions';

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



class  MainMenue extends Component {

  handleMenuClick(event){
    console.log(event.currentTarget.dataset.name);
    this.props.menuSelect(event.currentTarget.dataset.name);
  }

  render() {
    const { classes, menuSelected } = this.props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={40}>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Retail" data-name="retail" onClick={this.handleMenuClick.bind(this)}>
              <RetailIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Face" data-name="face" onClick={this.handleMenuClick.bind(this)}>
              <FaceIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Account Balance" data-name="checks" onClick={this.handleMenuClick.bind(this)}>
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
            <IconButton aria-label="Money Transfer" data-name="money_transfer" onClick={this.handleMenuClick.bind(this)}>
              <MoneyTransferIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer" data-name="fax" onClick={this.handleMenuClick.bind(this)}>
              <FaxIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer" data-name="ebt" onClick={this.handleMenuClick.bind(this)}>
              <EbtIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer" data-name="other_sales" onClick={this.handleMenuClick.bind(this)}>
              <OtherSaleIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer" data-name="atm" onClick={this.handleMenuClick.bind(this)}>
              <AtmIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton aria-label="Money Transfer" data-name="money_order" onClick={this.handleMenuClick.bind(this)}>
              <MoneyOrderIcon className={classes.button} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Paper className={classes.paper}>
            <IconButton onClick={() => console.log(menuSelected)}>
              <AtmIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  }
};

const mapStateToProps = state => {
  return {
    menuSelected: state.search.menuSelected,
    customerSelected: state.search.customerSelected
  };
};

export default connect(
  mapStateToProps,
  { menuSelect, customerSelect}
)(withStyles(styles)(MainMenue));
