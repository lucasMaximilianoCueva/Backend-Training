import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nav from './components/Nav/Nav';
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Add from "./components/Add/Add";
import Update from "./components/Update/Update";
import Cart from './components/Cart/Cart';
import CartDetail from "./components/CartDetail/CartDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav />
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/products">
            <ItemListContainer />
          </Route>
          <Route exact path="/products/:id">
            <ItemDetail />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/update/:id">
            <Update />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/cart/:id">
            <CartDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
