import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import { Login } from './pages/Login'

function Routes() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Login}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;