import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
