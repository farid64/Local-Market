import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { getUser, searchTermChange } from '../actions';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
});

class SearchBar extends Component {
  onInputChange(event) {
    const { value } = event.target;
    this.props.searchTermChange(value);
    this.props.getUser(value);
    // this.setState({
    //   anchorEl: event.currentTarget
    // });
    if (this.props.forPopper) {
      this.props.forPopper(event.currentTarget, Boolean(value));
    }
  }

  render() {
    const { searchTerm, classes } = this.props;

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          value={searchTerm}
          onChange={this.onInputChange.bind(this)}
        />
      </div>
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
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getUser, searchTermChange }
)(withStyles(styles)(SearchBar));
