import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ROUTES from './constants/ROUTES';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Order from './pages/Order/Order';

const { HOME, ORDER } = ROUTES;

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={HOME} component={Home} />
      <Route path={ORDER} component={Order} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
