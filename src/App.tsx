import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Users from './components/Users/Users';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/users'>
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
