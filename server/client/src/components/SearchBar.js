import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { getUser, searchTermChange } from '../actions';

const styles = theme => ({
  formClass: {
    textDecorationLine: 'none',
    position: 'relative',
    bottom: 50,
    color: theme.palette.primary.dark,
    borderWidth: 3,
    borderColor: theme.palette.primary.light,
  }
});

class SearchBar extends Component {
  onInputChange(event) {
    this.props.searchTermChange(event.target.value);
    this.props.getUser(event.target.value);
  }

  render() {
    const { searchTerm, classes } = this.props;
    return (
      <form className={classes.formClass}>
        <input
          placeholder="search users"
          value={searchTerm}
          onChange={this.onInputChange.bind(this)}
        />
        <a href="/api/userInfo">Do this</a>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.search.searchTerm,
    searchResult: state.search.searchResult
  };
};

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  { getUser, searchTermChange }
)(withStyles(styles)(SearchBar));
