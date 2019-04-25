import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
// icons import begin
// import IconButton from '@material-ui/core/IconButton';
// import RetailIcon from '@material-ui/icons/AddShoppingCartTwoTone';
// import FaceIcon from '@material-ui/icons/FaceTwoTone';
// import AccountBalanceIcon from '@material-ui/icons/AccountBalanceTwoTone';
// import MoneyTransferIcon from '@material-ui/icons/EuroSymbolTwoTone';
// import FaxIcon from '@material-ui/icons/PrintTwoTone';
// import EbtIcon from '@material-ui/icons/CreditCardTwoTone';
// import OtherSaleIcon from '@material-ui/icons/HelpTwoTone';
// import AtmIcon from '@material-ui/icons/LocalAtmTwoTone';
// import MoneyOrderIcon from '@material-ui/icons/AttachMoneyTwoTone';
// icons import end
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import Modal from '@material-ui/core/Modal';
import { menuSelect, customerSelect, searchReset } from '../../actions';
import SearchBar from '../SearchBar';
import SearchResult from '../SearchResult';
import AddNewCustomerButton from '../AddNewCustomerButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import Tooltip from '@material-ui/core/Tooltip';

// images
import Atm from './Icons/atm.png';
import BillPay from './Icons/bill-pay.png';
import CashIn from './Icons/cash-in.png';
import CashOut from './Icons/cash-out.png';
import Ebt from './Icons/ebt.png';
import Fax from './Icons/Fax.png';
import Lottery from './Icons/lottery.png';
import MoneyOrder from './Icons/money-order.png';
import ReceiveMoney from './Icons/receive-money.png';
import SendMoney from './Icons/send-money.png';
import Retail from './Icons/retail.png';
import OtherSales from './Icons/other-sale.png';

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
  },
  addBtnContainer: {
    with: '90%',
    display: 'flex',
    flexDirection: 'row-reverse'
  }
});

const menus = [
  {
    label: 'ATM',
    needCustomer: false,
    route: '/atm',
    imgComp: Atm
  },
  {
    label: 'Bill Pay',
    needCustomer: true,
    route: '/bill-pay',
    imgComp: BillPay
  },
  {
    label: 'Cash In',
    needCustomer: false,
    route: '/cash-in',
    imgComp: CashIn
  },
  {
    label: 'Cash Out',
    needCustomer: false,
    route: '/cash-out',
    imgComp: CashOut
  },
  {
    label: 'Lottery',
    needCustomer: false,
    route: '/lottery',
    imgComp: Lottery
  },
  {
    label: 'Receive Money',
    needCustomer: true,
    route: '/receive-money',
    imgComp: ReceiveMoney
  },
  {
    label: 'Send Money',
    needCustomer: true,
    route: '/send-money',
    imgComp: SendMoney
  },
  {
    label: 'Fax',
    needCustomer: false,
    route: '/fax',
    imgComp: Fax
  },
  {
    label: 'Money Order',
    needCustomer: true,
    route: '/money-order',
    imgComp: MoneyOrder
  },
  {
    label: 'EBT',
    needCustomer: false,
    route: '/ebt',
    imgComp: Ebt
  },
  {
    label: 'Retail',
    needCustomer: false,
    route: '/retail',
    imgComp: Retail
  },
  {
    label: 'Other Sales',
    needCustomer: false,
    route: '/other-sales',
    imgComp: OtherSales
  }
];

class MainMenue extends Component {
  state = {
    modalOpen: false
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
    this.props.searchReset();
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleMenuClick = event => {
    const { route, customer } = event.currentTarget.dataset;
    if (customer === 'true') {
      this.handleModalOpen();
      this.props.menuSelect(route);
    } else {
      this.props.history.push(route);
    }
  };

  render() {
    const { classes, menuSelected } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={40}>
          {menus.map((menuItem, index) => {
            return (
              <Grid key={index} item lg={3} md={6} xs={12}>
                <Paper className={classes.paper}>
                  <Tooltip title={menuItem.label} placement="top">
                    <ButtonBase
                      aria-label={menuItem.label}
                      data-name={menuItem.label}
                      data-route={menuItem.route}
                      data-customer={menuItem.needCustomer}
                      onClick={this.handleMenuClick.bind(this)}
                    >
                      <img alt={menuItem.label} src={menuItem.imgComp} />
                    </ButtonBase>
                  </Tooltip>
                </Paper>
              </Grid>
            );
          })}
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
            <div className={classes.addBtnContainer}>
              <AddNewCustomerButton color={orange[900]} fontSize="40" />
            </div>
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
  { menuSelect, customerSelect, searchReset }
)(withRouter(withStyles(styles)(MainMenue)));
