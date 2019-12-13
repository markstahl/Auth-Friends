import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendList from './components/FriendList';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
          <PrivateRoute exact path="/friendlist" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
