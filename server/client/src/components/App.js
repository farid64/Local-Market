import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MuiRoot from './MuiRoot';
import Dashboard from './Dashboard/Dashboard';

const styles = theme => ({
  App: {
    borderColor: theme.palette.primary.light,
    borderWidth: 5,
    backgroundColor: theme.palette.primary.dark,
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Dashboard />
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default MuiRoot(withStyles(styles)(App));
