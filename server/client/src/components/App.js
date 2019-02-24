import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <SearchResult />
        </header>
      </div>
    );
  }
}

export default App;
