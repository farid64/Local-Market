import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { getUser, searchTermChange } from '../actions';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  }
});

class SearchBar extends Component {
  state = {
    anchorEl: null,
  }
  onInputChange(event) {
    this.props.searchTermChange(event.target.value);
    this.props.getUser(event.target.value);
    this.setState({
      anchorEl: event.currentTarget
    });
  }
  handlePopClose(){
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const { searchTerm, classes } = this.props;
    const { anchorEl } = this.state;
    const openPop = Boolean(anchorEl);

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={searchTerm}
          onChange={this.onInputChange.bind(this)}
        />
        <Popover
          id="simple-popper"
          open={openPop}
          anchorEl={anchorEl}
          onClose={this.handlePopClose.bind(this)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>The content of the Popover.</Typography>
        </Popover>
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
  classes: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  { getUser, searchTermChange }
)(withStyles(styles)(SearchBar));
