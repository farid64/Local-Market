import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
// icons import begin
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
// icons import end
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { menuSelect, customerSelect } from '../actions';
import SearchBar from './SearchBar.1';
import SearchResult from './SearchResult.1';

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
  },
  modalContainer: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: '10%',
    left: '33%'
  }
});

class MainMenue extends Component {
  state = {
    modalOpen: false
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleMenuClick = event => {
    console.log(event.currentTarget.dataset.name);
    this.handleModalOpen();
    this.props.menuSelect(event.currentTarget.dataset.name);
  };

  render() {
    const { classes, menuSelected } = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={40}>
          <Grid item lg={3} md={6} xs={12}>
            <Paper className={classes.paper}>
              <IconButton
                aria-label="Retail"
                data-name="retail"
                onClick={this.handleMenuClick.bind(this)}
              >
                <RetailIcon className={classes.button} />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Paper className={classes.paper}>
              <IconButton
                aria-label="Face"
                data-name="face"
                onClick={this.handleMenuClick.bind(this)}
              >
                <FaceIcon className={classes.button} />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Paper className={classes.paper}>
              <IconButton
                aria-label="Account Balance"
                data-name="checks"
                onClick={this.handleMenuClick.bind(this)}
              >
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
              <IconButton
                aria-label="Money Transfer"
                data-name="money_transfer"
                onClick={this.handleMenuClick.bind(this)}
              >
                <MoneyTransferIcon className={classes.button} />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Paper className={classes.paper}>
              <IconButton
                aria-label="Money Transfer"
                data-name="fax"
                onClick={this.handleMenuClick.bind(this)}
              >
                <FaxIcon className={classes.button} />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Paper className={classes.paper}>
              <IconButton
                aria-label="Money Transfer"
                data-name="ebt"
                onClick={this.handleMenuClick.bind(this)}
              >
                <EbtIcon className={classes.button} />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Paper className={classes.paper}>
              <IconButton
                aria-label="Money Transfer"
                data-name="other_sales"
                onClick={this.handleMenuClick.bind(this)}
              >
                <OtherSaleIcon className={classes.button} />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Paper className={classes.paper}>
              <IconButton
                aria-label="Money Transfer"
                data-name="atm"
                onClick={this.handleMenuClick.bind(this)}
              >
                <AtmIcon className={classes.button} />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Paper className={classes.paper}>
              <IconButton
                aria-label="Money Transfer"
                data-name="money_order"
                onClick={this.handleMenuClick.bind(this)}
              >
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

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpen}
          onClose={this.handleModalClose.bind(this)}
        >
          <div className={classes.modalContainer}>
            <SearchBar />
            <SearchResult onClose={this.handleModalClose.bind(this)} />
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuSelected: state.search.menuSelected,
    customerSelected: state.search.customerSelected
  };
};

export default connect(
  mapStateToProps,
  { menuSelect, customerSelect }
)(withStyles(styles)(MainMenue));