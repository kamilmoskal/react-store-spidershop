import React, { Component } from 'react';
import Nav from'./containers/Nav';
import SpiderList from'./containers/SpiderList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SpiderList />
      </div>
    );
  }
}

export default App;
