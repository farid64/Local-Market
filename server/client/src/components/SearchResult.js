import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import blue from '@material-ui/core/colors/blue';
import { getUser, customerSelect } from '../actions';

const styles = theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
});

class SearchResult extends Component {
  handleListItemClick = id => {
    const {
      history,
      menuSelected: { route }
    } = this.props;
    console.log(route);
    this.props.customerSelect(id, history, route);
    this.props.onClose();
  };

  render() {
    const { searchResult, classes } = this.props;
    return (
      <List>
        {searchResult.map(item => (
          <ListItem
            button
            onClick={() => this.handleListItemClick(item.id)}
            key={item.id}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.firstname} secondary={item.lastname} />
          </ListItem>
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResult: state.search.searchResult,
    searchTerm: state.search.searchTerm,
    menuSelected: state.navigation.menuSelected
  };
};

export default connect(
  mapStateToProps,
  { getUser, customerSelect }
)(withRouter(withStyles(styles)(SearchResult)));
