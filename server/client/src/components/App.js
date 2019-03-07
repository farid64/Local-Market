import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MuiRoot from './MuiRoot';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

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
      <div className={classes.App}>
        <header className="App-header">
          <SearchBar />
          <SearchResult />
        </header>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default MuiRoot(withStyles(styles)(App));
