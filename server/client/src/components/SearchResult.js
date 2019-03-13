import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions';

class SearchResult extends Component {
  renderResult() {
    const { searchResult } = this.props;
    if(searchResult[0]){
      console.log(searchResult[0].id);
    }
    return searchResult.map(item => {
      return (
        <ul key={item.id}>
          <li>{item.firstname}</li>
          <li>{item.lastname}</li>
          <li>{item.birthday}</li>
        </ul>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <p>Search result will be shown here!</p>
          {this.renderResult()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResult: state.search.searchResult,
    searchTerm: state.search.searchTerm
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(SearchResult);
