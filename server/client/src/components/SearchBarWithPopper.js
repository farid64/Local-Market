import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const styles = theme => ({
  popperStyle: {
    zIndex: 99
  }
});

class SearchBarWithPopper extends Component {
  state = {
    anchorEl: null
  };

  handlePopper = (currentTarget, searchStatus) => {
    console.log(this);
    searchStatus
      ? this.setState({
          anchorEl: currentTarget
        })
      : this.setState({
          anchorEl: null
        });
  };

  handlePopClose() {
    this.setState({
      anchorEl: null
    });
  }

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const openPop = Boolean(anchorEl);

    return (
      <React.Fragment>
        <SearchBar forPopper={this.handlePopper} />
        <Popper
          open={openPop}
          anchorEl={anchorEl}
          placement='bottom-start'
          onClose={this.handlePopClose.bind(this)}
          className={classes.popperStyle}
        >
          <Paper>
            <Typography>The content of the Popover.</Typography>
            <SearchResult />
          </Paper>
        </Popper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SearchBarWithPopper);
