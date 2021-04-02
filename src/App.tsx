import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import User from './components/User/User';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route exact path='/users'>
            <Users />
          </Route>

          <Route path="/users/:id">
            <User/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
