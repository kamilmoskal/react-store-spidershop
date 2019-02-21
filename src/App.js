import React, { Component } from 'react';
import Nav from'./containers/Nav/Nav';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './containers/Products/Products';
import Chart from './containers/Chart/Chart';
import Home from './containers/Home/Home';
import Product from './containers/Product/Product';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/" component={Products}/>
            <Route path="/chart/" component={Chart}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
