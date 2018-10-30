/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import { HashRouter, Route, Switch, Redirect} from "react-router-dom";

import { ProjectRouter } from '../renderer/ProjectRouter';
import { MainRouter } from '../renderer/MainRouter';
import { SettingsRouter } from '../renderer/SettingsRouter';

import '../renderer/variables.scss';
import '../renderer/styles.scss';

/*
* Handles all routes for the application
* @since 1.0
*/
export const AppRouter: React.StatelessComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={MainRouter} />
        <Route path="/app/settings" exact component={SettingsRouter} />

        <Route path="/app/project/:id" exact component={ProjectRouter} />
        <Route path="/app/project/:id/changes" exact component={ProjectRouter} />
      </Switch>
    </HashRouter>
  );
}
