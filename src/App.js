import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './headerComponent';
import IssueListComponent from './issueListComponent';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <ul>
          <IssueListComponent />
        </ul>
      </div>
    );
  }
}
export default App;
