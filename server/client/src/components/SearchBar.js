import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
// import Typography from "@material-ui/core/Typography";
// import Popper from "@material-ui/core/Popper";
import { getUser, searchTermChange } from "../actions";
// import SearchResult from "./SearchResult";

const styles = theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
});

class SearchBar extends Component {
  // state = {
  //   anchorEl: null
  // };
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
  // handlePopClose() {
  //   this.setState({
  //     anchorEl: null
  //   });
  // }

  render() {
    const { searchTerm, classes } = this.props;
    // const { anchorEl } = this.state;
    // const openPop = Boolean(anchorEl);

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          value={searchTerm}
          onChange={this.onInputChange.bind(this)}
        />
        {/* <Popper
          open={openPop}
          anchorEl={anchorEl}
          placement='bottom-start'
          onClose={this.handlePopClose.bind(this)}
        >
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
          <SearchResult />
        </Popper> */}
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
