import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/protected'>Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
