import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Order from './pages/Order/Order';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/order" component={Order} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
