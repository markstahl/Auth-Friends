import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import FriendList from './FriendList';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route { ...rest } render={() => {
      if (localStorage.getItem('token')) {
        return <FriendList />
      } else {
        return <Redirect to="/login" />
      }
    }} />
  );
};

export default PrivateRoute;