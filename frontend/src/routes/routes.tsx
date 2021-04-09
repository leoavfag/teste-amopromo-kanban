import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Kanban from '../pages/Kanban';

const Routes = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Kanban} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
