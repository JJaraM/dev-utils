/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import { HashRouter, Route, Switch} from "react-router-dom";

import { Home } from './Home';
import { DiffFiles } from './DiffFiles';
/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export const AppRouter: React.StatelessComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/diffFiles/:fileName" exact component={DiffFiles} />
      </Switch>
    </HashRouter>
  );
}
