import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Nav/NavBar';

function App() {
  return (
  <BrowserRouter>
    <NavBar />
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
