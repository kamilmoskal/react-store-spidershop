import React, { Component } from 'react';
import Nav from'./containers/Nav/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './containers/Products/Products';
import Chart from './containers/Chart/Chart';
import Home from './containers/Home/Home';
import Product from './containers/Product/Product';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/" component={Products}/>
            <Route path="/products/" component={Products}/>
            <Route path="/chart/" component={Chart}/>
            <Route path="/product/:id" component={Product}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
