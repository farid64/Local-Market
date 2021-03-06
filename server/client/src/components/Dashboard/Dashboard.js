import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import teal from '@material-ui/core/colors/teal';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';
import SearchResult from '../SearchResult';
import MainMenu from '../Main Menu/MainMenu';
import Title from './Title';
import AtmPage from '../Atm/AtmPage';
import EbtPage from '../Ebt/EbtPage';
import CustomerUpdatePage from '../CustomerUpdate/CustomerUpdatePage';
import MoneyOrderPage from '../Money Order/MoneyOrderPage';
// import TestGrid from "../Test Components/gridtest";
import testComponentparent from '../Test Components/testComponentparent';
import SearchBarWithPopper from '../SearchBarWithPopper';
import AddCustomerButton from '../AddNewCustomerButton';
import ReceiveMoneyPage from '../Receive Money/ReceiveMoneyPage';
import BillPayPage from '../Bill Pay/BillPayPage';
// import AtmPage from '../Atm/AtmPage';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  addCustomerButton: {
    marginRight: 5,
    marginLeft: 5,
    textDecoration: 'none'
  },
  addCustomerIcon: {
    fontSize: 30,
    color: 'white'
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Dashboard extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='absolute'
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
          >
            <Toolbar
              disableGutters={!this.state.open}
              className={classes.toolbar}
            >
              <IconButton
                color='inherit'
                aria-label='Open drawer'
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>

              <Title />
              <AddCustomerButton
                color={teal[50]}
                fontSize='30'
                style={{ marginRight: -20 }}
              />
              <SearchBarWithPopper />
            </Toolbar>
          </AppBar>
          <Drawer
            variant='permanent'
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </Drawer>

          {/* beginning of Routes */}

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />

            <Route exact path='/' component={MainMenu} />

            <Route
              path='/linechart'
              render={() => (
                <div>
                  <Typography variant='h4' gutterBottom component='h2'>
                    Orders
                  </Typography>
                  <Typography
                    component='div'
                    className={classes.chartContainer}
                  >
                    <SimpleLineChart />
                  </Typography>
                </div>
              )}
            />
            <Route
              path='/table'
              render={() => (
                <div>
                  <Typography variant='h4' gutterBottom component='h2'>
                    Products
                  </Typography>
                  <div className={classes.tableContainer}>
                    <SimpleTable />
                  </div>
                </div>
              )}
            />
            <Route path='/searchresult' component={SearchResult} />
            <Route path='/atm' component={AtmPage} />
            <Route path='/ebt' component={EbtPage} />
            <Route path='/customer_update' component={CustomerUpdatePage} />
            <Route path='/test_grid' component={testComponentparent} />
            <Route path='/face' render={() => <div>Face</div>} />
            <Route path='/money-order' component={MoneyOrderPage} />
            <Route path='/receive-money' component={ReceiveMoneyPage} />
            <Route path='/bill-pay' component={BillPayPage} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
